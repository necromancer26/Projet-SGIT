const mysql = require("mysql");

module.exports = db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "sgit",
});