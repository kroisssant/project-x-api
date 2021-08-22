const path = require("path")
const db = require("../models");
const middleware = require("../middlewares/authJwt")
const User = db.User

//returning the progile pic
exports.profilePic = (req, res) => {
    id = req.params.id
    console.log(id)
    res.sendFile(path.join(__dirname + "../../../uploads/profilepics/"+id+".jpg"))
}