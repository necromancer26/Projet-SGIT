/*----------------------------Imports--------------------------------------*/
var express = require("express");
var router = express.Router();
var db = require("../Config/dbConfig");
/*----------------------------Middleware(none)----------------------------*/
/*----------------------------Routes--------------------------------------*/
router.get("/get", (req, res) => {
  const sqlSelect = "SELECT * FROM produit";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
router.delete("/delete/:idProduit", (req, res) => {
  const idProduit = req.params.idProduit;
  const sqlDelete = "DELETE FROM produit  WHERE IDProduit = ?";
  db.query(sqlDelete, idProduit, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});
router.post("/insert", (req, res) => {
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
router.put("/update", (req, res) => {
  const CodeProduit = req.body.CodeProduit;
  const NomProduit = req.body.NomProduit;
  const Categorie = req.body.Categorie;
  const DetailProduit = req.body.DetailProduit;
  const idProduit = req.body.IDProduit;
  const sqlUpdate =
    "UPDATE produit SET CodeProduit = ?, NomProduit = ?, Categorie = ?, Detail = ?  WHERE IDProduit = ? ";
  db.query(
    sqlUpdate,
    [CodeProduit, NomProduit, Categorie, DetailProduit, idProduit],
    (err, result) => {
      if (err) console.log(err);
      if (result) res.send(result);
    }
  );
});
module.exports = router;
