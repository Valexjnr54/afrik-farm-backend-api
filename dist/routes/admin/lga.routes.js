"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lga_controller_1 = require("../../controllers/super_admin/lga_controller");
const router = express_1.default.Router();
router.post('/', lga_controller_1.createLga);
router.get('/', lga_controller_1.listLgas);
router.get('/:id', lga_controller_1.getLga);
router.delete('/:id', lga_controller_1.deleteLga);
exports.default = router;
