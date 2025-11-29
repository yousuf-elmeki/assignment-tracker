import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";

import assignmentRoutes from "./routes/assignments.js";
import authRoutes from "./routes/authRoutes.js";
import passport from "./config/passport.js";
import { attachUser } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();

// Static files
app.use(express.static("public"));

// EJS setup
app.set("view engine", "ejs");
app.set("views", "./views");

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Make user object available in templates
app.use(attachUser);

// Routes
app.use("/assignments", assignmentRoutes);
app.use("/auth", authRoutes);

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

// Login Page
app.get("/login", (req, res) => {
  res.render("login");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
