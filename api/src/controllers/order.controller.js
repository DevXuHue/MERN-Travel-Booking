import Order from "../models/Order.js";

export const newOrder = async (req, res, next) => {
    try {
        console.log(req.user.id);
        const orderInfo = {
            ...req.body,
            hotels: req.body.hotelId,
            users: req.user.id,
        };

        const order = await Order.create({ ...orderInfo });

        res.status(200).json({
            order,
            success: true,
            message: "Create successfully",
        });
    } catch (error) {
        next(error);
    }
};

export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({});

        res.status(200).json({
            orders,
            success: true,
            message: "Fetch orders successfully completed",
        });
    } catch (error) {
        next(error);
    }
};
