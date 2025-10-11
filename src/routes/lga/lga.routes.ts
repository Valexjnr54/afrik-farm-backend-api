import express from "express";
import { lgaOnly } from "../../middlewares/roleMiddleware";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";

export const lgaRouter = express.Router();

lgaRouter.use(userAuthenticateJWT, lgaOnly);

// Define LGA-specific routes here
lgaRouter.get('/dashboard', (req, res) => {
    res.send('LGA Dashboard - Access Granted');
});