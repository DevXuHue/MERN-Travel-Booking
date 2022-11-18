import express from "express";
import {
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurants,
} from "../controllers/restaurant.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyToken, verifyAdmin, createRestaurant);

//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateRestaurant);

// //DELETE
router.delete("/:id/:hotelid", verifyToken, verifyAdmin, deleteRestaurant);

// //GET
router.get("/:id", getRestaurant);

// //GET ALL
router.get("/", getRestaurants);

export default router;
