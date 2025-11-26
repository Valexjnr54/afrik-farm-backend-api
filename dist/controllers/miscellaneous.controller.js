"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBanks = allBanks;
exports.fetchAccountName = fetchAccountName;
const models_1 = require("../models");
const express_validator_1 = require("express-validator");
const config_1 = require("../config/config");
const axios_1 = __importDefault(require("axios"));
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
async function fetchAccountName(request, response) {
    const { bank_code, account_number } = request.query;
    try {
        const validationRules = [
            (0, express_validator_1.query)('bank_code').notEmpty().withMessage('Bank code is required'),
            (0, express_validator_1.query)('account_number').isLength({ min: 10 }).withMessage('Account number must be at least 10 digits'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const PAYSTACK_SECRET_KEY = config_1.Config.paystackSecret;
        // Call Paystack API to verify account details
        const paystackResponse = await axios_1.default.get(`https://api.paystack.co/bank/resolve`, {
            params: {
                account_number,
                bank_code
            },
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`
            }
        });
        // Normalize Paystack response safely. Paystack typically returns { status, message, data: { account_name } }
        const psBody = paystackResponse?.data;
        // If Paystack returned a non-success status, forward the message
        if (!psBody || psBody.status === false) {
            return response.status(400).json({ message: psBody?.message || 'Unable to resolve account name' });
        }
        const account_name = psBody.data?.account_name ?? psBody.account_name;
        if (!account_name) {
            return response.status(400).json({ message: 'Unable to resolve account name' });
        }
        return response.status(200).json({ message: 'User account details updated', data: psBody });
    }
    catch (error) {
        console.error(error?.response?.data || error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
