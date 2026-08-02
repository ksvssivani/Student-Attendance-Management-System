const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Add student
router.post("/", async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    const student = new Student(req.body);

    await student.save();

    res.status(201).json(student);
  } catch (err) {
    console.error("Student Save Error:", err);
    res.status(500).json({ message: err.message });
  }
});

// Update student
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Delete student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;