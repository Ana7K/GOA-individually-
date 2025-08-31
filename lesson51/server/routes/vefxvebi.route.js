import express from "express";
import { getVefxvi, postVefxvi } from "../controllers/vefxvebi.controller.js";
const router = express.Router();

router.get("/", getVefxvi);
router.post("/", postVefxvi);

export default router;
