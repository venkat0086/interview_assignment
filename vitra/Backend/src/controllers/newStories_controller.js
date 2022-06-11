const express = require("express");
const router = express.Router();

const NewStories = require("../models/newStories_model");

router.post("/", async (req, res) => {
  try {
    const newStories = await NewStories.create(req.body);
    return res.status(201).send(newStories);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const newStories = await NewStories.find().lean().exec();
    return res.status(201).send(newStories);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
