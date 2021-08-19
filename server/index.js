const express = require("express");
const app = express();
const mysql = require("mysql");
var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "CRUDDataBase",
});
app.use(express.json());
db.connect(function (error) {
  if (!!error) {
    console.log(error.message);
  } else {
    console.log("Connected..!");
  }
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM movie_reviews";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.post("/api/insert", (req, res) => {
  //   console.log(req.body);
  //   console.log(req.body.movieName);
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {});
});
