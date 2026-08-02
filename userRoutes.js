const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Dr. Ramesh",
      subject: "Artificial Intelligence"
    },
    {
      _id: 2,
      name: "Mrs. Priya",
      subject: "Machine Learning"
    },
    {
      _id: 3,
      name: "Mr. Suresh",
      subject: "Python Programming"
    }
  ]);
});

module.exports = router;