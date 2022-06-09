const mongoose = require("mongoose");
const studentList = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollno: { type: String, required: true },
    term: { type: String, required: true },
    currentyear: { type: Number, required: true },
    contactno: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("student", studentList);
