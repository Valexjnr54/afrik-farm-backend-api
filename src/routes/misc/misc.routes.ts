import express from "express";
import { allBanks } from "../../controllers/miscellaneous.controller";

export const miscRouter = express.Router();

miscRouter.get('/banks', allBanks);