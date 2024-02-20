// Import library
const mysql = require("mysql2");
// create a new MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "147852369",
  database: "cleanerino",
});
// connect to the MySQL database
db.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});
// close the MySQL connection

module.exports = db;
