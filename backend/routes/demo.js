var express = require("express");
var router = express.Router();
var User = require("../models/UserSchema");

router.get("/", (req, res, next) => {
  res.end("GET");
});

router.post("/", (req, res, next) => {
  res.end("POST");
});
router.delete("/", (req, res, next) => {
  res.end("DELETE");
});
router.put("/", (req, res, next) => {
  res.end("PUT");
});

module.exports = router;
