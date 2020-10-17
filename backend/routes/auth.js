var express = require("express");
var router = express.Router();
var User = require("../models/UserSchema");

router.get("/signin",(req,res,next)=>{
  User.find({}).then(ans=>res.json(ans)).catch(err=>console.log(err))
})

router.post("/signin", (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user != null && user.validPassword(req.body.password)) {
        res.json({ token: user.getJwtToken(), _id: user._id });
      } else {
        res.json({ message: "Invalid Username or Password" });
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
      res.status(200).json({ _id: ans._id, token: ans.getJwtToken() })
    )
    .catch((err) => console.log("/signup", err));
});

module.exports = router;
