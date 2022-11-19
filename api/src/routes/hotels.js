import express from "express";
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel,
    getHotelsByType,
} from "../controllers/hotel.js";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
router.get("/getHotelsByType/:type", getHotelsByType);

//CREATE
router.post("/", verifyToken, verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

export default router;
