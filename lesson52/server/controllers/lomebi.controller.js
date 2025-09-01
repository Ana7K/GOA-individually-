import { LomiModel } from "../models/lomi.model.js";

export const getLomi = async (req, res) => {
  try {
    const user = await LomiModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postLomi = async (req, res) => {
  try {
    const user = await LomiModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLomi = async (req, res) => {
  try {
    const user = await LomiModel.findByIdAndDelete(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(200).json({ message: "initial server error", error });
  }
};
