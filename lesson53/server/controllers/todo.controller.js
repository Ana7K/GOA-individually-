import { ToDoModel } from "../models/todo.model.js";

export const getToDo = async (req, res) => {
  try {
    const user = await ToDoModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postToDo = async (req, res) => {
  try {
    const user = await ToDoModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putToDo = async (req, res) => {
  try {
    const user = await ToDoModel.findByIdAndPut(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(200).json({ message: "initial server error", error });
  }
};

export const deleteToDo = async (req, res) => {
  try {
    const user = await ToDoModel.findByIdAndDelete(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(200).json({ message: "initial server error", error });
  }
};
