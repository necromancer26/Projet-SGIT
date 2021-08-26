import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import TableProduit from "../../Components/TableProduit/TableProduit";
import TableSociete from "../../Components/TableSociete/TableSociete";
export default function Dashboard() {
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
      <TableSociete />
      <TableProduit />
    </div>
  );
}
