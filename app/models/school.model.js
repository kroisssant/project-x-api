const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    principle: {
        number_of_students: int,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        payment: String // here should be all the info for the payment and also all the personal info of the principle like cnp, name, etc
    }
  })
);

module.exports = Role;
