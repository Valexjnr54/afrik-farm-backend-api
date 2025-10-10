import { Request, Response } from 'express';
import { PrismaClient } from '../../models';

const prisma = new PrismaClient();

export async function createLga(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  const { name, code, stateId } = request.body;
  if (!stateId) return response.status(400).json({ message: 'stateId is required' });
  try {
    const existing = await prisma.lga.findFirst({ where: { name, stateId } });
    if (existing) return response.status(400).json({ message: 'LGA already exists for this state' });

    const lga = await prisma.lga.create({ data: { name, code, stateId } });
    return response.status(201).json({ message: 'LGA created', data: lga });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function listLgas(request: Request, response: Response) {
  const stateId = request.query.state_id ? parseInt(request.query.state_id as string, 10) : undefined;
  try {
    const lgas = await prisma.lga.findMany({ where: stateId ? { stateId } : undefined, orderBy: { name: 'asc' } });
    return response.status(200).json({ message: 'Lgas fetched', data: lgas });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getLga(request: Request, response: Response) {
  const id = parseInt(request.params.id, 10);
  if (!id) return response.status(400).json({ message: 'Lga id required' });
  try {
    const lga = await prisma.lga.findUnique({ where: { id } });
    if (!lga) return response.status(404).json({ message: 'Lga not found' });
    return response.status(200).json({ message: 'Lga fetched', data: lga });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteLga(request: Request, response: Response) {
  const id = parseInt(request.params.id, 10);
  if (!id) return response.status(400).json({ message: 'Lga id required' });
  try {
    const lga = await prisma.lga.findUnique({ where: { id } });
    if (!lga) return response.status(404).json({ message: 'Lga not found' });
    await prisma.lga.delete({ where: { id } });
    return response.status(200).json({ message: 'Lga deleted' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
