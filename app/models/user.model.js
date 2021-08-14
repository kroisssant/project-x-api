const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
    last_login_date: mongoose.Schema.Types.Date,
    last_login_ip: String,
    profilePicUrl: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  },  { strict: true })
);

module.exports = User;
