import * as express from "express";
import { allBanks } from "../../controllers/miscellaneous.controller";
import { mailHealth } from '../../controllers/miscellaneous.mail.controller';

export const miscRouter = express.Router();

miscRouter.get('/banks', allBanks);
miscRouter.get('/health/mail', mailHealth);