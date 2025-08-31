import mongoose, { Schema } from "mongoose";
const LomiSchema = mongoose.Schema({
    name: String,
    age: Number
})
export const Lomi = mongoose.model("lomi", LomiSchema)