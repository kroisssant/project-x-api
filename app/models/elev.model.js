const mongoose = require("mongoose");

const Elev = mongoose.model(
  "Elev",
  new mongoose.Schema({
    nume: String,
    grades: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Grade"
        }
    ],
    homeworks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "homework"
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    } 
  })
);

module.exports = Elev;
