const mongoose = require("mongoose");

const Teacher = mongoose.model(
  "Teacher",
  new mongoose.Schema({
    //teacher_id = model id
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    first_name: String,
    last_name: String,
    dob: mongoose.Schema.Types.Date,
  })
);

module.exports = Teacher;
