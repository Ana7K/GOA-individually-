import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/connect.db.js";
import route from "./routes/route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors({origin: "http://localhost:5173"}))

app.use(express.json());

app.use("/", route);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is at port", PORT);
});
