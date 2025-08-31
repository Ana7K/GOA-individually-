import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //კაი რამეა :)

//////////////////////////////get endpoints///////////////////////////
app.get("/cats", (req, res) => {
  try {
    res.status(200).json({ data: [{ id: 123, name: "Tom" }] });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

app.get("/dogs", (req, res) => {
  try {
    res.status(200).json({ data: [{ id: 1234, name: "Charlie" }] });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

app.get("/lomebi", (req, res) => {
  try {
    res.status(200).json({ data: [{ id: 12345, name: "Lomi" }] });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

//////////////////////////////post endpoints///////////////////////////
app.post("/cats", (req, res) => {
  try {
    res.status(201).json({ message: "cat added", data: req.body });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

app.post("/dogs", (req, res) => {
  try {
    res.status(201).json({ message: "dog added", data: req.body });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

app.post("/lomebi", (req, res) => {
  try {
    res.status(201).json({ message: "lomi added", data: req.body });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

//////////////////////////////put endpoints///////////////////////////
app.put("/cats/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ message: "cat (თავისი id-ით) updated", data: req.body });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

app.put("/dogs/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ message: "dog (თავისი id-ით) updated", data: req.body });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

app.put("/lomebi/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ message: "lomi (თავისი id-ით) updated", data: req.body });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

//////////////////////////////delete endpoints///////////////////////////
app.delete("/cats/:id", (req, res) => {
  try {
    res.status(201).json({ message: "cat (თავისი id-ით) deleted" });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

app.delete("/dogs/:id", (req, res) => {
  try {
    res.status(201).json({ message: "dog (თავისი id-ით) deleted" });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

app.delete("/lomebi/:id", (req, res) => {
  try {
    res.status(201).json({ message: "lomi (თავისი id-ით) deleted" });
  } catch (error) {
    res.status(500).json({ message: "initial server error", error });
  }
});

//////////////////server/////////////////
app.listen(PORT, () => {
  console.log("server is listening at port", PORT);
});
