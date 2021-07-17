const mongoose = require("mongoose");

const Homework = mongoose.model(
  "Homework",
  new mongoose.Schema({
    content: String,
    attachemnt: [
        //TODO: attachemnt class
    ],
    grade: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Grade"
        },
    date: mongoose.Schema.Types.Date
  })
);

module.exports = Homework;
