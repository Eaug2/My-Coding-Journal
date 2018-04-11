// Set up MySQL connection
var mysql = require("mysql");

var connection;

if (process.env.JAWS_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    // port: 3006,
    host: "localhost",
    user: "root",
    password: "",
    database: "achievements_db"
  });
};

var PORT = process.env.PORT || 3000;

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

applicationCache.addEventListener(PORT, function() {
  console.log("App listening on port id: " + PORT);
});

//Export connection for our ORM to use
module.exports = connection;