const mongoose = require("mongoose");
const eventList = new mongoose.Schema(
  {
    name: { type: String, required: true },
    info: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    regUrl: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("event", eventList);
