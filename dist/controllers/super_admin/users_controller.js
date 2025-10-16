"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.allUser = allUser;
exports.singleUser = singleUser;
exports.deleteUser = deleteUser;
const models_1 = require("../../models");
const crypto_1 = __importDefault(require("crypto"));
const argon2 = __importStar(require("argon2"));
const express_validator_1 = require("express-validator");
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
function generateTempPassword() {
    return crypto_1.default.randomBytes(5).toString('hex'); // 10 characters
}
async function createUser(request, response) {
    const { fullname, username, email, phone_number, role, country_id, state_id, lga_id } = request.body;
    const admin_id = request.admin.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('username').notEmpty().withMessage('Username is Required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
            (0, express_validator_1.body)('role').notEmpty().withMessage('Role is required'),
            (0, express_validator_1.body)('country_id').notEmpty().withMessage('Country is required'),
            (0, express_validator_1.body)('state_id').notEmpty().withMessage('State is required'),
            (0, express_validator_1.body)('lga_id').notEmpty().withMessage('Local Government Area is required'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const admin_role = check_admin?.role;
        // Check if the role is not 'User'
        if (admin_role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const existing = await prisma.users.findUnique({ where: { email } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const tempPassword = generateTempPassword();
        const hashedPassword = await argon2.hash(tempPassword);
        const verificationCode = generateVerificationCode();
        const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        const newUser = await prisma.users.create({
            data: {
                fullname,
                email,
                username,
                phone_number,
                password: hashedPassword,
                verification_code: verificationCode,
                countryId: country_id,
                stateId: state_id,
                lgaId: lga_id,
                role
            },
        });
        const message = `Hello ${fullname},

You have been added as a User on Afrik Farm.

Temporary Password: ${tempPassword}
Email Verification Code: ${verificationCode} (expires in 10 mins)

You will be required to change your password after first login.
`;
        await (0, emailSender_1.sendWelcomeEmail)(email, 'Welcome to Afrik Farm – Your Journey Starts Here! 🚀', newUser, tempPassword);
        await (0, emailSender_1.sendVerificationEmail)(email, 'Your User Access & Email Verification', verificationCode, newUser);
        return response.status(201).json({ message: 'User created and verification email sent', newUser });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function allUser(request, response) {
    const admin_id = request.admin.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const allUsers = await prisma.users.findMany({
            select: {
                id: true,
                fullname: true,
                username: true,
                email: true,
                phone_number: true,
                role: true,
                profile_image: true,
                status: true,
                temporal_password: true,
                email_verified: true,
                createdAt: true,
                updatedAt: true
            },
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'User(s) fetched', data: allUsers });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function singleUser(request, response) {
    const id = parseInt(request.query.user_id, 10);
    const admin_id = request.admin.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    if (!id) {
        return response.status(403).json({ message: 'User ID required' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const singleUser = await prisma.users.findUnique({
            where: {
                id: id
            },
            select: {},
        });
        if (!singleUser) {
            return response.status(404).json({ message: 'User not found' });
        }
        return response.status(200).json({ message: 'User fetched', data: singleUser });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function deleteUser(request, response) {
    const id = parseInt(request.query.user_id, 10);
    const admin_id = request.admin.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    if (!id) {
        return response.status(403).json({ message: 'User ID required' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const user = await prisma.users.findUnique({
            where: { id }
        });
        if (!user) {
            return response.status(404).json({ message: 'Record not found' });
        }
        // Create a new delivery entry in the database
        const deleteUser = await prisma.users.delete({
            where: {
                id
            },
        });
        if (!deleteUser) {
            return response.status(403).json({ message: 'Unable to delete User' });
        }
        return response.status(200).json({ message: 'User was deleted successfully', data: deleteUser });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
