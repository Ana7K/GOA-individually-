import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: {
    type: [String],
    enum: ["admin", "user", "moderator", "developer", "audit"],
    default: ["user"],
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const UserModel = mongoose.model("user", UserSchema);
