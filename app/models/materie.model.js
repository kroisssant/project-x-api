const mongoose = require("mongoose");

const Materie = mongoose.model(
  "Materie",
  new mongoose.Schema({
    name: String,
    prof: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prof"
    },
    elevi: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Elev"
        }
    ]
  })
);

module.exports = Materie;
