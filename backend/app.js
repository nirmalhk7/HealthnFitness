var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
 



const mongoose = require("mongoose");
const expressjwt = require("express-jwt");
const jwt = require("express-jwt");


mongoose.set("useCreateIndex", true);
const url = "mongodb://localhost:19000/hackccelerate";
// mongoose.connection.db.dropCollection('hackccelerate',(err,res)=>console.log(err,res))
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

connect.then(
  (db) => {
    console.log("Connected successfully to Mongoose!");
  },
  (err) => {
    console.error("Mongoose",err);
  }
);

const jwtCheck = expressjwt({
  secret: "hackccelerate",
  algorithms: ["HS256"],
});

var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/demo'));
app.use('/profile', require('./routes/profile'))
app.use('/diet',require('./routes/diet'));
app.use("/pros",require('./routes/professionals'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
