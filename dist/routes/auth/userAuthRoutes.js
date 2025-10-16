"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const userAuthenticationMiddleware_1 = require("../../middlewares/userAuthenticationMiddleware");
const userAuthController_1 = require("../../controllers/authentication/userAuthController");
exports.userAuthRouter = express_1.default.Router();
exports.userAuthRouter.post('/login', userAuthController_1.loginUser);
// Secure the logout route with authentication middleware
exports.userAuthRouter.post('/logout', userAuthenticationMiddleware_1.userAuthenticateJWT, userAuthController_1.logoutUser);
exports.userAuthRouter.post('/email-verification', userAuthenticationMiddleware_1.userAuthenticateJWT, userAuthController_1.verifyUserEmail);
exports.userAuthRouter.post('/change-password', userAuthenticationMiddleware_1.userAuthenticateJWT, userAuthController_1.changeUserPassword);
exports.userAuthRouter.post('/change-temp-password', userAuthenticationMiddleware_1.userAuthenticateJWT, userAuthController_1.changeUserTemporalPassword);
exports.userAuthRouter.get('/profile', userAuthenticationMiddleware_1.userAuthenticateJWT, userAuthController_1.profile);
exports.userAuthRouter.put('/update-profile', userAuthenticationMiddleware_1.userAuthenticateJWT, userAuthController_1.update_profile);
