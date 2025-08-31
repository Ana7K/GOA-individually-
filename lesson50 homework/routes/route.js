import express from "express";
// import { getLomi } from "../controllers/lomebi.controller";
import lomebi from "./lomebi.route.js";
import vefxvebi from "./vefxvebi.route.js";
// import { getVefxvi } from "../controllers/vefxvebi.controller";
const router = express.Router();

router.use("/lomebi", lomebi);
router.use("/vefxvebi", vefxvebi);

export default router;
