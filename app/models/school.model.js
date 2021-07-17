const mongoose = require("mongoose");

const School = mongoose.model(
  "School",
  new mongoose.Schema({
    name: String,
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prof"
    },
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class"
        }
    ]
  })
);

module.exports = School;
