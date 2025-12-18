import express from "express";
import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4242;

app.use(express.json());

const sql = neon(process.env.DATABASE_URL);

app.get("/", async (_, res) => {
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  res.json({ version });
});

app.get("/items", async (_, res) => {
  try {
    const items = await sql``;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get items" });
  }
});

app.post("/items", async (req, res) => {
  try {
    const { name, age } = req.body;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create items" });
  }
});

app.put("/items/:id", async (req, res) => {
  try {
    const { name, age } = req.body;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update items" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
