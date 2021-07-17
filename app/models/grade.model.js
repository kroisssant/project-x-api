const mongoose = require("mongoose");

const Grade = mongoose.model(
  "Grade",
  new mongoose.Schema({
    value: mongoose.Schema.Types.Number,
    reasson: String,
    date: mongoose.Schema.Types.Date
  })
);

module.exports = Grade;
