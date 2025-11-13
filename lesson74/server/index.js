import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { connectDB } from "./db/connectDB.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;
const SECRET = process.env.SECRET;

const user = {
  email: "anakitesashvili@gmail.com",
  password: "lomi.123",
};

app.get("/api", authMiddleware, (req, res) => {
  res.status(200).json({ name: "ana", user: req.user });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (password === user.password && email === user.email) {
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  } else {
    res.status(401).json({ message: "couldn't authorize, missing token" });
  }
});

app.listen(PORT, () => {
  console.log("we are chilling at port ", PORT);
  connectDB();
});
