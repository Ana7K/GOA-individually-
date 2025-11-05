import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
export async function register(req, res) {
  try {
    const { name, age, email, password } = req.body;
    const user = await UserModel.find({ email: email });
    if (user.length !== 0) {
      res
        .status(409)
        .json({ status: 409, message: "user is already registered" });
      return;
    }
    const newUser = await UserModel.create({
      name: name,
      age: age,
      email: email,
      password: password,
    });
    res
      .status(201)
      .json({ message: "user successfully registered", user: newUser });
  } catch (e) {
    res.status(401).json({ status: 401, message: "user is not registered" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    const isMatch = password === user.password;
    if (!isMatch)
      return res.status(401).json({ message: "user password doesn't exist" });
    if (!user) {
      res
        .status(409)
        .json({ status: 409, message: "user is already logged in" });
      return;
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "2h",
    });
    res.cookie("token", token, {
      httOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.status(201).json({ message: "user successfully logged in" });
  } catch (e) {
    res
      .status(401)
      .json({ status: 401, message: "user login error, is not registered" });
  }
}

export async function profile(req, res) {
  try {
    const user = await UserModel.findById(req.userId);
    res.status(200).json({ user });
    return;
  } catch (e) {
    res.status(500).json({ status: 500, message: "gadi midi modi" });
  }
}

export async function logout(req, res) {
  try {
    res.status(201).json({ message: "user successfully logged out" });
  } catch (e) {
    res.status(401).json({ status: 401, message: "user could not logout" });
  }
}
