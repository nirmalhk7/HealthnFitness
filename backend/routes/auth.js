var express = require("express");
var router = express.Router();
var User = require("../models/UserSchema");

router.get("/signin", (req, res, next) => {
  User.find({})
    .then((ans) => res.json(ans))
    .catch((err) => console.log(err));
});

router.post("/signin", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user != null && user.validPassword(req.body.password)) {
        res
          .status(200)
          .json({
            token: user.getJwtToken(),
            _id: user._id,
            accountType: user.accountType,
            name: user.name,
          });
      } else {
        res.status(250).json({ message: "Invalid Username or Password" });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

router.delete("/signin", (req, res, next) => {
  User.remove({}).then((ans) => res.status(200).json(ans));
});

router.post("/signup", (req, res, next) => {
  let new_user = new User(req.body);
  new_user.password = new_user.generateHash(new_user.password);

  new_user
    .save(req.body)
    .then((ans) =>
      res.status(200).json({
        token: new_user.getJwtToken(),
        _id: ans._id,
        accountType: ans.accountType,
        name: ans.name,
      })
    )
    .catch((err) => {
      console.error(err);
      res.status(420).json({ err: "Error" });
    });
});

module.exports = router;
