"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const adminMiddleware_1 = require("../../middlewares/adminMiddleware");
const authenticationMiddleware_1 = require("../../middlewares/authenticationMiddleware");
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const users_controller_1 = require("../../controllers/super_admin/users_controller");
const state_routes_1 = __importDefault(require("./state.routes"));
const lga_routes_1 = __importDefault(require("./lga.routes"));
const country_controller_1 = require("../../controllers/super_admin/country_controller");
const state_controller_1 = require("../../controllers/super_admin/state_controller");
const bank_controller_1 = __importDefault(require("../../controllers/super_admin/bank_controller"));
const lga_controller_1 = require("../../controllers/super_admin/lga_controller");
const farmer_controller_1 = require("../../controllers/super_admin/farmer_controller");
const farm_controller_1 = require("../../controllers/super_admin/farm_controller");
const dashboard_controller_1 = require("../../controllers/super_admin/dashboard_controller");
const payment_controller_1 = require("../../controllers/super_admin/payment_controller");
exports.adminRouter = express_1.default.Router();
exports.adminRouter.use(authenticationMiddleware_1.authenticateJWT, adminMiddleware_1.adminOnly);
exports.adminRouter.get('/dashboard', dashboard_controller_1.getSummary);
// User Management
exports.adminRouter.post('/create-user', users_controller_1.createUser);
exports.adminRouter.get('/list-users', users_controller_1.allUser);
exports.adminRouter.get('/single-user', users_controller_1.singleUser);
exports.adminRouter.delete('/delete-user', users_controller_1.deleteUser);
// Location management
exports.adminRouter.post('/create-country', country_controller_1.createCountry);
exports.adminRouter.get('/countries', country_controller_1.listCountries);
exports.adminRouter.get('/country/:id', country_controller_1.getCountry);
exports.adminRouter.delete('/country/:id', country_controller_1.deleteCountry);
exports.adminRouter.use('/states', state_routes_1.default);
exports.adminRouter.post('/create-state', state_controller_1.createState);
exports.adminRouter.post('/create-bulk-state-and-lga', state_controller_1.bulkCreateStates);
exports.adminRouter.get('/states', state_controller_1.listStates);
exports.adminRouter.get('/state/:id', state_controller_1.getState);
exports.adminRouter.delete('/state/:id', state_controller_1.deleteState);
exports.adminRouter.use('/lgas', lga_routes_1.default);
exports.adminRouter.post('/create-lga', lga_controller_1.createLga);
exports.adminRouter.get('/lgas', lga_controller_1.listLgas);
exports.adminRouter.get('/lga/:id', lga_controller_1.getLga);
exports.adminRouter.delete('/lga/:id', lga_controller_1.deleteLga);
// Banks
exports.adminRouter.post('/banks/bulk', bank_controller_1.default.validateBulkBanks, bank_controller_1.default.bulkCreateBanks);
// Farmer Management
exports.adminRouter.post('/farmer/create-farmer', farmer_controller_1.createFarmer);
exports.adminRouter.get('/farmer/list-farmers', farmer_controller_1.listFarmers);
exports.adminRouter.get('/farmer/get-farmer', farmer_controller_1.getFarmer);
exports.adminRouter.put('/farmer/update-farmer', farmer_controller_1.updateFarmer);
exports.adminRouter.delete('/farmer/delete-farmer', farmer_controller_1.deleteFarmer);
exports.adminRouter.post('/farmer/verify-nin', farmer_controller_1.verifyNIN);
exports.adminRouter.post('/farmer/send-code', farmer_controller_1.send_verification_code);
exports.adminRouter.post('/farmer/verify-code', farmer_controller_1.verify_code);
exports.adminRouter.post('/farmer/upload-profile-image', multerMiddleware_1.upload.single('profile_image'), farmer_controller_1.profile_imageUpload);
exports.adminRouter.post('/farmer/upload-proof-of-address', multerMiddleware_1.upload.single('proof_of_address'), farmer_controller_1.proof_of_addressUpload);
exports.adminRouter.post('/farmer/initialize-payment', farmer_controller_1.initialize_payment);
exports.adminRouter.get('/farmer/verify-payment', farmer_controller_1.verify_payment);
exports.adminRouter.get('/farmer/list-paid-farmers', farmer_controller_1.getPaidFarmers);
exports.adminRouter.get('/farmer/list-unpaid-farmers', farmer_controller_1.getUnpaidFarmers);
//Farm Management
exports.adminRouter.post('/farm/create-farm', farm_controller_1.createFarm);
exports.adminRouter.get('/farm/list-farms', farm_controller_1.listFarms);
exports.adminRouter.get('/farm/get-farm', farm_controller_1.getFarm);
exports.adminRouter.put('/farm/update-farm', farm_controller_1.updateFarm);
exports.adminRouter.delete('/farm/delete-farm', farm_controller_1.deleteFarm);
exports.adminRouter.get('/farm/farmers-farm', farm_controller_1.listFarmsByFarmer);
// Payments
exports.adminRouter.get('/payment/revenue', payment_controller_1.getRevenue);
exports.adminRouter.get('/payment/list-payments', payment_controller_1.getAllPayments);
// adminRouter.get('/payment/get-payment', );
