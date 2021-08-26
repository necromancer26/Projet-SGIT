import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import ProductRow from "../../Components/ProductRow/ProductRow";
import SocieteRow from "../../Components/SocieteRow/SocieteRow";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const [produits, setProduits] = useState([]);
  const [societes, setSocietes] = useState([]);
  // const [toggleEdit, setToggleEdit] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/produit/get")
      .then((response) => {
        setProduits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div className="Dashboard">
      <h1>Admin Page</h1>
      <div className="Dashboard-button">
        <div className="Dashboard-button1">
          <Link to="/societe">
            <button>Ajouter societe</button>
          </Link>
        </div>
        <div className="Dashboard-button2">
          <Link to="/produit">
            <button>Ajouter produit</button>
          </Link>
        </div>
      </div>
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
      <table className="table-societe">
        <thead>
          <tr>
            <th>CodeProduit</th>
            <th>NomProduit</th>
            <th>Categorie</th>
            <th>DetailProduit</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit) => (
            <ProductRow produit={produit} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
