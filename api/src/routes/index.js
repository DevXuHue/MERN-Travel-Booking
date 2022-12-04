import express from "express";
import authRouter from "./auth.js";
import hotelRouter from "./hotels.js";
import roomRouter from "./rooms.js";
import userRouter from "./users.js";
import restaurantRouter from "./restaurant.js";
import orderRoute from "./order.routes.js";
import paymentRoute from "./payment.routes.js";

const router = express.Router();
router.use("/auth/", authRouter);
router.use("/hotels/", hotelRouter);
router.use("/rooms/", roomRouter);
router.use("/users/", userRouter);
router.use("/restaurants/", restaurantRouter);
router.use("/order", orderRoute);
router.use("/payment", paymentRoute);

export default router;
