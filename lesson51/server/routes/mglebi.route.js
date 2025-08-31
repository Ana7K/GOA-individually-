import express from "express";
import { getMgeli, postMgeli } from "../controllers/mglebi.controller.js";
const router = express.Router();

router.get("/", getMgeli);
router.post("/", postMgeli);

export default router;
