// Dependencies
var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

// Set up the Express app to handle data parsing
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());

// Require and run controller.js
var controller = require("./controller/controller.js");
app.use("/", controller);

// Temporary solution in place of migrations. In order to keep the data in the database ({ force:false }). 
// And to reload the data ({ force: true }).
db.sequelize.sync({ force:true }).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
  });
});