import express from "express";
import { lgaOnly } from "../../middlewares/roleMiddleware";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";
import { dashboard } from '../../controllers/lga/dashboard.controller';
import { createFarmer, deleteFarmer, getFarmer, initialize_payment, listFarmers, profile_imageUpload, proof_of_addressUpload, send_verification_code, updateFarmer, verify_code, verify_payment, verifyNIN } from "../../controllers/lga/farmer.controller";
import { upload } from "../../middlewares/multerMiddleware";

export const lgaRouter = express.Router();

lgaRouter.use(userAuthenticateJWT, lgaOnly);

// Define LGA-specific routes here
// Simple dashboard route for LGAs
// Dashboard endpoint returns LGA metrics
lgaRouter.get('/dashboard', dashboard);

lgaRouter.post('/create-farmer', createFarmer);
lgaRouter.get('/farmers', listFarmers);
lgaRouter.get('/get-farmer', getFarmer);
lgaRouter.put('/update-farmer', updateFarmer);  
lgaRouter.delete('/delete-farmer', deleteFarmer);
lgaRouter.post('/verify-nin', verifyNIN);
lgaRouter.post('/send-code', send_verification_code);
lgaRouter.post('/verify-code', verify_code);
lgaRouter.post('/upload-profile-image', upload.single('profile_image'), profile_imageUpload);
lgaRouter.post('/upload-proof-of-address', upload.single('proof_of_address'), proof_of_addressUpload);
lgaRouter.post('/initialize-payment', initialize_payment);
lgaRouter.get('/verify-payment', verify_payment);