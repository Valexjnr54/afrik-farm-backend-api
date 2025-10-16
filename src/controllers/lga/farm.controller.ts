import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { body, validationResult } from 'express-validator';

const prisma = new PrismaClient();

export async function createFarm(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  const rules = [
    body('farmerId').notEmpty().withMessage('farmerId is required').bail().isInt().withMessage('farmerId must be an integer'),
    body('name').notEmpty().withMessage('name is required').bail().isString().trim().isLength({ min: 2 }).withMessage('name too short'),
    body('location').notEmpty().withMessage('location is required').bail().isString().trim(),
    body('latitude').optional().isFloat().withMessage('latitude must be a number'),
    body('longitude').optional().isFloat().withMessage('longitude must be a number'),
    body('productionType').notEmpty().withMessage('productionType is required').bail().isIn(['Crop','Livestock']).withMessage('Invalid productionType'),
    body('size').optional().isFloat().withMessage('size must be a number'),
    body('sizeUnit').optional().isIn(['Hectare','Acre']).withMessage('Invalid sizeUnit'),
    body('stage').optional().isIn(['Cleared','Planted','Harvesting']).withMessage('Invalid stage'),
    body('inChargeId').optional().isInt().withMessage('inChargeId must be an integer'),
    body('number_of_workers').optional().isInt().withMessage('number_of_workers must be an integer')
  ];

  await Promise.all(rules.map(r => r.run(request)));
  const errors = validationResult(request);
  if (!errors.isEmpty()) return response.status(422).json({ status: 'fail', errors: errors.array() });

  const { farmerId, name, location, latitude, longitude, productionType, productionSubtype, size, sizeUnit, stage, ownershipDocument, inChargeId, number_of_workers } = request.body as any;

  try {
    const farmer = await prisma.farmer.findUnique({ where: { id: Number(farmerId) } });
    if (!farmer) return response.status(404).json({ message: 'Farmer not found' });

    const farm = await prisma.farm.create({
      data: {
        farmerId: Number(farmerId),
        name: name.trim(),
        location: location.trim(),
        latitude: latitude != null ? Number(latitude) : undefined,
        longitude: longitude != null ? Number(longitude) : undefined,
        type: productionType,
        production_type: productionSubtype ? String(productionSubtype).trim() : undefined,
        size: size != null ? Number(size) : undefined,
        sizeUnit: sizeUnit || undefined,
        stage: stage || undefined,
        ownershipDocument: ownershipDocument || undefined,
        number_of_workers: number_of_workers ? Number(number_of_workers) : undefined,
      }
    });

    return response.status(201).json({ message: 'Farm created', data: farm });
  } catch (error) {
    console.error('createFarm error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function listFarms(request: Request, response: Response) {
  try {
    const lgaId = request.user?.lgaId ?? (request.query.lga_id ? parseInt(request.query.lga_id as string, 10) : undefined);
    const where = lgaId ? { farmer: { lgaId } } : undefined;
    const farms = await prisma.farm.findMany({ where, orderBy: { createdAt: 'desc' } });
    return response.status(200).json({ message: 'Farms fetched', data: farms });
  } catch (error) {
    console.error('listFarms error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getFarm(request: Request, response: Response) {
  const id = parseInt(request.params.id, 10);
  if (!id) return response.status(400).json({ message: 'Farm id required' });
  try {
    const farm = await prisma.farm.findUnique({ where: { id } });
    if (!farm) return response.status(404).json({ message: 'Farm not found' });
    return response.status(200).json({ message: 'Farm fetched', data: farm });
  } catch (error) {
    console.error('getFarm error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateFarm(request: Request, response: Response) {
  const id = parseInt(request.params.id, 10);
  if (!id) return response.status(400).json({ message: 'Farm id required' });

  const rules = [
    body('name').optional().isString().trim().isLength({ min: 2 }).withMessage('name too short'),
    body('location').optional().isString().trim(),
    body('latitude').optional().isFloat(),
    body('longitude').optional().isFloat(),
    body('productionType').optional().isIn(['Crop','Livestock']),
    body('size').optional().isFloat(),
    body('sizeUnit').optional().isIn(['Hectare','Acre']),
    body('stage').optional().isIn(['Cleared','Planted','Harvesting']),
  ];

  await Promise.all(rules.map(r => r.run(request)));
  const errors = validationResult(request);
  if (!errors.isEmpty()) return response.status(422).json({ status: 'fail', errors: errors.array() });

  const payload = request.body as any;
  try {
    const farm = await prisma.farm.update({ where: { id }, data: payload });
    return response.status(200).json({ message: 'Farm updated', data: farm });
  } catch (error) {
    console.error('updateFarm error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteFarm(request: Request, response: Response) {
  const id = parseInt(request.params.id, 10);
  if (!id) return response.status(400).json({ message: 'Farm id required' });
  try {
    const farm = await prisma.farm.findUnique({ where: { id } });
    if (!farm) return response.status(404).json({ message: 'Farm not found' });
    await prisma.farm.delete({ where: { id } });
    return response.status(200).json({ message: 'Farm deleted' });
  } catch (error) {
    console.error('deleteFarm error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
