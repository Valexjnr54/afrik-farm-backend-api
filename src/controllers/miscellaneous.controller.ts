import { Request, Response } from 'express';
import { PrismaClient } from '../models';

const prisma = new PrismaClient();

export async function allBanks(request: Request, response: Response) {
    try {
        const banks = await prisma.bank.findMany({
            orderBy: { name: 'asc' }
        });
        return response.status(200).json({ message: 'Banks fetched', data: banks });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}