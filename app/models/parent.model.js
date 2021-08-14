const mongoose = require("mongoose");

const Parent = mongoose.model(
  "Parent",
  new mongoose.Schema({
   //parent_id = the id of the model
   user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User"
   },
   first_name: String,
   last_name: String,
   dob: mongoose.Schema.Types.Date,
   
  })
);

module.exports = Parent;
