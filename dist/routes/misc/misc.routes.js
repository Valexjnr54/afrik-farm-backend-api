"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.miscRouter = void 0;
const express_1 = __importDefault(require("express"));
const miscellaneous_controller_1 = require("../../controllers/miscellaneous.controller");
exports.miscRouter = express_1.default.Router();
exports.miscRouter.get('/banks', miscellaneous_controller_1.allBanks);
