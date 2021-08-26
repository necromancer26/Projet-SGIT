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
  const NomSociete = req.body.NomSociete;
  const Adresse = req.body.Adresse;
  const CodeCNSS = req.body.CodeCNSS;
  const MatriculeFiscal = req.body.MatriculeFiscal;
  const CodeTVA = req.body.CodeTVA;
  const CodeCategorie = req.body.CodeCategorie;
  const NombreEtsSecondaire = req.body.NombreEtsSecondaire;
  const Tel = req.body.Tel;
  const Fax = req.body.Fax;
  const Responsable = req.body.Responsable;
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
    "UPDATE societe SET NomSociete = ? , Adresse = ? , CodeCNSS = ? , MatriculeFiscal = ? , CodeTVA = ? , CodeCategorie = ? , NombreEtsSecondaire = ? , Tel = ? , Fax = ? , Responsable = ? , Mail = ? , TauxCNSSPatronal = ? , TauxCNSSOuvriere = ? , TauxAccidentTravail = ? , TauxTFP = ? , TauxFOPROLOS = ? , AssuranceGroupe = ? , TauxAssGroupePatronal = ? , TauxAssGroupeOuvriere = ? , Banque = ? , RIB = ? WHERE NomSociete = ?";
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
