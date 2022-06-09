const express = require("express");
const router = express.Router();

const EventList = require("../models/Events_model");

router.post("/", async (req, res) => {
  try {
    const eventList = await EventList.create(req.body);
    return res.status(201).send(eventList);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const eventList = await EventList.find().lean().exec();
    return res.status(201).send(eventList);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
