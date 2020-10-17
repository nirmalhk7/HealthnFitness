var express = require("express");
var router = express.Router();
var DietSchema = require("../models/DietSchema");

router.get("/", (req, res, next) => {
  DietSchema.findOne({userid: req.query.userid})
    .then((res) => res.json(res))
    .catch((err) => res.json({message:err}));
  res.end("GET");
});

router.post("/", (req, res, next) => {
  DietSchema.create(req.body)
    .then((res) => res.status(200).json(res))
    .catch((err) => res.status(420).end(err));
});

router.delete("/", (req, res, next) => {
  res.status(402).end("DELETE");
});
router.put("/", (req, res, next) => {
  // TODO Update Diet entry.
  res.status(402).end("PUT");
});

module.exports = router;
