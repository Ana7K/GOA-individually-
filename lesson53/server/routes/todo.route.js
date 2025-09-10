import express from "express";
import {
  getToDo,
  postToDo,
  putToDo,
  deleteToDo,
} from "../controllers/todo.controller.js";
const router = express.Router();

router.get("/", getToDo);

router.post("/", postToDo);

router.put("/:id", putToDo);

router.delete("/:id", deleteToDo);

export default router;
