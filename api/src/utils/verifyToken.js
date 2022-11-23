import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = async (req, res, next) => {
    console.log(req.cookies);

    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated!"));
    }

    await jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next();
    });
};

export const verifyUser = async (req, res, next) => {
    await verifyToken(req, res, next, () => {
        if (req?.user.id === req.params.id || req?.user?.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};

export const verifyAdmin = async (req, res, next) => {
    if (req?.user?.isAdmin) {
        return next();
    } else {
        return next(createError(403, "You are not authorized!"));
    }
};
