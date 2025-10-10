import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { body, validationResult } from 'express-validator';

const prisma = new PrismaClient();

export async function createState(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  // validate input
  const validationRules = [
    body('name').notEmpty().withMessage('State name is required').bail().isString().trim().isLength({ min: 2 }).withMessage('State name too short'),
    body('code').optional({ nullable: true }).isString().trim().isLength({ min: 1 }).withMessage('code must be a string'),
    body('countryId').notEmpty().withMessage('countryId is required').bail().isInt().withMessage('countryId must be an integer')
  ];

  await Promise.all(validationRules.map(rule => rule.run(request)));
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  const { name, code, countryId } = request.body;
  try {
    const existing = await prisma.state.findFirst({ where: { name: name.trim(), countryId } });
    if (existing) return response.status(400).json({ message: 'State already exists for this country' });

    const state = await prisma.state.create({ data: { name: name.trim(), code: code ? String(code).trim() : undefined, countryId } });
    return response.status(201).json({ message: 'State created', data: state });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function listStates(request: Request, response: Response) {
  const countryId = request.query.country_id ? parseInt(request.query.country_id as string, 10) : undefined;
  try {
    const states = await prisma.state.findMany({ where: countryId ? { countryId } : undefined, orderBy: { name: 'asc' } });
    return response.status(200).json({ message: 'States fetched', data: states });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getState(request: Request, response: Response) {
  const id = parseInt(request.params.id, 10);
  if (!id) return response.status(400).json({ message: 'State id required' });
  try {
    const state = await prisma.state.findUnique({ where: { id } });
    if (!state) return response.status(404).json({ message: 'State not found' });
    return response.status(200).json({ message: 'State fetched', data: state });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteState(request: Request, response: Response) {
  const id = parseInt(request.params.id, 10);
  if (!id) return response.status(400).json({ message: 'State id required' });
  try {
    const state = await prisma.state.findUnique({ where: { id } });
    if (!state) return response.status(404).json({ message: 'State not found' });
    await prisma.state.delete({ where: { id } });
    return response.status(200).json({ message: 'State deleted' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

/**
 * Bulk create states and their LGAs.
 * Accepts request.body as an array of objects: { state: string, alias?: string, lgas: string[] }
 * Optionally accepts countryId in body or query. If not provided, will try to find a country named 'Nigeria' (case-insensitive).
 */
export async function bulkCreateStates(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  // validate request using express-validator
  const validationRules = [
    body().isArray({ min: 1 }).withMessage('Request body must be a non-empty array'),
    // each item should be an object that contains at least one of state/name/alias
    body('*').custom((item) => {
      if (typeof item !== 'object' || item === null) throw new Error('Each item must be an object');
      if (!item.state && !item.name && !item.alias) throw new Error('Each item must have one of: state, name or alias');
      return true;
    }),
    body('*.lgas').optional().isArray().withMessage('lgas must be an array of strings'),
    body('*.lgas.*').optional().isString().trim(),
    body('*.state').optional().isString().trim(),
    body('*.name').optional().isString().trim(),
    body('*.alias').optional().isString().trim(),
    // allow optional countryId as top-level field (if client sends an object wrapper)
    body('countryId').optional().isInt().withMessage('countryId must be an integer'),
  ];
  await Promise.all(validationRules.map(rule => rule.run(request)));
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  const payload = request.body as any[];
  const countryIdFromBody = (request.body as any).countryId ?? undefined;
  const countryIdFromQuery = request.query.country_id ? parseInt(request.query.country_id as string, 10) : undefined;
  let countryId: number | undefined = countryIdFromBody || countryIdFromQuery;

  try {
    if (!countryId) {
      // try to find Nigeria (common case) using a case-insensitive JS match to avoid Prisma filter differences
      const countries = await prisma.country.findMany();
      const country = countries.find(c => (c.name || '').toLowerCase().includes('nigeria'));
      if (country) countryId = country.id;
    }

    if (!countryId) return response.status(400).json({ message: 'countryId is required either in body, query or a Nigeria country record must exist' });

    const results: Array<{ state: string; created: boolean; lgasCreated: number; skippedLgas: number }> = [];

    for (const item of payload) {
      const stateName = (item.state || item.name || item.state_name || item.alias) as string;
      const lgas = Array.isArray(item.lgas) ? item.lgas : [];
      if (!stateName) continue;

      // create or find state
      let state = await prisma.state.findFirst({ where: { name: stateName.trim(), countryId } });
      let created = false;
      if (!state) {
        state = await prisma.state.create({ data: { name: stateName.trim(), code: item.alias ? String(item.alias).trim() : undefined, countryId } });
        created = true;
      }

      let lgasCreated = 0;
      let skippedLgas = 0;
      for (const lgaNameRaw of lgas) {
        const lgaName = String(lgaNameRaw).trim();
        if (!lgaName) continue;
        const existingLga = await prisma.lga.findFirst({ where: { name: lgaName, stateId: state.id } });
        if (existingLga) {
          skippedLgas += 1;
          continue;
        }
        await prisma.lga.create({ data: { name: lgaName, stateId: state.id } });
        lgasCreated += 1;
      }

      results.push({ state: state.name, created, lgasCreated, skippedLgas });
    }

    return response.status(201).json({ message: 'Bulk import completed', data: results });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
