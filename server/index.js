const express = require("express");
const app = express();
const mysql = require("mysql");
var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "sgit",
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
app.get("/api/produit/get", (req, res) => {
  const sqlSelect = "SELECT * FROM produit";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.post("/api/produit/insert", (req, res) => {
  // const nomProduit = req.body.nomProduit;
  // const codeProduit = req.body.codeProduit;
  // const categorieProduit = req.body.categorieProduit;
  // const detailProduit = req.body.detailProduit;
  const { nomProduit, codeProduit, categorieProduit, detailProduit } = req.body;
  const sqlInsert =
<<<<<<< HEAD
    "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => { });
});
app.delete("/api/delete", (req, res) => {
  console.log("all");
  const sqlDelete = "DELETE FROM movie_reviews ";
  db.query(sqlDelete, (err, result) => {
    if (err) {
      console.log(err);
=======
    "INSERT INTO produit (CodeProduit,NomProduit,Categorie,Detail) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [codeProduit, nomProduit, categorieProduit, detailProduit],
    (err, result) => {
      if (err) {
        console.log(err);
      }
>>>>>>> 40371e08c946f633ff7c1a3dfd45b32138408983
    }
  );
});
/*
INSERT INTO produit (CodeProduit,NomProduit,Categorie,Detail) VALUES (?,?,?,?)
*/
// app.get("/api/get", (req, res) => {
//   const sqlSelect = "SELECT * FROM movie_reviews";
//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// });
// app.post("/api/insert", (req, res) => {
//   const movieName = req.body.movieName;
//   const movieReview = req.body.movieReview;
//   const sqlInsert =
//     "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)";
//   db.query(sqlInsert, [movieName, movieReview], (err, result) => {});
// });
// app.delete("/api/delete", (req, res) => {
//   const sqlDelete = "DELETE FROM movie_reviews ";
//   db.query(sqlDelete, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });
// app.delete("/api/delete/:movieName", (req, res) => {
//   const name = req.params.movieName;
//   const sqlDelete = "DELETE FROM movie_reviews  WHERE movieName = ?";
//   db.query(sqlDelete, name, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });
// app.put("/api/update", (req, res) => {
//   console.log("updating");
//   const review = req.body.movieReview;
//   const name = req.body.movieName;

//   console.log(name);
//   console.log(review);
//   const sqlUpdate =
//     "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";
//   db.query(sqlUpdate, [review, name], (err, result) => {
//     if (err) console.log(err);
//   });
// });
