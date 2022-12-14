import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    getMeAdmin,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//GET ALL
router.get("/", verifyToken, verifyAdmin, getUsers);
router.get("/me", verifyToken, verifyAdmin, getMeAdmin);

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyToken, verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all accounts");
});

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

export default router;
