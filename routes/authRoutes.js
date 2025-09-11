const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

// ✅ Test public route
router.get("/test", (req, res) => {
  res.json({ message: "Test route is working" });
});

// ✅ Protected route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;
