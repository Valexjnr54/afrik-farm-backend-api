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
import { createFarmer, deleteFarmer, getFarmer, getPaidFarmers, getUnpaidFarmers, initialize_payment, listFarmers, profile_imageUpload, proof_of_addressUpload, send_verification_code, updateFarmer, verify_code, verify_payment, verifyNIN } from "../../controllers/super_admin/farmer_controller";
import { createFarm, deleteFarm, getFarm, listFarms, listFarmsByFarmer, updateFarm } from "../../controllers/super_admin/farm_controller";
import { getSummary } from "../../controllers/super_admin/dashboard_controller";
import { getAllPayments, getRevenue } from "../../controllers/super_admin/payment_controller";

export const adminRouter = express.Router();

adminRouter.use(authenticateJWT, adminOnly);

adminRouter.get('/dashboard', getSummary);

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

// Farmer Management
adminRouter.post('/farmer/create-farmer', createFarmer);
adminRouter.get('/farmer/list-farmers', listFarmers);
adminRouter.get('/farmer/get-farmer', getFarmer);
adminRouter.put('/farmer/update-farmer', updateFarmer);
adminRouter.delete('/farmer/delete-farmer', deleteFarmer);
adminRouter.post('/farmer/verify-nin', verifyNIN);
adminRouter.post('/farmer/send-code', send_verification_code);
adminRouter.post('/farmer/verify-code', verify_code);
adminRouter.post('/farmer/upload-profile-image', upload.single('profile_image'), profile_imageUpload);
adminRouter.post('/farmer/upload-proof-of-address', upload.single('proof_of_address'), proof_of_addressUpload);
adminRouter.post('/farmer/initialize-payment', initialize_payment);
adminRouter.get('/farmer/verify-payment', verify_payment);
adminRouter.get('/farmer/list-paid-farmers', getPaidFarmers);
adminRouter.get('/farmer/list-unpaid-farmers', getUnpaidFarmers);

//Farm Management
adminRouter.post('/farm/create-farm', createFarm);
adminRouter.get('/farm/list-farms', listFarms);
adminRouter.get('/farm/get-farm', getFarm);
adminRouter.put('/farm/update-farm', updateFarm);
adminRouter.delete('/farm/delete-farm', deleteFarm);
adminRouter.get('/farm/farmers-farm', listFarmsByFarmer);

// Payments
adminRouter.get('/payment/revenue', getRevenue);
adminRouter.get('/payment/list-payments', getAllPayments);
// adminRouter.get('/payment/get-payment', );