/*----------------------------Imports--------------------------------------*/
var express = require("express");
var router = express.Router();
var db = require("../Config/dbConfig");
/*----------------------------Middleware(none)----------------------------*/
/*----------------------------Routes--------------------------------------*/
router.get("/get", (req, res) => {
  const sqlSelect = "SELECT * FROM societe";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
router.post("/insert", (req, res) => {
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
  const sqlInsert = `INSERT INTO societe 
  (NomSociete, Adresse, CodeCNSS, MatriculeFiscal, CodeTVA, CodeCategorie, 
    NombreEtsSecondaire, Tel, Fax, Responsable, Mail, TauxCNSSPatronal, 
    TauxCNSSOuvriere, TauxAccidentTravail, TauxTFP, TauxFOPROLOS, AssuranceGroupe, 
    TauxAssGroupePatronal, TauxAssGroupeOuvriere, Banque, RIB) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
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
//Delete Route
router.delete("/delete/:IDSociete", (req, res) => {
  const IDSociete = req.params.IDSociete;
  const sqlDelete = "DELETE FROM societe  WHERE IDSociete = ?";
  db.query(sqlDelete, IDSociete, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});
router.put("/update", (req, res) => {
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

  const sqlUpdate = `UPDATE societe 
  SET NomSociete = ? , 
  Adresse = ? , 
  CodeCNSS = ? , 
  MatriculeFiscal = ? , 
  CodeTVA = ? , 
  CodeCategorie = ? , 
  NombreEtsSecondaire = ? , 
  Tel = ? , 
  Fax = ? , 
  Responsable = ? , 
  Mail = ? , 
  TauxCNSSPatronal = ? , 
  TauxCNSSOuvriere = ? , 
  TauxAccidentTravail = ? , 
  TauxTFP = ? , 
  TauxFOPROLOS = ? , 
  AssuranceGroupe = ? , 
  TauxAssGroupePatronal = ? , 
  TauxAssGroupeOuvriere = ? , 
  Banque = ? , 
  RIB = ? 
  WHERE NomSociete = ?`;
  db.query(
    sqlUpdate,
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
      NomSociete,
    ],
    (err, result) => {
      if (err) console.log(err);
    }
  );
});

module.exports = router;
