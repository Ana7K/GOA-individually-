import mongoose from "mongoose";
const ToDoSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    collection: "todo",
  }
);
export const ToDoModel = mongoose.model("todo", ToDoSchema);
