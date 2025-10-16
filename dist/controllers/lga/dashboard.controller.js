"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboard = dashboard;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function dashboard(request, response) {
    const user_id = request.user.id;
    // Check if user_id is not present or undefined
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const lgaAdmin = await prisma.users.findUnique({ where: { id: user_id }, include: { lga: true } });
        if (!lgaAdmin || !lgaAdmin.lga) {
            return response.status(404).json({ message: 'LGA or LGA Admin not found' });
        }
        const lgaId = lgaAdmin.lga.id;
        // Total farmers in this LGA
        const totalFarmers = await prisma.farmer.count({ where: { lgaId } });
        // Active farms: farms whose owning farmer is in this LGA and are verified
        const activeFarms = await prisma.farm.count({ where: { farmer: { lgaId }, verified: true } });
        // Loan disbursed: sum of invoice amounts for farmers in this LGA
        const loanAgg = await prisma.invoice.aggregate({
            _sum: { amount: true },
            where: { farmer: { lgaId } }
        });
        const loanDisbursed = loanAgg._sum.amount ?? 0;
        // Repayment rate: calculate if a repayments model exists, otherwise return null
        let repaymentRate = null;
        try {
            const anyRepaymentModel = prisma.repayment;
            if (anyRepaymentModel) {
                // assume repayments have fields: amount, invoiceId and createdAt and relation to invoice -> farmer
                const repaidAgg = await prisma.repayment.aggregate({ _sum: { amount: true }, where: { invoice: { farmer: { lgaId } } } });
                const repaid = repaidAgg._sum?.amount ?? 0;
                repaymentRate = loanDisbursed > 0 ? Number(((repaid / loanDisbursed) * 100).toFixed(2)) : 0;
            }
        }
        catch (e) {
            // model not present or query failed -> keep repaymentRate null
            repaymentRate = null;
        }
        // Recent activities: newest farmers, farms, invoices, farm media
        const recentFarmers = await prisma.farmer.findMany({ where: { lgaId }, orderBy: { createdAt: 'desc' }, take: 5, select: { id: true, fullname: true, createdAt: true } });
        const recentFarms = await prisma.farm.findMany({ where: { farmer: { lgaId } }, orderBy: { createdAt: 'desc' }, take: 5, select: { id: true, name: true, createdAt: true } });
        // const recentInvoices = await prisma.invoice.findMany({ where: { farmer: { lgaId } }, orderBy: { id: 'desc' }, take: 5, select: { id: true, amount: true, createdAt: true } });
        const recentMedia = await prisma.farmMedia.findMany({ where: { farm: { farmer: { lgaId } } }, orderBy: { createdAt: 'desc' }, take: 5, select: { id: true, url: true, mediaType: true, createdAt: true } });
        // Normalize into a single activity feed
        const activities = [];
        recentFarmers.forEach(f => activities.push({ type: 'FARMER_CREATED', message: `Farmer ${f.fullname} registered`, createdAt: f.createdAt, data: { id: f.id, fullname: f.fullname } }));
        recentFarms.forEach(f => activities.push({ type: 'FARM_CREATED', message: `Farm ${f.name} created`, createdAt: f.createdAt, data: { id: f.id, name: f.name } }));
        // recentInvoices.forEach(inv => activities.push({ type: 'LOAN_DISBURSED', message: `Loan of ${inv.amount} disbursed`, createdAt: inv.createdAt ?? new Date(), data: { id: inv.id, amount: inv.amount } }));
        recentMedia.forEach(m => activities.push({ type: 'MEDIA_UPLOADED', message: `Media uploaded (${m.mediaType})`, createdAt: m.createdAt, data: { id: m.id, url: m.url, mediaType: m.mediaType } }));
        activities.sort((a, b) => (b.createdAt?.getTime ? b.createdAt.getTime() : 0) - (a.createdAt?.getTime ? a.createdAt.getTime() : 0));
        return response.status(200).json({
            totalFarmers,
            activeFarms,
            loanDisbursed,
            repaymentRate,
            recentActivities: activities.slice(0, 10)
        });
    }
    catch (error) {
        console.error('LGA dashboard error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
