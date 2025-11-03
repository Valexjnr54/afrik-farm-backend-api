import express from "express";
import { adminOnly } from "../../middlewares/adminMiddleware";
import { authenticateJWT } from "../../middlewares/authenticationMiddleware";
import { upload } from "../../middlewares/multerMiddleware";
import { uploadCSV } from "../../middlewares/uploadCSVMiddleware";
import { createUser } from "../../controllers/super_admin/users_controller";
import stateRoutes from './state.routes';
import lgaRoutes from './lga.routes';
import { createCountry, deleteCountry, getCountry, listCountries } from "../../controllers/super_admin/country_controller";
import { bulkCreateStates, createState, deleteState, getState, listStates } from "../../controllers/super_admin/state_controller";
import bankController from '../../controllers/super_admin/bank_controller';
import { createLga, deleteLga, getLga, listLgas } from "../../controllers/super_admin/lga_controller";

export const adminRouter = express.Router();

adminRouter.use(authenticateJWT, adminOnly);

// User Management
adminRouter.post('/create-user', createUser);

// Location management
adminRouter.post('/create-country', createCountry);
adminRouter.get('/countries', listCountries);
adminRouter.get('/country/:id', getCountry);
adminRouter.delete('/country/:id', deleteCountry);


adminRouter.use('/states', stateRoutes);
adminRouter.post('/create-state', createState);
adminRouter.post('/create-bulk-state-and-lga', bulkCreateStates);
adminRouter.get('/states', listStates);
adminRouter.get('/state/:id', getState);
adminRouter.delete('/state/:id', deleteState);

adminRouter.use('/lgas', lgaRoutes);
adminRouter.post('/create-lga', createLga);
adminRouter.get('/lgas', listLgas);
adminRouter.get('/lga/:id', getLga);
adminRouter.delete('/lga/:id', deleteLga);

// Banks
adminRouter.post('/banks/bulk', bankController.validateBulkBanks, bankController.bulkCreateBanks);