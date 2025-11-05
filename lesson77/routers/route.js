import express from "express";
import { login, profile, register } from "../controllers/auth.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);
// router.post("/logout");

export default router;
