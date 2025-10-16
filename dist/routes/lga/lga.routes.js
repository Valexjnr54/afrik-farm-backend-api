"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lgaRouter = void 0;
const express_1 = __importDefault(require("express"));
const roleMiddleware_1 = require("../../middlewares/roleMiddleware");
const userAuthenticationMiddleware_1 = require("../../middlewares/userAuthenticationMiddleware");
const dashboard_controller_1 = require("../../controllers/lga/dashboard.controller");
const farmer_controller_1 = require("../../controllers/lga/farmer.controller");
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
exports.lgaRouter = express_1.default.Router();
exports.lgaRouter.use(userAuthenticationMiddleware_1.userAuthenticateJWT, roleMiddleware_1.lgaOnly);
// Define LGA-specific routes here
// Simple dashboard route for LGAs
// Dashboard endpoint returns LGA metrics
exports.lgaRouter.get('/dashboard', dashboard_controller_1.dashboard);
exports.lgaRouter.post('/create-farmer', farmer_controller_1.createFarmer);
exports.lgaRouter.get('/farmers', farmer_controller_1.listFarmers);
exports.lgaRouter.get('/get-farmer', farmer_controller_1.getFarmer);
exports.lgaRouter.put('/update-farmer', farmer_controller_1.updateFarmer);
exports.lgaRouter.delete('/delete-farmer', farmer_controller_1.deleteFarmer);
exports.lgaRouter.post('/verify-nin', farmer_controller_1.verifyNIN);
exports.lgaRouter.post('/send-code', farmer_controller_1.send_verification_code);
exports.lgaRouter.post('/verify-code', farmer_controller_1.verify_code);
exports.lgaRouter.post('/upload-profile-image', multerMiddleware_1.upload.single('profile_image'), farmer_controller_1.profile_imageUpload);
exports.lgaRouter.post('/upload-proof-of-address', multerMiddleware_1.upload.single('proof_of_address'), farmer_controller_1.proof_of_addressUpload);
