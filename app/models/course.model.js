const mongoose = require("mongoose");

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    } 
  })
);

module.exports = Course;
