require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connect = require("./src/config/db");

const adminController = require("./src/controllers/User_controller");
const studentListController = require("./src/controllers/Student_controller");
const eventListController = require("./src/controllers/Event_controller");
const { register, login } = require("./src/controllers/Auth_controller");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", register);
app.post("/login", login);
app.use("/studentlist", studentListController);
app.use("/users", adminController);
app.use("/events", eventListController);

const port = process.env.PORT || 8080;

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log("Listening to 8080 port");
  } catch (error) {
    return res.status(500).send(error);
  }
});
