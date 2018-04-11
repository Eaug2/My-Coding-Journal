var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var controller = require("./controller/controller.js");
app.use(controller);

db.sequelize.sync({ force:false }).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
  });
});