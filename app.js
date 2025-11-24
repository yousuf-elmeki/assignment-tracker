import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import assignmentRoutes from "./routes/assignments.js";

dotenv.config();

const app = express();

// Serve CSS and other static files
app.use(express.static("public"));

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Enable form data parsing
app.use(express.urlencoded({ extended: true }));

// Use assignment routes
app.use("/assignments", assignmentRoutes);

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Start server (Render requires process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
