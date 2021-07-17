const path = require("path")

exports.profilePic = (req, res) => {
    id = req.params.id
    console.log(id)
    res.sendFile(path.join(__dirname + "../../../uploads/profilepics/60dccd831b4f3a08cc9c8a76.jpg"))
}