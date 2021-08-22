const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

//here the jwt will be verified
verifyToken = (req, res, next) => {
    // taking the jwt form the header
    let token = req.headers["x-access-token"];
    let id = req.headers["user-id"]
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
    //verfing the jwt id with the id
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        if (id == decoded.id) {
            next()
        } else {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        
    });
};

// this is for checking if the user is an admin or not
isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find({
                _id: { $in: user.roles }
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "admin") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require Admin Role!" });
                return;
            }
        );
    });
};

//this is no longer valid
isProfesor = (req, res, next) => {
    User.findById(req.headers["user-id"]).exec((err, user) => {
        if (err) { 
            res.status(500).send({ message: err });
            
            return;
        }
        console.log(user)
        Role.find({
                _id: { $in: user.roles }
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "moderator") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require Moderator Role!" });
                return;
            }
        );
    });
};

const authJwt = {
    verifyToken,
    isAdmin,
    isProfesor
};
module.exports = authJwt;