import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import assignmentRoutes from "./routes/assignments.js";

dotenv.config();

const app = express();

// EJS
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// To read form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/assignments", assignmentRoutes);

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Start server
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
