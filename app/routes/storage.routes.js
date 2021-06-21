const controller = require('../controllers/storage.controller')
const { authJwt } = require("../middlewares");
const multer = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/storage/profilePics", controller.profilePic, [authJwt.verifyToken], upload.single("img"))

};