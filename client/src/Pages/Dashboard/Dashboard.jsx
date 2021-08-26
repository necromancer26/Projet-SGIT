import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import TableProduit from "../../Components/TableProduit/TableProduit";
import TableSociete from "../../Components/TableSociete/TableSociete";
export default function Dashboard() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/user",
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const logout = () => {
    axios({
      method: "GET",
      url: "http://localhost:3001/logout",
      withCredentials: true,
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    data && (
      <div className="Dashboard">
        <h1>Welcome to the Admin Dashboard {data.username}</h1>
        <div className="dashboard-top-button-container">
          <Link to="/societe">
            <button>Ajouter societe</button>
          </Link>
          <Link to="/produit">Ajouter produit</Link>
          <button onClick={logout}>Logout</button>
        </div>
        <TableSociete />
        <TableProduit />
      </div>
    )
  );
}
