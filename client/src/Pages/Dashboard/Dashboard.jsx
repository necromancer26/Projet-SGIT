import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import { Link } from "react-router-dom"
export default function Dashboard() {

  const [NomSociete, setNomSociete] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [CodeCNSS, setCodeCNSS] = useState("");
  const [MatriculeFiscal, setMatriculeFiscal] = useState("");
  const [CodeTVA, setCodeTVA] = useState("");
  const [CodeCategorie, setCodeCategorie] = useState("");
  const [NombreEtsSecondaire, setNombreEtsSecondaire] = useState("");
  const [Tel, setTel] = useState("");
  const [Fax, setFax] = useState("");
  const [Responsable, setResponsable] = useState("");
  const [Mail, setMail] = useState("");
  const [TauxCNSSPatronal, setTauxCNSSPatronal] = useState("");
  const [TauxAccidentTravail, setTauxAccidentTravail] = useState("");
  const [TauxCNSSOuvriere, setTauxCNSSOuvriere] = useState("");
  const [TauxTFP, setTauxTFP] = useState("");
  const [TauxFOPROLOS, setTauxFOPROLOS] = useState("");
  const [AssuranceGroupe, setAssuranceGroupe] = useState("");
  const [TauxAssGroupePatronal, setTauxAssGroupePatronal] = useState("");
  const [TauxAssGroupeOuvriere, setTauxAssGroupeOuvriere] = useState("");
  const [Banque, setBanque] = useState("");
  const [RIB, setRIB] = useState("");
  const [societes, setSocietes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/societe/get")
      .then((response) => {
        console.log(response.data);
        setSocietes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deleteSociete = (societeId) => {
    axios
      .delete(`http://localhost:3001/societe/delete/${societeId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const updateSociete = (societeID) => {
    console.log(societeID);
    axios
      .put('http://localhost:3001/societe/update', {
        NomSociete: NomSociete,
        Adresse: Adresse,
        CodeCNSS: CodeCNSS,
        MatriculeFiscal: MatriculeFiscal,
        CodeTVA: CodeTVA,
        CodeCategorie: CodeCategorie,
        NombreEtsSecondaire: NombreEtsSecondaire,
        Tel: Tel,
        Fax: Fax,
        Responsable: Responsable,
        Mail: Mail,
        TauxCNSSPatronal: TauxCNSSPatronal,
        TauxCNSSOuvriere: TauxCNSSOuvriere,
        TauxAccidentTravail: TauxAccidentTravail,
        TauxTFP: TauxTFP,
        TauxFOPROLOS: TauxFOPROLOS,
        AssuranceGroupe: AssuranceGroupe,
        TauxAssGroupePatronal: TauxAssGroupePatronal,
        TauxAssGroupeOuvriere: TauxAssGroupeOuvriere,
        Banque: Banque,
        RIB: RIB,
      })
      .then((res) => { })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Dashboard">
      <h1>Admin Page</h1>
      <table className="table-societe">
        <thead>
          <tr>
            <th>Nom Societe</th>
            <th>Adresse</th>
            <th>Code CNSS</th>
            <th>Matricule Fiscal</th>
            <th>Code TVA</th>
            <th>Code Categorie</th>
            <th>Nombre Ets Secondaire</th>
            <th>Tel</th>
            <th>Fax</th>
            <th>Responsable</th>
            <th>Mail</th>
            <th>TauxCNSSPatronal</th>
            <th>TauxCNSS Ouvrier</th>
            <th>TauxAccidentTravail</th>
            <th>TauxTFP</th>
            <th>TauxFOPROLOS</th>
            <th>AssuranceGroupe</th>
            <th>TauxAssGroupePatronal</th>
            <th>Banque</th>
            <th>RIB</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {societes.map((societe) => (
            <tr key={societe.IDSociete}>
              <td>{societe.NomSociete}</td>
              <td>{societe.Adresse}</td>
              <td>{societe.CodeCNSS}</td>
              <td>{societe.MatriculeFiscal}</td>
              <td>{societe.CodeTVA}</td>
              <td>{societe.CodeCategorie}</td>
              <td>{societe.NombreEtsSecondaire}</td>
              <td>{societe.Tel}</td>
              <td>{societe.Fax}</td>
              <td>{societe.Responsable}</td>
              <td>{societe.Mail}</td>
              <td>{societe.TauxCNSSPatronal}</td>
              <td>{societe.TauxCNSSOuvriere}</td>
              <td>{societe.TauxAccidentTravail}</td>
              <td>{societe.TauxTFP}</td>
              <td>{societe.TauxFOPROLOS}</td>
              <td>{societe.AssuranceGroupe}</td>
              <td>{societe.TauxAssGroupePatronal}</td>
              <td>{societe.Banque}</td>
              <td>{societe.RIB}</td>
              <td>
                <div className="buttons-table">
                  <button
                    onClick={() => {
                      deleteSociete(societe.IDSociete);
                    }}
                  >
                    Supprimer
                  </button>
                  <button
                    onClick={() => {
                      updateSociete(societe.IDSociete);
                    }}
                  >
                    Modifier
                  </button>
                  <Link to="/societe">
                    <button>
                      Ajouter
                    </button>
                  </Link>


                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}
