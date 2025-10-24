import { isValidObjectId } from "mongoose";
import { LomiModel } from "../models/lomi.model.js";

export const xbo = async (req, res) => {
  try {
    console.log("getting data");
    const user = await LomiModel.find();
    if (user.length === 0) {
      res.status(204).json({ message: "content not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const xbo1 = async (req, res) => {
  try {
    const { name } = req.body;
    const isUser = await LomiModel.find({ name });
    console.log(isUser);
    if (isUser != []) {
      res.status(409).json({ message: "user already exists" });
    }
    const user = await LomiModel.create(req.body);
    console.log("posting data");
    res.send(user);
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const xbo2 = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    console.log(id);
    if (!isValidObjectId(id)) {
      res.status(404).json({ message: "id not found" });
    }
    const isId = await LomiModel.findById(id);
    console.log(isId);

    if (isId === null) {
      res.status(409).json({ message: "user id doesn't exist" });
    }
    const user = await LomiModel.findByIdAndUpdate(id, body);
    console.log("updating data");
    res.send(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const xbo3 = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!isValidObjectId(id)) {
      res.status(404).json({ message: "id not found" });
    }
    const isId = await LomiModel.findById(id);
    console.log(isId);

    if (isId === null) {
      res.status(409).json({ message: "user id doesn't exist" });
    }
    const user = await LomiModel.findByIdAndDelete(id);

    console.log("deleting data");
    res.send(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
