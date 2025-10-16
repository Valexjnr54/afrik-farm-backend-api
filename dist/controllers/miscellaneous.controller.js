"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBanks = allBanks;
const models_1 = require("../models");
const prisma = new models_1.PrismaClient();
async function allBanks(request, response) {
    try {
        const banks = await prisma.bank.findMany({
            orderBy: { name: 'asc' }
        });
        return response.status(200).json({ message: 'Banks fetched', data: banks });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
