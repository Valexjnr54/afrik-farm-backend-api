"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const adminMiddleware_1 = require("../../middlewares/adminMiddleware");
const authenticationMiddleware_1 = require("../../middlewares/authenticationMiddleware");
const users_controller_1 = require("../../controllers/super_admin/users_controller");
const state_routes_1 = __importDefault(require("./state.routes"));
const lga_routes_1 = __importDefault(require("./lga.routes"));
const country_controller_1 = require("../../controllers/super_admin/country_controller");
const state_controller_1 = require("../../controllers/super_admin/state_controller");
const bank_controller_1 = __importDefault(require("../../controllers/super_admin/bank_controller"));
exports.adminRouter = express_1.default.Router();
exports.adminRouter.use(authenticationMiddleware_1.authenticateJWT, adminMiddleware_1.adminOnly);
// User Management
exports.adminRouter.post('/create-user', users_controller_1.createUser);
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
// Banks
exports.adminRouter.post('/banks/bulk', bank_controller_1.default.validateBulkBanks, bank_controller_1.default.bulkCreateBanks);
