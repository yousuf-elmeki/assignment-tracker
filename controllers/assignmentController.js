import Assignment from "../models/assignment.js";

// GET /assignments
export const listAssignments = async (req, res) => {
  const assignments = await Assignment.find().sort({ dueDate: 1 });
  res.render("assignments/list", { assignments });
};

// GET /assignments/new
export const showNewForm = (req, res) => {
  res.render("assignments/new");
};

// POST /assignments
export const createAssignment = async (req, res) => {
  const { title, course, dueDate, description } = req.body;

  await Assignment.create({
    title,
    course,
    dueDate,
    description,
    completed: false,
  });

  res.redirect("/assignments");
};

// GET /assignments/:id/edit
export const showEditForm = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render("assignments/edit", { assignment });
};

// POST /assignments/:id/edit
export const updateAssignment = async (req, res) => {
  const { title, course, dueDate, description } = req.body;

  await Assignment.findByIdAndUpdate(req.params.id, {
    title,
    course,
    dueDate,
    description,
  });

  res.redirect("/assignments");
};

// GET /assignments/:id/delete
export const showDeletePage = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render("assignments/delete", { assignment });
};

// POST /assignments/:id/delete
export const deleteAssignment = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.redirect("/assignments");
};
