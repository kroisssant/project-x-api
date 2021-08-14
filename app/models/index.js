const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = require("./role.model");
db.user = require("./user.model");
db.parent = require("./parent.model")
db.teacher = require("./teacher.model")
db.student = require("./student.model")
db.grade = require("./grade.model")
db.course = require("./course.model")
db.codeStore = require("./codeStore.model")
db.classroom = require("./classroom.model")


db.ROLES = ["elev", "profesor", "admin", "parinte"];

module.exports = db;