const express = require("express");
const router = express.Router();

const BestStories = require("../models/bestStories_model");

router.post("/", async (req, res) => {
  try {
    const bestStories = await BestStories.create(req.body);
    return res.status(201).send(bestStories);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const bestStories = await BestStories.find().lean().exec();
    return res.status(201).send(bestStories);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
