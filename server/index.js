const express = require("express");
const app = express();
const mysql = require("mysql");
var cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
app.use(cors()); // Use this after the variable declaration

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "sgit",
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({ secret: "secretcode", resave: true, saveUninitialized: true })
);
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

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

/* Backend Routes */

app.post("/register", (req, res) => {
  const { nomUtilisateur, pseudoUtilisateur, mdpUtilisateur, mdpConfirm } =
    req.body;
  // mdpUtilisateur === mdpConfirm ? console.log("true") : console.log("error");
  const sqlInsert =
    "INSERT INTO utilisateur (NomUtilisateur,PseudoUtilisateur,MotDePasse) VALUES (?,?,?)";
  db.query(
    sqlInsert,
    [nomUtilisateur, pseudoUtilisateur, mdpUtilisateur],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
app.post("/login", (req, res) => {
  console.log(req.body);
});

app.get("/api/produit/get", (req, res) => {
  const sqlSelect = "SELECT * FROM produit";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.delete("/api/produit/delete/:idProduit", (req, res) => {
  const idProduit = req.params.idProduit;
  const sqlDelete = "DELETE FROM produit  WHERE IDProduit = ?";
  db.query(sqlDelete, idProduit, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});
app.post("/api/produit/insert", (req, res) => {
  const { nomProduit, codeProduit, categorieProduit, detailProduit } = req.body;
  const sqlInsert =
    "INSERT INTO produit (CodeProduit,NomProduit,Categorie,Detail) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [codeProduit, nomProduit, categorieProduit, detailProduit],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
app.get("/societe/get", (req, res) => {
  const sqlSelect = "SELECT * FROM societe";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.post("/societe/insert", (req, res) => {
  const {
    NomSociete,
    Adresse,
    CodeCNSS,
    MatriculeFiscal,
    CodeTVA,
    CodeCategorie,
    NombreEtsSecondaire,
    Tel,
    Fax,
    Responsable,
    Mail,
    TauxCNSSPatronal,
    TauxCNSSOuvriere,
    TauxAccidentTravail,
    TauxTFP,
    TauxFOPROLOS,
    AssuranceGroupe,
    TauxAssGroupePatronal,
    TauxAssGroupeOuvriere,
    Banque,
    RIB,
  } = req.body;
  const sqlInsert =
    "INSERT INTO societe (NomSociete, Adresse, CodeCNSS, MatriculeFiscal, CodeTVA, CodeCategorie, NombreEtsSecondaire, Tel, Fax, Responsable, Mail, TauxCNSSPatronal, TauxCNSSOuvriere, TauxAccidentTravail, TauxTFP, TauxFOPROLOS, AssuranceGroupe, TauxAssGroupePatronal, TauxAssGroupeOuvriere, Banque, RIB) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [
      NomSociete,
      Adresse,
      CodeCNSS,
      MatriculeFiscal,
      CodeTVA,
      CodeCategorie,
      NombreEtsSecondaire,
      Tel,
      Fax,
      Responsable,
      Mail,
      TauxCNSSPatronal,
      TauxCNSSOuvriere,
      TauxAccidentTravail,
      TauxTFP,
      TauxFOPROLOS,
      AssuranceGroupe,
      TauxAssGroupePatronal,
      TauxAssGroupeOuvriere,
      Banque,
      RIB,
    ],
    (err, result) => {
      if (err) console.log(err);
    }
  );
});
app.delete("/societe/delete/:IDSociete", (req, res) => {
  const IDSociete = req.params.IDSociete;
  const sqlDelete = "DELETE FROM societe  WHERE IDSociete = ?";
  db.query(sqlDelete, IDSociete, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});
app.put("/societe/update", (req, res) => {
  console.log("updating");
  const NomSociete = req.body.NomSociete;
  const Adresse = req.body.Adresse;
  const CodeCNSS = req.body.CodeCNSS;
  const MatriculeFiscal = req.body.MatriculeFiscal;
  const CodeTVA = req.body.CodeTVA;
  const CodeCategorie = req.body.CodeCategorie;
  const NombreEtsSecondaire = req.body.NombreEtsSecondaire;
  const Tel = req.body.Tel;
  const Fax = req.body.Fax;
  const Responsable = req.body.Responsable
  const Mail = req.body.Mail;
  const TauxCNSSPatronal = req.body.TauxCNSSPatronal;
  const TauxCNSSOuvriere = req.body.TauxCNSSOuvriere;
  const TauxAccidentTravail = req.body.TauxAccidentTravail;
  const TauxTFP = req.body.TauxTFP;
  const TauxFOPROLOS = req.body.TauxFOPROLOS;
  const AssuranceGroupe = req.body.AssuranceGroupe;
  const TauxAssGroupePatronal = req.body.TauxAssGroupePatronal;
  const TauxAssGroupeOuvriere = req.body.TauxAssGroupeOuvriere;
  const Banque = req.body.Banque;
  const RIB = req.body.RIB;

  const sqlUpdate =
    "UPDATE societe SET NomSociete, Adresse, CodeCNSS, MatriculeFiscal, CodeTVA, CodeCategorie, NombreEtsSecondaire, Tel, Fax, Responsable, Mail, TauxCNSSPatronal, TauxCNSSOuvriere, TauxAccidentTravail, TauxTFP, TauxFOPROLOS, AssuranceGroupe, TauxAssGroupePatronal, TauxAssGroupeOuvriere, Banque, RIB = ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NomSociete = ?";
  db.query(sqlUpdate, [NomSociete, Adresse, CodeCNSS, MatriculeFiscal, CodeTVA, CodeCategorie, NombreEtsSecondaire, Tel, Fax, Responsable, Mail, TauxCNSSPatronal, TauxCNSSOuvriere, TauxAccidentTravail, TauxTFP, TauxFOPROLOS, AssuranceGroupe, TauxAssGroupePatronal, TauxAssGroupeOuvriere, Banque, RIB, NomSociete], (err, result) => {
    if (err) console.log(err);
  });
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
