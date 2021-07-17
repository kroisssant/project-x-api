const controller = require('../controllers/storage.controller')
const { authJwt } = require("../middlewares");
const path = require("path")


// multer 
const multer = require('multer')
    //storage for profilepics
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/profilepics/')
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })



module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/storage/profilePics", [authJwt.verifyToken], upload.single("file"))
    app.get("/api/storage/profilePics/:id",controller.profilePic, [authJwt.verifyToken])
};