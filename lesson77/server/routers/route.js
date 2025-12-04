import express from "express";
import { login, logout, profile, register } from "../controllers/auth.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import test from "./test.route.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);
router.get("/logout", logout);

router.use("/test", test);
export default router;
