const express = require("express");
const router = express.Router();

const StudentList = require("../models/Student_model");

router.post("/", async (req, res) => {
  try {
    const studentList = await StudentList.create(req.body);
    return res.status(201).send(studentList);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    if (req.query.term) {
      const studentList = await StudentList.find({ term: req.query.term })
        .lean()
        .exec();
      return res.status(201).send(studentList);
    } else if (req.query.curyear) {
      const studentList = await StudentList.find({
        currentyear: req.query.curyear,
      })
        .lean()
        .exec();
      return res.status(201).send(studentList);
    } else {
      const studentList = await StudentList.find().lean().exec();
      return res.status(201).send(studentList);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
