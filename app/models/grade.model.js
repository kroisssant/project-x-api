const mongoose = require("mongoose");

const Grade = mongoose.model(
  "Grade",
  new mongoose.Schema({
    value: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
  })
);

module.exports = Grade;
