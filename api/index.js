import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import router from "./src/routes/index.js";
import connectDB from "./src/services/connectDB.js";
import { createError } from "./src/utils/error.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        credentials: true,
    })
);
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/", router);
app.use(createError);
await connectDB();

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
});
