import Restaurant from "../models/Restaurant.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRestaurant = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRestaurant = new Restaurant(req.body);

  try {
    const savedRestaurant = await newRestaurant.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { restaurants: savedRestaurant._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRestaurant);
  } catch (err) {
    next(err);
  }
};

export const updateRestaurant = async (req, res, next) => {
  try {
    const updateRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRestaurant);
  } catch (err) {
    next(err);
  }
};

export const deleteRestaurant = async (req, res, next) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(200).json("Restaurant has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json(restaurant);
  } catch (err) {
    next(err);
  }
};

export const getRestaurants = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const restaurants = await Restaurant.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 1000000 },
    }).limit(req.query.limit);
    res.status(200).json(restaurants);
  } catch (err) {
    next(err);
  }
};
