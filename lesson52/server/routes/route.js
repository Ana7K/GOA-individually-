import express from "express";
// import { getLomi } from "../controllers/lomebi.controller";
// import { getVefxvi } from "../controllers/vefxvebi.controller";
import lomebi from "./lomebi.route.js";
import vefxvebi from "./vefxvebi.route.js";
import mglebi from "./mglebi.route.js";

const router = express.Router();

router.use("/lomebi", lomebi);
router.use("/vefxvebi", vefxvebi);
router.use("/mglebi", mglebi);

export default router;
