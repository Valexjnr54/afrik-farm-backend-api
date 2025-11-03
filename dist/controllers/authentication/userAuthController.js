"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = loginUser;
exports.logoutUser = logoutUser;
exports.verifyUserEmail = verifyUserEmail;
exports.changeUserTemporalPassword = changeUserTemporalPassword;
exports.changeUserPassword = changeUserPassword;
exports.profile = profile;
exports.update_profile = update_profile;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function loginUser(request, response) {
    // validate input
    await (0, express_validator_1.body)('login_id').notEmpty().withMessage('login_id is required').bail().isString().trim().run(request);
    await (0, express_validator_1.body)('password').notEmpty().withMessage('password is required').bail().isString().run(request);
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    }
    const { login_id, password } = request.body;
    try {
        const user = await prisma.users.findFirst({
            where: {
                OR: [
                    { email: login_id },
                    { username: login_id }
                ]
            }
        });
        if (!user) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
        // Check if user password is null
        if (user.password === null) {
            return response.status(401).json({ error: 'Invalid email/username or password' });
        }
        // Verify the password (support legacy argon2 hashes and bcrypt)
        let passwordMatch = false;
        if (!user.password) {
            response.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        // Use bcrypt for verification only. Legacy argon2 support removed.
        passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            response.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        if (!config_1.Config.secret) {
            console.error('Jwt_secret is not defined!');
            response.status(500).json({ message: 'Internal Server Error' });
            return;
        }
        // Generate a JWT token for the admin
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            email: user.email,
            fullname: user.fullname,
            profile_image: user.profile_image,
            email_verification: user.email_verified,
            role: user.role
        }, config_1.Config.secret, { expiresIn: '24h' } // Add token expiration
        );
        response.status(200).json({
            token,
            success: true,
            message: 'Login successful',
            user
        });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function logoutUser(request, response) {
    try {
        // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
        // Here, we'll focus on clearing the token from cookies.
        // Clear the JWT token from the client-side cookies
        response.clearCookie('jwt');
        // Optionally, you can perform additional tasks here, such as logging the Admin's logout action.
        // Send a success response to the client
        response.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        // Handle any potential errors that may occur during the logout process.
        console.error('Error during logout:', error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function verifyUserEmail(request, response) {
    // Validate request inputs
    const user_id = request.user.id;
    await (0, express_validator_1.body)('verificationCode').notEmpty().withMessage('Verification code is required').run(request);
    // Check if user_id is not present or undefined
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: "fail", errors: errors.array() });
    }
    // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;
    const email = user?.email;
    const { verificationCode } = request.body;
    try {
        // Find the user by email
        const admin = await prisma.users.findUnique({
            where: { email },
        });
        if (!admin) {
            return response.status(404).json({ status: "fail", message: "User not found." });
        }
        // Check if already verified
        if (admin.email_verified) {
            return response.status(200).json({ status: "success", message: "Email already verified." });
        }
        // Validate the verification code
        if (admin.verification_code !== verificationCode) {
            return response.status(400).json({ status: "fail", message: "Invalid verification code." });
        }
        // Update the verification status
        const user = await prisma.users.update({
            where: { email },
            data: {
                email_verified: true,
                verification_code: null,
                status: "Active"
            },
        });
        return response.status(200).json({ status: "success", message: "Email verified successfully.", user });
    }
    catch (error) {
        console.error("Email Verification Error:", error);
        return response.status(500).json({ status: "error", message: "Something went wrong." });
    }
}
async function changeUserTemporalPassword(request, response) {
    const user_id = request.user.id;
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    ;
    await (0, express_validator_1.body)('newPassword')
        .isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
        .matches(/[A-Z]/).withMessage('New password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('New password must contain at least one lowercase letter')
        .matches(/[0-9]/).withMessage('New password must contain at least one number')
        .matches(/[\W]/).withMessage('New password must contain at least one special character')
        .run(request);
    await (0, express_validator_1.body)('confirmPassword')
        .notEmpty().withMessage('Password confirmation is required')
        .run(request);
    const result = (0, express_validator_1.validationResult)(request);
    const errors = result.array();
    if (request.body.newPassword !== request.body.confirmPassword) {
        return response.status(422).json({ status: "fail", errors: "Passwords do not match" });
    }
    if (errors.length > 0) {
        return response.status(422).json({ status: "fail", errors });
    }
    try {
        const find_user = await prisma.users.findUnique({
            where: { id: user_id },
        });
        if (!find_user) {
            return response.status(404).json({ status: "fail", message: "User not found." });
        }
        const hashedPassword = await bcrypt_1.default.hash(request.body.newPassword, 10);
        const user = await prisma.users.update({
            where: { id: user_id },
            data: {
                password: hashedPassword,
                temporal_password: false
            },
        });
        return response.status(200).json({ status: "success", message: "Password updated successfully.", user: user });
    }
    catch (error) {
        console.error("Change Password Error:", error);
        return response.status(500).json({ status: "error", message: "Something went wrong." });
    }
}
async function changeUserPassword(request, response) {
    const user_id = request.user.id;
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    // Validate input fields
    await (0, express_validator_1.body)('currentPassword')
        .notEmpty().withMessage('Current password is required')
        .run(request);
    await (0, express_validator_1.body)('newPassword')
        .isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
        .matches(/[A-Z]/).withMessage('New password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('New password must contain at least one lowercase letter')
        .matches(/[0-9]/).withMessage('New password must contain at least one number')
        .matches(/[\W]/).withMessage('New password must contain at least one special character')
        .run(request);
    await (0, express_validator_1.body)('confirmPassword')
        .notEmpty().withMessage('Password confirmation is required')
        .run(request);
    const result = (0, express_validator_1.validationResult)(request);
    const errors = result.array();
    // Manually confirm password match
    if (request.body.newPassword !== request.body.confirmPassword) {
        return response.status(422).json({ status: "fail", errors: "Password do not match" });
    }
    if (errors.length > 0) {
        return response.status(422).json({ status: "fail", errors });
    }
    if (!user_id) {
        // throw new Error("Missing user ID");
        return response.status(400).json({ message: 'Missing user ID', data: user_id });
    }
    // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;
    const { currentPassword, newPassword } = request.body;
    const userId = request.user?.id;
    try {
        const user = await prisma.users.findUnique({
            where: { id: userId },
        });
        if (!user) {
            return response.status(404).json({ status: "fail", message: "User not found." });
        }
        const isMatch = await bcrypt_1.default.compare(currentPassword, user.password);
        if (!isMatch) {
            return response.status(400).json({ status: "fail", message: "Incorrect current password." });
        }
        const hashedPassword = await bcrypt_1.default.hash(newPassword, 10);
        await prisma.users.update({
            where: { id: userId },
            data: {
                password: hashedPassword,
            },
        });
        return response.status(200).json({ success: true, status: "success", message: "Password updated successfully." });
    }
    catch (error) {
        console.error("Change Password Error:", error);
        return response.status(500).json({ status: "error", message: "Something went wrong." });
    }
}
async function profile(request, response) {
    const user_id = request.user.id;
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    if (!user_id) {
        // throw new Error("Missing user ID");
        return response.status(400).json({ message: 'Missing user ID', data: user_id });
    }
    // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;
    try {
        const user = await prisma.users.findUnique({
            where: { id: user_id },
        });
        if (!user) {
            return response.status(404).json({ status: "fail", message: "User not found." });
        }
        return response.status(200).json({ status: "success", message: "User Profile fetched successfully.", data: user });
    }
    catch (error) {
        console.error("Change Password Error:", error);
        return response.status(500).json({ status: "error", message: "Something went wrong." });
    }
}
async function update_profile(request, response) {
    const user_id = request.user.id;
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    // Validate input fields
    await (0, express_validator_1.body)('fullname')
        .notEmpty().withMessage('Fullname is required')
        .run(request);
    await (0, express_validator_1.body)('email')
        .notEmpty().isEmail().withMessage('New password must be at least 8 characters')
        .run(request);
    await (0, express_validator_1.body)('phone_number')
        .notEmpty().withMessage('Phone number is required')
        .run(request);
    const result = (0, express_validator_1.validationResult)(request);
    const errors = result.array();
    if (errors.length > 0) {
        return response.status(422).json({ status: "fail", errors });
    }
    if (!user_id) {
        // throw new Error("Missing user ID");
        return response.status(400).json({ message: 'Missing user ID', data: user_id });
    }
    // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;
    const userId = request.user?.id;
    try {
        const user = await prisma.users.findUnique({
            where: { id: userId },
        });
        if (!user) {
            return response.status(404).json({ status: "fail", message: "User not found." });
        }
        const { fullname, email, phone_number } = request.body;
        const updated_user = await prisma.users.update({
            where: { id: userId },
            data: {
                fullname,
                email,
                phone_number
            },
        });
        return response.status(200).json({ status: "success", message: "Profile updated successfully.", data: updated_user });
    }
    catch (error) {
        console.error("Change Password Error:", error);
        return response.status(500).json({ status: "error", message: "Something went wrong." });
    }
}
