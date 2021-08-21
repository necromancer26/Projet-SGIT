import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
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
                    DELETE
                  </button>
                  <button>EDIT</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
