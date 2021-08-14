const mongoose = require("mongoose");

const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    //student_id == id of the model
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    first_name: String,
    last_name: String,
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'parent'
    },
  })
);

module.exports = Student;
