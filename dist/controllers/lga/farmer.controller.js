"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFarmer = createFarmer;
exports.listFarmers = listFarmers;
exports.getFarmer = getFarmer;
exports.updateFarmer = updateFarmer;
exports.deleteFarmer = deleteFarmer;
exports.verifyNIN = verifyNIN;
exports.profile_imageUpload = profile_imageUpload;
exports.proof_of_addressUpload = proof_of_addressUpload;
exports.send_verification_code = send_verification_code;
exports.verify_code = verify_code;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const verification_1 = require("../../services/verification");
const cloudinary_1 = require("../../utils/cloudinary");
const fs_1 = __importDefault(require("fs"));
const sendSMS_1 = require("../../utils/sendSMS");
const prisma = new models_1.PrismaClient();
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
async function createFarmer(request, response) {
    const admin_id = request.user?.id ?? null;
    // require authenticated user (admin or LGA user) to create farmers
    if (!admin_id)
        return response.status(403).json({ message: 'Unauthorized User' });
    const rules = [
        (0, express_validator_1.body)('fullname').notEmpty().withMessage('fullname is required').bail().isString().trim().isLength({ min: 2 }),
        (0, express_validator_1.body)('email').optional().isEmail().withMessage('Invalid email'),
        (0, express_validator_1.body)('phone_number').notEmpty().withMessage('phone_number is required').bail().isString().trim(),
        (0, express_validator_1.body)('phone_verified').notEmpty().isBoolean().withMessage('Phone verified must be a boolean'),
        (0, express_validator_1.body)('nin_verified').notEmpty().isBoolean().withMessage('NIN verified must be a boolean'),
        (0, express_validator_1.body)('nin').notEmpty().withMessage('nin is required').bail().isString().trim(),
        (0, express_validator_1.body)('address').notEmpty().withMessage('address is required').bail().isString().trim(),
        (0, express_validator_1.body)('bankId').notEmpty().withMessage('bankId is required').bail().isInt().withMessage('bankId must be an integer'),
        (0, express_validator_1.body)('account_name').notEmpty().withMessage('Account Name is required').bail().isString().trim(),
        (0, express_validator_1.body)('account_number').notEmpty().withMessage('Account Number is required').bail().isString().trim(),
        (0, express_validator_1.body)('profile_image').notEmpty().withMessage('Account Number is required').isString(),
        (0, express_validator_1.body)('proof_of_address').notEmpty().withMessage('Account Number is required').isString(),
    ];
    await Promise.all(rules.map(r => r.run(request)));
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty())
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    const { fullname, email, phone_number, phone_verified, nin_verified, nin, address, bankId, account_number, account_name, profile_image, proof_of_address } = request.body;
    const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    if (!lga_admin) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const existing = await prisma.farmer.findFirst({ where: { OR: [{ email }, { phone_number }, { nin }] } });
        if (existing)
            return response.status(400).json({ message: 'Farmer with same email/phone/nin already exists' });
        const data = {
            fullname: fullname.trim(),
            email: email ? String(email).trim() : undefined,
            phone_number: phone_number.trim(),
            phone_verified: Boolean(phone_verified),
            nin_verified: Boolean(nin_verified),
            nin: nin.trim(),
            address: address.trim(),
            bankId: Number(bankId),
            account_number,
            account_name,
            profile_image: profile_image ? String(profile_image).trim() : undefined,
            proof_of_address: proof_of_address ? String(proof_of_address).trim() : undefined,
            account_created_by: lga_admin.id,
            countryId: lga_admin.countryId,
            stateId: lga_admin.stateId,
            lgaId: lga_admin.lgaId
        };
        const farmer = await prisma.farmer.create({ data });
        return response.status(201).json({ message: 'Farmer created', data: farmer });
    }
    catch (error) {
        console.error('createFarmer error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function listFarmers(request, response) {
    const admin_id = request.user?.id ?? null;
    // require authenticated user (admin or LGA user) to create farmers
    if (!admin_id)
        return response.status(403).json({ message: 'Unauthorized User' });
    try {
        const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        if (!lga_admin) {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const lga_id = lga_admin.lgaId;
        const farmers = await prisma.farmer.findMany({ where: { lgaId: Number(lga_id) }, orderBy: { createdAt: 'desc' } });
        return response.status(200).json({ message: 'Farmers fetched', data: farmers });
    }
    catch (error) {
        console.error('listFarmers error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function getFarmer(request, response) {
    const id = parseInt(request.params.id, 10);
    if (!id)
        return response.status(400).json({ message: 'Farmer id required' });
    try {
        const farmer = await prisma.farmer.findUnique({ where: { id } });
        if (!farmer)
            return response.status(404).json({ message: 'Farmer not found' });
        return response.status(200).json({ message: 'Farmer fetched', data: farmer });
    }
    catch (error) {
        console.error('getFarmer error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function updateFarmer(request, response) {
    const id = parseInt(request.params.id, 10);
    if (!id)
        return response.status(400).json({ message: 'Farmer id required' });
    const rules = [
        (0, express_validator_1.body)('fullname').optional().isString().trim().isLength({ min: 2 }),
        (0, express_validator_1.body)('email').optional().isEmail(),
        (0, express_validator_1.body)('phone_number').optional().isString().trim(),
        (0, express_validator_1.body)('nin').optional().isString().trim(),
        (0, express_validator_1.body)('address').optional().isString().trim(),
        (0, express_validator_1.body)('bankId').optional().isInt(),
        (0, express_validator_1.body)('countryId').optional().isInt(),
        (0, express_validator_1.body)('stateId').optional().isInt(),
        (0, express_validator_1.body)('lgaId').optional().isInt(),
        (0, express_validator_1.body)('profile_image').optional().isString(),
        (0, express_validator_1.body)('proof_of_address').optional().isString(),
        (0, express_validator_1.body)('verification_code').optional().isString(),
        (0, express_validator_1.body)('email_verified').optional().isBoolean(),
        (0, express_validator_1.body)('phone_verified').optional().isBoolean(),
        (0, express_validator_1.body)('has_subscribed').optional().isBoolean(),
        (0, express_validator_1.body)('status').optional().isIn(['Available', 'Pending', 'Completed', 'Rejected', 'Approved', 'Inactive', 'Active', 'Suspend']),
    ];
    await Promise.all(rules.map(r => r.run(request)));
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty())
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    const bodyData = request.body;
    const data = {};
    if (bodyData.fullname)
        data.fullname = String(bodyData.fullname).trim();
    if (bodyData.email)
        data.email = String(bodyData.email).trim();
    if (bodyData.phone_number)
        data.phone_number = String(bodyData.phone_number).trim();
    if (bodyData.nin)
        data.nin = String(bodyData.nin).trim();
    if (bodyData.address)
        data.address = String(bodyData.address).trim();
    if (bodyData.bankId)
        data.bankId = Number(bodyData.bankId);
    if (bodyData.countryId)
        data.countryId = Number(bodyData.countryId);
    if (bodyData.stateId)
        data.stateId = Number(bodyData.stateId);
    if (bodyData.lgaId)
        data.lgaId = Number(bodyData.lgaId);
    if (bodyData.profile_image)
        data.profile_image = String(bodyData.profile_image);
    if (bodyData.proof_of_address)
        data.proof_of_address = String(bodyData.proof_of_address);
    if (bodyData.verification_code)
        data.verification_code = String(bodyData.verification_code);
    if (typeof bodyData.email_verified !== 'undefined')
        data.email_verified = Boolean(bodyData.email_verified);
    if (typeof bodyData.phone_verified !== 'undefined')
        data.phone_verified = Boolean(bodyData.phone_verified);
    if (typeof bodyData.has_subscribed !== 'undefined')
        data.has_subscribed = Boolean(bodyData.has_subscribed);
    if (bodyData.status)
        data.status = bodyData.status;
    try {
        const farmer = await prisma.farmer.update({ where: { id }, data });
        return response.status(200).json({ message: 'Farmer updated', data: farmer });
    }
    catch (error) {
        console.error('updateFarmer error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function deleteFarmer(request, response) {
    const id = parseInt(request.params.id, 10);
    if (!id)
        return response.status(400).json({ message: 'Farmer id required' });
    try {
        const farmer = await prisma.farmer.findUnique({ where: { id } });
        if (!farmer)
            return response.status(404).json({ message: 'Farmer not found' });
        await prisma.farmer.delete({ where: { id } });
        return response.status(200).json({ message: 'Farmer deleted' });
    }
    catch (error) {
        console.error('deleteFarmer error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function verifyNIN(request, response) {
    const admin_id = request.user?.id ?? null;
    // require authenticated user (admin or LGA user) to create farmers
    if (!admin_id)
        return response.status(403).json({ message: 'Unauthorized User' });
    const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    if (!lga_admin) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    const role = lga_admin.role;
    if (role !== 'lga_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    const rules = [
        (0, express_validator_1.body)('nin').notEmpty().withMessage('nin is required').bail().isString().trim(),
    ];
    await Promise.all(rules.map(r => r.run(request)));
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty())
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    const { nin } = request.body;
    try {
        const verified = await (0, verification_1.verifynin)(nin);
        return response.status(200).json({ message: 'Verified Farmer`s NIN', data: verified });
    }
    catch (error) {
        console.error('verifyNIN error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function profile_imageUpload(request, response) {
    const lga_admin_id = request.user?.id;
    if (!lga_admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Profile image is required' });
        }
        const image_path = request.file.path;
        // Upload image to Cloudinary
        const uploadedImageUrl = await (0, cloudinary_1.uploadImage)(image_path, 'afrik_farm/images/profile_images/');
        // Delete the local file after uploading
        fs_1.default.unlink(image_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${image_path}`, err);
            }
        });
        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Profile image uploaded successfully',
                image_url: uploadedImageUrl,
            });
        }
        else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    }
    catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}
async function proof_of_addressUpload(request, response) {
    const lga_admin_id = request.user?.id;
    if (!lga_admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Proof of address is required' });
        }
        const image_path = request.file.path;
        // Upload image to Cloudinary
        const uploadedImageUrl = await (0, cloudinary_1.uploadImage)(image_path, 'afrik_farm/images/proof_of_address/');
        // Delete the local file after uploading
        fs_1.default.unlink(image_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${image_path}`, err);
            }
        });
        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Proof of address uploaded successfully',
                image_url: uploadedImageUrl,
            });
        }
        else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    }
    catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}
async function send_verification_code(request, response) {
    const admin_id = request.user?.id ?? null;
    // require authenticated user (admin or LGA user) to create farmers
    if (!admin_id)
        return response.status(403).json({ message: 'Unauthorized User' });
    const rules = [
        (0, express_validator_1.body)('phone_number').notEmpty().withMessage('phone_number is required').bail().isString().trim(),
    ];
    await Promise.all(rules.map(r => r.run(request)));
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty())
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    const { phone_number } = request.body;
    const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    if (!lga_admin) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const existing = await prisma.farmer.findFirst({ where: { OR: [{ phone_number }] } });
        if (existing)
            return response.status(400).json({ message: 'Farmer with same phone number already exists' });
        const verification_code = generateVerificationCode();
        // Store the verification code with an expiration time (e.g., 10 minutes)
        const codeEntry = await prisma.verificationCode.create({
            data: {
                identifier: phone_number.trim(),
                code: verification_code,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000), // Expires in 10 minutes
            }
        });
        const message = `Your Afrik Farm one-time password is: ${verification_code}. It expires in 10 minutes. Do not share this code with anyone.`;
        await (0, sendSMS_1.sendSMS)(phone_number, message);
        return response.status(200).json({ message: 'Verification code sent successfully' });
    }
    catch (error) {
        console.error('Error sending verification code:', error);
        return response.status(500).json({ message: 'Failed to send verification code', error });
    }
}
async function verify_code(request, response) {
    const admin_id = request.user?.id ?? null;
    // require authenticated user (admin or LGA user) to create farmers
    if (!admin_id)
        return response.status(403).json({ message: 'Unauthorized User' });
    const rules = [
        (0, express_validator_1.body)('phone_number').notEmpty().withMessage('phone_number is required').bail().isString().trim(),
        (0, express_validator_1.body)('code').notEmpty().withMessage('code is required').bail().isString().trim(),
    ];
    await Promise.all(rules.map(r => r.run(request)));
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty())
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    const { phone_number, code } = request.body;
    const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    if (!lga_admin) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const entry = await prisma.verificationCode.findFirst({
            where: { identifier: phone_number },
            select: { identifier: true, code: true, expiresAt: true },
            orderBy: { createdAt: 'desc' }
        });
        if (!entry) {
            console.warn(`Verification code not found for identifier ${phone_number}`);
            return response.status(404).json({ message: 'Verification code not found' });
        }
        // check expiration if field exists
        if (entry.expiresAt && new Date(entry.expiresAt) < new Date()) {
            return response.status(400).json({ message: 'Verification code expired' });
        }
        const isMatch = entry.code === code;
        if (!isMatch) {
            console.warn(`OTP mismatch for identifier ${entry.identifier}`);
            return response.status(400).json({ message: 'Invalid verification code' });
        }
        // delete the used verification code
        await prisma.verificationCode.delete({ where: { code: entry.code } });
        return response.status(200).json({ message: 'Verification successful' });
    }
    catch (error) {
        console.error('Failed to verify code:', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
