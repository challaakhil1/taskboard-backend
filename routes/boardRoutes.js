const express = require("express");
const router = express.Router();
const {
  createBoard,
  getUserBoards,
} = require("../controllers/boardController");
const protect = require("../middleware/authMiddleware");

// Protected routes
router.post("/", protect, createBoard);
router.get("/", protect, getUserBoards);

module.exports = router;
