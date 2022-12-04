import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import * as orderController from "../controllers/order.controller.js";

const orderRoute = express.Router();

orderRoute.post("/", verifyToken, orderController.newOrder);
orderRoute.get("/", verifyToken, verifyAdmin, orderController.getAllOrders);

export default orderRoute;
