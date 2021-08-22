const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const CodeStore = db.codeStore
const Student = db.student

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//singup funtion
exports.signup = (req, res) => {
  // create the user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    profilePicUrl: "http://localhost:8080/api/storage/profilePics/default", //TODO: TO BE SWITCH WHEN I PUT IT ON A SERVER
    password: bcrypt.hashSync(req.body.password, 8)
  });
  // check if the code is in the list if it s not then you will cant make an account
  CodeStore.findOne({code: { $in: req.body.code }}, (err, code) => {
    if(err) {
      return res.status(500).send({message: err})
    }
    if(!code) {
      console.log(code)
      return res.status(404).send({message: "Code not found"})
    }
    //if the code was found this code will execute
    if(code) {
      Student.findOne({_id: code.student._id}, (err, student)=> {
      student.save((err, student) => {
        if(err) {
          return res.status(500).send({message: err})
        }
        if(!student) {
          return res.status(401).send({message: "The student wasnt found please contact us for help"})
        }
        //if the student was found this code will execute
        if(student) {
          //here the user will be saved on the db
          user.save((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            if(user){
              // adding the role user to the user
              Role.findOne({ name: "user" }, (err, role) => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }
        
                user.roles = [role._id];
                user.save(err => {
                  if (err) {
                    res.status(500).send({ message: err });
                    return;
                  }
                  // here the student useris finally set to the new created user
                  student.user = user._id 
                  res.send({ message: "User was registered successfully!" });
                });
              });
            }
          });
        } 
      })
      
      })
      
    }

  })
};
// singin funtion
exports.signin = (req, res) => {
  //seaching for the user to see if it exist
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      //if the user is not found this will be the message
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      //if the user exists this code will be executed
      if(user){
      //comparing the encriped password to the one stored on the db
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      //if the password is not valid then this will show up
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      //if the password is valid this will happen
      if(passwordIsValid){
      //making a jwt for it to be stored in the localstorage of the user
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        profilePicUrl: user.profilePicUrl,
        roles: authorities,
        accessToken: token
      });
    }
    }
    });
};

//code check
exports.codeCheck= (req, res)=> {
  console.log(req.body.code)
  CodeStore.findOne({code: req.body.code}).exec((err, code) => {
    if(err) {
      return res.status(500).send({message: err, code: null})
    }
    if(!code) {
      return res.status(404).send({message: "Code not found", code: null})
      
    }
    if(code) {
      return res.status(200).send({code: code, message:"Done"})
    }
  })
}

