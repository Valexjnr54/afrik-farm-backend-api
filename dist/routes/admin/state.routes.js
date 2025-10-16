"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const state_controller_1 = require("../../controllers/super_admin/state_controller");
const router = express_1.default.Router();
router.post('/', state_controller_1.createState);
router.post('/bulk', state_controller_1.bulkCreateStates);
router.get('/', state_controller_1.listStates);
router.get('/:id', state_controller_1.getState);
router.delete('/:id', state_controller_1.deleteState);
exports.default = router;
