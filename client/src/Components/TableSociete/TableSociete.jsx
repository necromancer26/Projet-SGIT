import React, { useEffect, useState } from "react";
import axios from "axios";
import SocieteRow from "../SocieteRow/SocieteRow";

export default function TableSociete() {
  const [societes, setSocietes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/societe/get")
      .then((response) => {
        setSocietes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
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
          <SocieteRow societe={societe} />
        ))}
      </tbody>
    </table>
  );
}
