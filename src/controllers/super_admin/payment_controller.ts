import { Request, Response } from 'express';
import { PrismaClient } from '../../models';

const prisma = new PrismaClient();

// Returns total revenue generated (sum of invoice.amount where has_paid = true)
export async function getRevenue(request: Request, response: Response) {
    const admin_id = (request as any).admin?.adminId;
    if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (!check_admin || check_admin.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

        const revenueAgg = await prisma.invoice.aggregate({
            _sum: { amount: true },
            where: { has_paid: true }
        });

        const totalRevenue = revenueAgg._sum.amount ?? 0;

        return response.status(200).json({ message: 'Revenue fetched', data: { totalRevenue } });
    } catch (error) {
        console.error('getRevenue error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

// Returns all payments (invoices) with farmer info — supports optional pagination via query params
export async function getAllPayments(request: Request, response: Response) {
    const admin_id = (request as any).admin?.adminId;
    if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (!check_admin || check_admin.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

        const page = Math.max(1, parseInt(String(request.query.page || '1'), 10));
        const limit = Math.max(1, parseInt(String(request.query.limit || '50'), 10));
        const skip = (page - 1) * limit;

        const [payments, total] = await Promise.all([
            prisma.invoice.findMany({
                include: {
                    farmer: {
                        select: { id: true, fullname: true, email: true, phone_number: true }
                    }
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit
            }),
            prisma.invoice.count()
        ]);

        return response.status(200).json({ message: 'Payments fetched', meta: { total, page, limit }, data: payments });
    } catch (error) {
        console.error('getAllPayments error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}