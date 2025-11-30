import express from "express";
import {
  listAssignments,
  showNewForm,
  createAssignment,
  showEditForm,
  updateAssignment,
  showDeletePage,
  deleteAssignment,
} from "../controllers/assignmentController.js";

import { ensureAuth } from "../middleware/auth.js";

const router = express.Router();

// View all assignments (public)
router.get("/", listAssignments);

// Create assignment (protected)
router.get("/new", ensureAuth, showNewForm);
router.post("/", ensureAuth, createAssignment);

// Edit assignment (protected)
router.get("/:id/edit", ensureAuth, showEditForm);
router.post("/:id/edit", ensureAuth, updateAssignment);

// Delete assignment (protected)
router.get("/:id/delete", ensureAuth, showDeletePage);
router.post("/:id/delete", ensureAuth, deleteAssignment);

export default router;
