import { Request, Response } from 'express';
import { PrismaClient } from '../models';
import { query, validationResult } from "express-validator";
import { Config } from '../config/config';
import axios from 'axios';

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

export async function fetchAccountName(request: Request, response: Response) {
  const { bank_code, account_number } = request.query;

  try {
    const validationRules = [
      query('bank_code').notEmpty().withMessage('Bank code is required'),
      query('account_number').isLength({ min: 10 }).withMessage('Account number must be at least 10 digits'),
    ];

    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    
    const PAYSTACK_SECRET_KEY = Config.paystackSecret;

    // Call Paystack API to verify account details
    const paystackResponse = await axios.get(`https://api.paystack.co/bank/resolve`, {
      params: {
        account_number,
        bank_code
      },
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`
      }
    });

    // Normalize Paystack response safely. Paystack typically returns { status, message, data: { account_name } }
  const psBody: any = paystackResponse?.data;

    // If Paystack returned a non-success status, forward the message
    if (!psBody || psBody.status === false) {
      return response.status(400).json({ message: psBody?.message || 'Unable to resolve account name' });
    }

    const account_name = psBody.data?.account_name ?? psBody.account_name;

    if (!account_name) {
      return response.status(400).json({ message: 'Unable to resolve account name' });
    }
  

    return response.status(200).json({ message: 'Vendor account details updated', data: account_name });
  } catch (error: any) {
    console.error(error?.response?.data || error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}