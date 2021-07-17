const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = require("./role.model");
db.user = require("./user.model");
db.grade = require("./grade.model");
db.homwork = require("./homework.model");
db.prof = require("./prof.model");
db.elev = require("./elev.model")
db.materie = require("./materie.model")
db.class = require("./clasa.model")
db.school = require("./school.model")

db.ROLES = ["elev", "profesor", "admin", "parinte"];

module.exports = db;

// scoala
//     clase
//         Materie
//             elev
//                 grade
//                 Homework
//             prof
                

// scoala
//     clase
//     director
//     nume

// clase
//     nume
//     Materie
//     diriginte
//         prof

// Materie
//     elev
//     prof

// elev
//     nume
//     Note
//     Homework(Array)

// prof
//     nume

// Homework
//     content
//     attachent
//     grade(array)
//     date 

// grade
//     value
//     reasson
//     date