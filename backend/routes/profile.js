var express = require("express");
var router = express.Router();
var User = require("../models/UserSchema");

router.get("/", (req, res, next) => {
  User.findById(req.query._id).then((ans) => res.status(200).json(ans));
});

router.post("/", (req, res, next) => {
  User.findByIdAndUpdate(req.query._id,req.body)
    .then((ans) => res.status(200).json(ans))
    .catch((err) => console.error(err));
});

router.delete("/", (req, res, next) => {
  res.end("DELETE");
  
});

router.put("/", (req, res, next) => {
  res.status(420).json({ message: "Unsupported" });
});

module.exports = router;
