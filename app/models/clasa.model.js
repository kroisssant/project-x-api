const mongoose = require("mongoose");

const Class = mongoose.model(
  "Class",
  new mongoose.Schema({
    nume: String,
    diriginte: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prof"
    },
    Marterii:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Materie"
        }
    ],
    
  })
);

module.exports = Class;
