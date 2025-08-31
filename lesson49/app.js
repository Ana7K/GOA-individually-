import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.db.js";
import { Lomi } from "./models/lomi.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const lomebi = await Lomi.find();
    res.status(200).json({ data: lomebi});
  } catch (error) {
    res.status(200).json({ message: "initial server error", error });
  }
});

app.post("/", async (req, res) => {
  try {
    const lomebi = await Lomi.create(req.body);
    res
      .status(201)
      .json({ message: "post is sent successfully", data: lomebi });
  } catch (error) {
    res.status(200).json({ message: "initial server error", error });
  }
});

app.put("/:id", async (req, res) => {
  try {
    const lomebi = await Lomi.findByIdAndUpdate(req.params.id, req.body);
    res
      .status(201)
      .json({ message: "post has updated successfully", data: lomebi });
  } catch (error) {
    res.status(200).json({ message: "initial server error", error });
  }
});

app.delete("/:id", async(req, res) => {
  try {
    const lomebi = await Lomi.findByIdAndDelete(req.params.id);

    res.status(201).json({ message: "post is deleted successfully" });
  } catch (error) {
    res.status(200).json({ message: "initial server error", error });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log("server is listening  at port", PORT);
});
