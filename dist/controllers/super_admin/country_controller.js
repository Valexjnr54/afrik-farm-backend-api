"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCountry = createCountry;
exports.listCountries = listCountries;
exports.getCountry = getCountry;
exports.deleteCountry = deleteCountry;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function createCountry(request, response) {
    const admin_id = request.admin?.adminId;
    if (!admin_id)
        return response.status(403).json({ message: 'Unauthorized User' });
    const { name, iso2, iso3, numericCode, phoneCode } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('name').notEmpty().withMessage('Country Name is required').bail().isString().trim().isLength({ min: 2 }).withMessage('Country name too short'),
            // iso2 and iso3 can be provided but are optional; when present enforce lengths
            (0, express_validator_1.body)('iso2').optional({ nullable: true }).isString().trim().isLength({ min: 2, max: 2 }).withMessage('iso2 must be a 2-character string'),
            (0, express_validator_1.body)('iso3').optional({ nullable: true }).isString().trim().isLength({ min: 3, max: 3 }).withMessage('iso3 must be a 3-character string'),
            // numericCode and phoneCode are optional / nullable
            (0, express_validator_1.body)('numericCode').optional({ nullable: true }).isNumeric().withMessage('numericCode must be numeric'),
            (0, express_validator_1.body)('phoneCode').optional({ nullable: true }).isString().trim().matches(/^\+?\d+$/).withMessage('phoneCode must be digits and may start with +'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const existing = await prisma.country.findFirst({ where: { name: name?.trim() } });
        if (existing)
            return response.status(400).json({ message: 'Country already exists' });
        const country = await prisma.country.create({
            data: {
                name: name.trim(),
                iso2: iso2 ? iso2.trim().toUpperCase() : null,
                iso3: iso3 ? iso3.trim().toUpperCase() : null,
                numericCode: numericCode != null ? String(numericCode).trim() : null,
                phoneCode: phoneCode != null ? String(phoneCode).trim() : null,
            }
        });
        return response.status(201).json({ message: 'Country created', data: country });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function listCountries(_request, response) {
    try {
        const countries = await prisma.country.findMany({ orderBy: { name: 'asc' } });
        return response.status(200).json({ message: 'Countries fetched', data: countries });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function getCountry(request, response) {
    const id = parseInt(request.params.id, 10);
    if (!id)
        return response.status(400).json({ message: 'Country id required' });
    try {
        const country = await prisma.country.findUnique({ where: { id } });
        if (!country)
            return response.status(404).json({ message: 'Country not found' });
        return response.status(200).json({ message: 'Country fetched', data: country });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function deleteCountry(request, response) {
    const id = parseInt(request.params.id, 10);
    if (!id)
        return response.status(400).json({ message: 'Country id required' });
    try {
        const country = await prisma.country.findUnique({ where: { id } });
        if (!country)
            return response.status(404).json({ message: 'Country not found' });
        await prisma.country.delete({ where: { id } });
        return response.status(200).json({ message: 'Country deleted' });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
