import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddProduit.css";

export default function AddProduit() {
  const [nomProduit, setNomProduit] = useState("");
  const [codeProduit, setCodeProduit] = useState("");
  const [categorieProduit, setCategorieProduit] = useState("");
  const [detailProduit, setDetailProduit] = useState("");
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/produit/get").then((res) => {
      setProduits(res.data);
    });
  }, []);
  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/api/produit/insert", {
        nomProduit: nomProduit,
        codeProduit: codeProduit,
        categorieProduit: categorieProduit,
        detailProduit: detailProduit,
      })
      .then(() => {
        alert("success insert");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="Produit">
      <h1>Page Produit</h1>
      <form className="produit-form" onSubmit={handleSubmit}>
        <label htmlFor="nom-produit">Nom Produit</label>
        <input
          type="text"
          id="nom-produit"
          name="nom"
          onChange={(e) => {
            setNomProduit(e.target.value);
          }}
          value={nomProduit}
        />
        <label htmlFor="code-produit">Code</label>
        <input
          type="text"
          id="code-produit"
          name="code"
          onChange={(e) => {
            setCodeProduit(e.target.value);
          }}
          value={codeProduit}
        />
        <label htmlFor="categorie-produit">Categorie Produit</label>
        <select
          id="categorie-produit"
          name="categorie"
          onChange={(e) => {
            setCategorieProduit(e.target.value);
          }}
          value={categorieProduit}
        >
          <option value="">--Veuillez choisir une option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <label htmlFor="detail-produit">Tell us your story:</label>
        <textarea
          id="detail-produit"
          name="detail"
          rows="5"
          cols="33"
          placeholder="..."
          onChange={(e) => {
            setDetailProduit(e.target.value);
          }}
          value={detailProduit}
        ></textarea>
        <button>Ajouter Produit</button>
      </form>
      {produits.map((produit) => (
        <div>
          <h2>{produit.NomProduit}</h2>
          <h3>{produit.CodeProduit}</h3>
          <h2>{produit.Categorie}</h2>
          <h2>{produit.Detail}</h2>
        </div>
      ))}
    </div>
  );
}
