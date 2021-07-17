const mongoose = require("mongoose")
const db = require("../models");
const Elev = db.elev;
const Clasa = db.class
const Grade =  db.grade
const Homework = db.homwork
const Materie = db.materie
const Prof = db.prof
const School = db.school

exports.createElev = (req, res) => {
    const elev = new Elev({
        nume: req.body.name,
        user: req.body.id
    });
    elev.save()
    const clasa = new Clasa({})
    clasa.save()
    const grade = new Grade({})
    grade.save()
    const homework = new Homework({})
    homework.save()
    const materie = new Materie({})
    materie.save()
    const prof = new Prof({})
    prof.save()
    const school = new School({})
    school.save()
    res.send("done")
}

exports.createClasa = (req, res) => {
    const elev = new Elev({
        nume: req.body.name,
        user: req.body.id
    });
    elev.save()
    res.send("done")
}


exports.getElev = (req, res) => {
    Elev.findOne({user: req.body.id}, (err, elev)=>{
        res.send(elev.id)
    })
}