const mongoose = require("mongoose");
const newStories = new mongoose.Schema(
  {
    by: { type: String, required: true },
    descendants: { type: Number, required: true },
    id: { type: Number, required: true },
    score: { type: Number, required: true },
    time: { type: Number, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("newstories", newStories);
