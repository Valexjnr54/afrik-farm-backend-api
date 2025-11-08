import { Request, Response } from 'express';
import { PrismaClient } from '../../models';

const prisma = new PrismaClient();

export async function getSummary(request: Request, response: Response) {
	try {
		// Counts
		const [totalAdmins, totalUsers, activeUsers, totalFarmers, totalFarms, verifiedFarms, totalBanks, totalCountries, totalStates, totalLgas, totalInvoices, paidInvoices, unpaidInvoices] = await Promise.all([
			prisma.admin.count(),
			prisma.users.count(),
			prisma.users.count({ where: { status: 'Active' } }),
			prisma.farmer.count(),
			prisma.farm.count(),
			prisma.farm.count({ where: { verified: true } }),
			prisma.bank.count(),
			prisma.country.count(),
			prisma.state.count(),
			prisma.lga.count(),
			prisma.invoice.count(),
			prisma.invoice.count({ where: { has_paid: true } }),
			prisma.invoice.count({ where: { has_paid: false } }),
		]);

		// Farms by stage and production type
		const [clearedFarms, plantedFarms, harvestingFarms, cropFarms, livestockFarms] = await Promise.all([
			prisma.farm.count({ where: { stage: 'Cleared' } }),
			prisma.farm.count({ where: { stage: 'Planted' } }),
			prisma.farm.count({ where: { stage: 'Harvesting' } }),
			prisma.farm.count({ where: { type: 'Crop' } }),
			prisma.farm.count({ where: { type: 'Livestock' } }),
		]);

		// Recent activity (latest 5)
		const recentFarms = await prisma.farm.findMany({
			orderBy: { createdAt: 'desc' },
			take: 5,
			select: { id: true, name: true, farmerId: true, verified: true, createdAt: true },
		});

		const recentFarmers = await prisma.farmer.findMany({
			orderBy: { createdAt: 'desc' },
			take: 5,
			select: { id: true, fullname: true, email: true, phone_number: true, has_paid: true, createdAt: true },
		});

		// Top-level summary payload
		const payload = {
			admins: { total: totalAdmins },
			users: { total: totalUsers, active: activeUsers },
			farmers: { total: totalFarmers },
			farms: {
				total: totalFarms,
				verified: verifiedFarms,
				byStage: { cleared: clearedFarms, planted: plantedFarms, harvesting: harvestingFarms },
				byProductionType: { crop: cropFarms, livestock: livestockFarms },
			},
			banks: { total: totalBanks },
			geography: { countries: totalCountries, states: totalStates, lgas: totalLgas },
			invoices: { total: totalInvoices, paid: paidInvoices, unpaid: unpaidInvoices },
			recent: { farms: recentFarms, farmers: recentFarmers },
			generatedAt: new Date(),
		};

		return response.status(200).json({ success: true, data: payload });
	} catch (error) {
		console.error('getSummary error:', error);
		return response.status(500).json({ success: false, message: 'Unable to fetch dashboard summary' });
	}
};