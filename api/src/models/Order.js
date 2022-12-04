import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        quantityPeople: {
            type: Number,
            required: true,
        },
        totalDays: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        orderStatus: {
            type: String,
            required: true,
            default: "Processing...",
        },
        paymentInfo: {
            id: { type: String, required: true },
            status: { type: String, required: true },
        },
        users: {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        hotels: {
            ref: "Hotel",
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("order", orderSchema);
