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

const router = express.Router();

router.get("/", listAssignments);
router.get("/new", showNewForm);
router.post("/", createAssignment);

router.get("/:id/edit", showEditForm);
router.post("/:id/edit", updateAssignment);

router.get("/:id/delete", showDeletePage);
router.post("/:id/delete", deleteAssignment);

export default router;
