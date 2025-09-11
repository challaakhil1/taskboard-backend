const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Needed for JSON body parsing

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const boardRoutes = require("./routes/boardRoutes");
app.use("/api/boards", boardRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("✅ API is up and running!");
});

// Error handler (optional)
app.use((err, req, res, next) => {
  console.error("🔥 Unhandled error:", err.stack);
  res.status(500).json({ message: "Server Error", error: err.message });
});
app.use((req, res, next) => {
  console.log("🔍 Incoming request:", req.method, req.url);
  next();
});

module.exports = app;
