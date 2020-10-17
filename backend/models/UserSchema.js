const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let UserSchema = new Schema({
  // Required for All roles
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  accountType:{
    type: String,
    required: true
  },

  // For only user role
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },

  // For Professionals
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  phonenumber: {
    type: Number,
  },
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, "hackccelerate", { algorithm: "HS256" });
};

// checking if password is valid
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("user", UserSchema);
