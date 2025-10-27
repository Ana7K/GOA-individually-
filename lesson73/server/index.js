import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.listen(PORT, () => {
  console.log("we are chilling at port ", PORT);
  connectDB();
});
