import express from "express";
import {
  adminGet,
  auditGet,
  developerGet,
  moderatorGet,
  userGet,
} from "../controllers/test.controller.js";
const router = express.Router();

router.get("/user", userGet);
router.get("/admin", adminGet);
router.get("/moderator", moderatorGet);
router.get("/developer", developerGet);
router.get("/audit", auditGet);

export default router;
