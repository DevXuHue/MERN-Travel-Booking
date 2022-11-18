import express from "express";
import authRouter from "./auth.js";
import hotelRouter from "./hotels.js";
import roomRouter from "./rooms.js";
import userROuter from "./users.js";

const router = express.Router();
router.use("/auth", authRouter);
router.use("/hotels/", hotelRouter);
router.use("/rooms/", roomRouter);
router.use("/users/", userROuter);

export default router;
