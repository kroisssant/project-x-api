const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

//cheking for dups in email, user or phone
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      User.findOne({
        phone: req.body.phone
      }).exec((err, user) => {
        if(err){
          res.send(500).send({message: err});
          return
        }
  
        if(user) {
          res.status(400).send({message: "Failed! Phone is already in use!"})
          return
        }
        next();
      });
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;
