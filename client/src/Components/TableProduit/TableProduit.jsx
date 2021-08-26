import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductRow from "../ProductRow/ProductRow";
export default function TableProduit() {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/produit/get")
      .then((response) => {
        setProduits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [produits]);
  return (
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
  );
}
