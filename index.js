const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require("mongoose"),
  User = require("./models/user.model.js"), //created model loading here
  Exam = require("./models/exam.model.js")
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/shampoo");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "*");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

require("./routes/user.route.js")(app); //importing route
require("./routes/exam.route.js")(app);

app.listen(port);

console.log("user list RESTful API server started on: " + port);
