import express from "express";
import { lgaOnly } from "../../middlewares/roleMiddleware";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";

export const lgaRouter = express.Router();

lgaRouter.use(userAuthenticateJWT, lgaOnly);

// Define LGA-specific routes here
// Simple dashboard route for LGAs
lgaRouter.get('/dashboard', (request, response) => {
	return response.status(200).json({ message: 'LGA dashboard' });
});