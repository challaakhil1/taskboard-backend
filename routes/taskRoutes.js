const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasksByBoard,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, createTask);
router.get("/:boardId", protect, getTasksByBoard);
router.put("/:taskId", protect, updateTask);
router.delete("/:taskId", protect, deleteTask);

module.exports = router;
