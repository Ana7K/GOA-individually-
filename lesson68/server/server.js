import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import connectDB from "./db/connect.db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  const user = {
    name: "ana",
    email: "ana@example.com",
    age: 21,
  };
  try {
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(503).json({ status: 503, message: err });
  }
});

app.listen(PORT, () => {
  // connectDB();
  console.log(`Server is running on port ${PORT}`);
});
