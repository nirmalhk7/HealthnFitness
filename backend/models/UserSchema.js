const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    // required: true,
    min: 0,
    max: 100,
  },
  gender: {
    type: String,
    // required: true,
  },
  weight: {
    type: Number,
  },
  height: {
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
  // console.log("Comparing", password, this.password);
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", UserSchema);
