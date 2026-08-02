const express = require("express");
const Attendance = require("../models/Attendance");

const router = express.Router();

// Get all attendance
router.get("/", async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("studentId");
    res.json(attendance);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Save attendance
router.post("/", async (req, res) => {
  try {
    console.log(req.body); // <-- Debug

    const attendance = new Attendance({
      studentId: req.body.studentId,
      status: req.body.status,
    });

    await attendance.save();

    res.status(201).json(attendance);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;