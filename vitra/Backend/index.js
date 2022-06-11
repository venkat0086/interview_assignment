require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connect = require("./src/config/db");

const newStoriesController = require("./src/controllers/newStories_controller");
const topStoriesController = require("./src/controllers/topStories_controller");
const bestStoriesController = require("./src/controllers/bestStories_controller");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/newstories", newStoriesController);
app.use("/beststories", bestStoriesController);
app.use("/topstories", topStoriesController);

const port = process.env.PORT || 8080;

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log("Listening to 8080 port");
  } catch (error) {
    return res.status(500).send(error);
  }
});
