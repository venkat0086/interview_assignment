const express = require("express");
const router = express.Router();

const TopStories = require("../models/topstories_model");

router.post("/", async (req, res) => {
  try {
    const topStories = await TopStories.create(req.body);
    return res.status(201).send(topStories);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const topStories = await TopStories.find().lean().exec();
    return res.status(201).send(topStories);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
