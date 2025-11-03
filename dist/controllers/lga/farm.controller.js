"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFarm = createFarm;
exports.listFarms = listFarms;
exports.getFarm = getFarm;
exports.updateFarm = updateFarm;
exports.deleteFarm = deleteFarm;
exports.listFarmsByFarmer = listFarmsByFarmer;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function createFarm(request, response) {
    const admin_id = request.user?.id ?? null;
    if (!admin_id)
        return response.status(403).json({ message: 'Unauthorized User' });
    const rules = [
        (0, express_validator_1.body)('farmerId').notEmpty().withMessage('farmerId is required').bail().isInt().withMessage('farmerId must be an integer'),
        (0, express_validator_1.body)('location').notEmpty().withMessage('location is required').bail().isString().trim(),
        (0, express_validator_1.body)('latitude').notEmpty().withMessage('latitude is required').isFloat().withMessage('latitude must be a number'),
        (0, express_validator_1.body)('longitude').notEmpty().withMessage('longitude is required').isFloat().withMessage('longitude must be a number'),
        (0, express_validator_1.body)('type').notEmpty().withMessage('type is required').bail().isIn(['Crop', 'Livestock']).withMessage('Invalid type'),
        (0, express_validator_1.body)('productionType').notEmpty().withMessage('productionType is required').bail().isString().trim(),
        (0, express_validator_1.body)('size').notEmpty().withMessage('size is required').isFloat().withMessage('size must be a number'),
        (0, express_validator_1.body)('sizeUnit').notEmpty().withMessage('sizeUnit is required').isIn(['Hectare', 'Acre']).withMessage('Invalid sizeUnit'),
        (0, express_validator_1.body)('stage').notEmpty().withMessage('stage is required').isIn(['Cleared', 'Planted', 'Harvesting']).withMessage('Invalid stage'),
        (0, express_validator_1.body)('number_of_workers').notEmpty().withMessage('number of workers is required').isInt().withMessage('number of workers must be an integer')
    ];
    await Promise.all(rules.map(r => r.run(request)));
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty())
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    const { farmerId, location, latitude, longitude, productionType, type, size, sizeUnit, stage, ownershipDocument, number_of_workers } = request.body;
    try {
        const farmer = await prisma.farmer.findUnique({ where: { id: Number(farmerId) } });
        if (!farmer)
            return response.status(404).json({ message: 'Farmer not found' });
        const name = `${farmer.fullname}'s Farm`;
        const farm = await prisma.farm.create({
            data: {
                farmerId: Number(farmerId),
                name: name.trim(),
                location: location.trim(),
                latitude: latitude != null ? Number(latitude) : undefined,
                longitude: longitude != null ? Number(longitude) : undefined,
                type: type,
                production_type: productionType ? String(productionType).trim() : undefined,
                size: size != null ? Number(size) : undefined,
                sizeUnit: sizeUnit || undefined,
                stage: stage || undefined,
                ownershipDocument: ownershipDocument || undefined,
                number_of_workers: number_of_workers ? Number(number_of_workers) : undefined,
            }
        });
        return response.status(201).json({ message: 'Farm created', data: farm });
    }
    catch (error) {
        console.error('createFarm error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function listFarms(request, response) {
    try {
        const lgaId = request.user?.lgaId ?? (request.query.lga_id ? parseInt(request.query.lga_id, 10) : undefined);
        const where = lgaId ? { farmer: { lgaId } } : undefined;
        const farms = await prisma.farm.findMany({ where, orderBy: { createdAt: 'desc' } });
        return response.status(200).json({ message: 'Farms fetched', data: farms });
    }
    catch (error) {
        console.error('listFarms error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function getFarm(request, response) {
    const id = parseInt(request.query.farm_id, 10);
    if (!id)
        return response.status(400).json({ message: 'Farm id required' });
    try {
        const farm = await prisma.farm.findUnique({ where: { id } });
        if (!farm)
            return response.status(404).json({ message: 'Farm not found' });
        return response.status(200).json({ message: 'Farm fetched', data: farm });
    }
    catch (error) {
        console.error('getFarm error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function updateFarm(request, response) {
    const id = parseInt(request.query.farm_id, 10);
    if (!id)
        return response.status(400).json({ message: 'Farm id required' });
    const rules = [
        (0, express_validator_1.body)('location').optional().isString().trim(),
        (0, express_validator_1.body)('farmerId').optional().bail().isInt().withMessage('farmerId must be an integer'),
        (0, express_validator_1.body)('latitude').optional().isFloat(),
        (0, express_validator_1.body)('longitude').optional().isFloat(),
        (0, express_validator_1.body)('type').optional().isIn(['Crop', 'Livestock']),
        (0, express_validator_1.body)('productionType').notEmpty().optional().bail().isString().trim(),
        (0, express_validator_1.body)('size').optional().isFloat(),
        (0, express_validator_1.body)('sizeUnit').optional().isIn(['Hectare', 'Acre']),
        (0, express_validator_1.body)('stage').optional().isIn(['Cleared', 'Planted', 'Harvesting']),
        (0, express_validator_1.body)('number_of_workers').optional().isInt().withMessage('number of workers must be an integer'),
    ];
    await Promise.all(rules.map(r => r.run(request)));
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty())
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    const { farmerId, location, latitude, longitude, productionType, type, size, sizeUnit, stage, ownershipDocument, number_of_workers } = request.body;
    try {
        const farmer = await prisma.farmer.findUnique({ where: { id: Number(farmerId) } });
        if (!farmer)
            return response.status(404).json({ message: 'Farmer not found' });
        const name = `${farmer.fullname}'s Farm`;
        const farm = await prisma.farm.update({
            where: { id },
            data: {
                farmerId: Number(farmerId),
                name: name.trim(),
                location: location.trim(),
                latitude: latitude != null ? Number(latitude) : undefined,
                longitude: longitude != null ? Number(longitude) : undefined,
                type: type,
                production_type: productionType ? String(productionType).trim() : undefined,
                size: size != null ? Number(size) : undefined,
                sizeUnit: sizeUnit || undefined,
                stage: stage || undefined,
                ownershipDocument: ownershipDocument || undefined,
                number_of_workers: number_of_workers ? Number(number_of_workers) : undefined,
            }
        });
        // const farm = await prisma.farm.update({ where: { id }, data: payload });
        return response.status(200).json({ message: 'Farm updated', data: farm });
    }
    catch (error) {
        console.error('updateFarm error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function deleteFarm(request, response) {
    const id = parseInt(request.query.farm_id, 10);
    if (!id)
        return response.status(400).json({ message: 'Farm id required' });
    try {
        const farm = await prisma.farm.findUnique({ where: { id } });
        if (!farm)
            return response.status(404).json({ message: 'Farm not found' });
        await prisma.farm.delete({ where: { id } });
        return response.status(200).json({ message: 'Farm deleted' });
    }
    catch (error) {
        console.error('deleteFarm error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function listFarmsByFarmer(request, response) {
    try {
        const farmerId = parseInt(request.query.farmer_id, 10);
        if (!farmerId)
            return response.status(400).json({ message: 'Farmer id required' });
        const admin_id = request.user?.id ?? null;
        if (!admin_id)
            return response.status(403).json({ message: 'Unauthorized User' });
        const farms = await prisma.farm.findMany({
            where: { farmerId }
        });
        return response.status(200).json({ message: 'Farms fetched', data: farms });
    }
    catch (error) {
        console.error('listFarms error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
