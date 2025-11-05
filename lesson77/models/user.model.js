import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
});

export const UserModel = mongoose.model("user", UserSchema);
