import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    typescript: true,
    apiVersion: "2022-08-01",
});

export const processPayment = async (req, res, _next) => {
    try {
        const myPayment = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "usd",
            metadata: {
                company: "Travel",
            },
        });

        res.status(200).json({
            success: true,
            client_secret: myPayment.client_secret,
        });
    } catch (error) {
        _next(error);
    }
};

export const sendStripeApiKey = async (_req, res, _next) => {
    try {
        res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
    } catch (error) {
        _next(error);
    }
};
