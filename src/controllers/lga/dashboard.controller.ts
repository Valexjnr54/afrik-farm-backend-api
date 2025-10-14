import { Request, Response } from "express";
import { PrismaClient } from "../../models";

const prisma = new PrismaClient();

export async function dashboard(request: Request, response: Response) {
    
}