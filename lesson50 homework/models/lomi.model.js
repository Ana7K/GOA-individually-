import mongoose from "mongoose";
const LomiSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    collection: "lomi",
  }
);
export const Lomi = mongoose.model("lomi", LomiSchema);
