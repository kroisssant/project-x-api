const mongoose = require("mongoose")

const CodeStore = mongoose.model(
  "CodeStore",
  new mongoose.Schema({
   //parent_id = the id of the model
   student: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Student"
   },
   code: String
  })
);

module.exports = CodeStore;
