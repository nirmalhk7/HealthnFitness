var express = require("express");
var router = express.Router();
var User = require("../models/UserSchema");

router.get("/", (req, res, next) => {
  User.find({ accountType: { $ne: "CLIENT" } }).then((ans) => {
    let new_ans = [];
    ans.forEach((element, index) => {
      new_ans.push({
        name: element.name,
        username: element.username,
        accountType: element.accountType,
        description: element.description,
      });
    });
    res.status(200).json(new_ans);
  });
});

router.get("/:username", (req, res, next) => {
  User.findOne({ username: req.params.username }).then((ans) =>
    res
      .status(200)
      .json({
        accountType: ans.accountType,
        address: ans.address,
        age: ans.age,
        description: ans.description,
        email: ans.email,
        gender: ans.gender,
        name: ans.name,
        username: ans.username,
        phonenumber: ans.phonenumber
      })
  );
});

module.exports = router;
