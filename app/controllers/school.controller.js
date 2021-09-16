const mongoose = require("mongoose")
const db = require("../models");
const Student = db.student;
const Classroom = db.classroom
const Grade = db.grade  
const Course =  db.course
const Teacher = db.teacher 
const CodeStore = db.codeStore 


//here is the create student funtion for the admins
exports.createStudent = (req, res) => {
    const student = new Student({
      user: null,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      parent: null
    });
    student.save((err, student) => {
      if(err) {
        return res.status(500).send({ message: err });
      }
      if(student) {
        codeGen = Math.floor(Math.random() * Date.now())
        const _code = new CodeStore({
          student: student._id,
          code: codeGen
        })
        _code.save((err, code) => {
          if(err) {
            return res.status(500).send({message: merr})
          }
          if(code) {
            return res.status(200).send({code: code}) //here will be something like a phone message service
          }
        })
      }
    }) 
  }