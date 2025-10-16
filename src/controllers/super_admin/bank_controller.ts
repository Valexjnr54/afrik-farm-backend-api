import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { PrismaClient } from '../../models';

const prisma = new PrismaClient();

// Validation chain for the bulk payload
export const validateBulkBanks = [
  body('data').isArray({ min: 1 }).withMessage('data must be a non-empty array'),
  body('data.*.name').notEmpty().withMessage('bank name is required').bail().isString(),
  body('data.*.code').notEmpty().withMessage('bank code is required').bail().isString(),
];

export const bulkCreateBanks = async (request: Request, response: Response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(422).json({ errors: errors.array() });
  }

  const payload = request.body.data as Array<{ name: string; code: string }>;
  if (!Array.isArray(payload) || payload.length === 0) {
    return response.status(400).json({ message: 'data must be a non-empty array' });
  }

  try {
    // Normalize codes (trim)
    const normalized = payload.map((b) => ({
      name: String(b.name).trim(),
      code: String(b.code).trim(),
    }));

    // Fetch existing bank codes to avoid unique constraint errors
    const codes = normalized.map((b) => b.code);
  const existing = await prisma.bank.findMany({ where: { code: { in: codes } }, select: { code: true } });
  const existingSet = new Set(existing.map((e: { code: string }) => e.code));

    // Deduplicate incoming payload by code (keep the first occurrence)
    const uniqueMap = new Map<string, { name: string; code: string }>();
    for (const b of normalized) {
      if (!uniqueMap.has(b.code)) uniqueMap.set(b.code, b);
    }
    const uniqueNormalized = Array.from(uniqueMap.values());

    // Filter out codes that already exist in DB
    const toCreate = uniqueNormalized.filter((b) => !existingSet.has(b.code));

    let created: any[] = [];
    if (toCreate.length > 0) {
      // Use createMany with skipDuplicates to avoid unique constraint failures
      const result = await prisma.bank.createMany({ data: toCreate, skipDuplicates: true });
      // Fetch the created rows (selecting id,name,code)
      const createdCodes = toCreate.map((t) => t.code);
      created = await prisma.bank.findMany({ where: { code: { in: createdCodes } }, select: { id: true, name: true, code: true } });
    }

    return response.status(201).json({
      message: 'Bulk bank import completed',
      createdCount: created.length,
      skippedCount: normalized.length - created.length,
      created: created.map((c) => ({ id: c.id, name: c.name, code: c.code })),
    });
  } catch (err: any) {
    console.error('bulkCreateBanks error', err);
    // Prisma unique constraint may still surface in rare race conditions
    return response.status(500).json({ message: 'Server error', error: err.message || err });
  }
};

export default { bulkCreateBanks, validateBulkBanks };
