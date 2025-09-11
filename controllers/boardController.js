const Board = require("../models/Board");

exports.createBoard = async (req, res) => {
  const { title, description } = req.body;

  try {
    const board = await Board.create({
      title,
      description,
      owner: req.user.id, // comes from JWT middleware
    });

    res.status(201).json(board);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserBoards = async (req, res) => {
  try {
    const boards = await Board.find({ owner: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
