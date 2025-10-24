import express from "express";
import dotenv from "dotenv";
import { router } from "./routers/lomi.route.js";
import { connectDB } from "./db/connect.db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// app.get("/lomi", (req, res)=>{
//     res.send({ name: "ana" });
//     console.log("getting data", )
// })

app.use(router);

app.listen(PORT, () => {
  connectDB();
  console.log("you are chilling at port 8000", PORT);
});
