import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/connect.db.js";
import router from "./routers/route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser());

app.use(router);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running on port:", PORT);
});
