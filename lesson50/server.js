import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import lomebi from "./routes/lomebi.route.js";
import { connectDB } from "./db/connect.db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/lomebi", lomebi);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is at port", PORT);
});
