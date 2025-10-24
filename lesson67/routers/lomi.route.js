import express, { Router } from "express";
import { xbo, xbo1, xbo2, xbo3 } from "../controllers/lomi.controller.js";

const router = express.Router();

router.get("/lomi", xbo);
router.get("/vefxvi", xbo);
router.get("/mgeli", xbo);
router.get("/aqlemi", xbo);

router.post("/lomi", xbo1);

router.put("/lomi/:id", xbo2);

router.delete("/lomi/:id", xbo3);

export { router };
