const mongoose = require("mongoose");

const Classroom = mongoose.model(
  "Classroom",
  new mongoose.Schema({
   //parent_id = the id of the model
   name: String,
   Courses: [
       {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Course"
       }
   ],
   Students: [
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
       }
   ],
   Teachers: [
    {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Teacher"
    }
]
  })
);

module.exports = Classroom;
