import express from "express";
// import { Lomi } from "../models/lomi.model.js";
import { getLomi, postLomi, deleteLomi } from "../controllers/lomebi.controller.js";
const router = express.Router();

// router.get("/lomi", (req, res) => {
//   try {
//     res.status(200).json({ name: "ana", age: 21 });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.get("/", getLomi);

// router.post("/lomi", async (req, res) => {
//   try {
//     const lomebi = await Lomi.create(req.body);
//     res.status(201).json({ data: "post updated" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.post("/", postLomi);

// router.delete("/:id", async(req, res) => {
//   try {
//     const lomebi = await Lomi.findByIdAndDelete(req.params.id);

//     res.status(201).json({ message: "post is deleted successfully" });
//   } catch (error) {
//     res.status(200).json({ message: "initial server error", error });
//   }
// });
router.delete("/:id", deleteLomi);

export default router;
