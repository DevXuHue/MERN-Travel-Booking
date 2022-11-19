import Restaurant from "../models/Restaurant.js";

export const createRestaurant = async (req, res, next) => {
    try {
        console.log(req.params.hotelid);
        const hotelId = req.params.hotelid;

        const newRestaurant = new Restaurant({
            users: req.user.id,
            hotels: hotelId,
            ...req.body,
        });

        await newRestaurant.save();

        res.status(201).json({
            newRestaurant: newRestaurant._doc,
        });
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
        console.log(req.params.id);
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant)
            res.status(404).json({
                success: false,
                message: "Restaurant not found",
            });
        res.status(200).json({
            restaurant,
            success: true,
            message: "get restaurantDetails successfully",
        });
    } catch (err) {
        next(err);
    }
};

export const getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find({});
        res.status(200).json({
            restaurants,
            success: true,
            message: "fetch restaurants successfully",
        });
    } catch (err) {
        next(err);
    }
};
