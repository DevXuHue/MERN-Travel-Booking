import express from "express";
import * as paymentController from "../controllers/payment.controller.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const paymentRoute = express.Router();

paymentRoute.get("/stripeapikey", paymentController.sendStripeApiKey);
paymentRoute.post(
    "/payment/process",
    verifyToken,
    paymentController.processPayment
);

export default paymentRoute;
