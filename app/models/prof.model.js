const mongoose = require("mongoose");

const Prof = mongoose.model(
  "Prof",
  new mongoose.Schema({
    name: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  })
);

module.exports = Prof;
