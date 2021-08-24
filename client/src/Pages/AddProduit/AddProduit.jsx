import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddProduit.css";
import { Link } from "react-router-dom"


export default function AddProduit() {
  const [nomProduit, setNomProduit] = useState("");
  const [codeProduit, setCodeProduit] = useState("");
  const [categorieProduit, setCategorieProduit] = useState("");
  const [detailProduit, setDetailProduit] = useState("");
  const [produits, setProduits] = useState([]);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
    // setClick(!click);
  };
  useEffect(() => {
    axios.get("http://localhost:3001/api/produit/get").then((res) => {
      setProduits(res.data);
      console.log("updated");
    });
    // return () => alert("goodbye component");
  }, [click]);
  useEffect(() => { }, [produits]);

  const handleSubmit = (event) => {
    event.preventDefault();
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

  const deleteProduit = (produitId) => {
    axios
      .delete(`http://localhost:3001/api/produit/delete/${produitId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="Produit">
      <h1>Page Produit</h1>
      <form
        className="produit-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
          <option value="logiciel">Logiciel</option>

        </select>
        <label htmlFor="detail-produit">Detail produit</label>
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
        <button onClick={handleClick}>Ajouter Produit</button>
        <Link to="/dashboard" >
          <button>
            Retour
          </button>
        </Link>
      </form>
      <div className="produit-container">
        {produits.map((produit) => (
          <ul className="produit-card" key={produit.IDProduit}>
            <li>{produit.NomProduit}</li>
            <li>{produit.CodeProduit}</li>
            <li>{produit.Categorie}</li>
            <li>{produit.Detail}</li>
            <li className="button-container">
              <button
                className="delete-produit-button"
                onClick={() => {
                  deleteProduit(produit.IDProduit);
                }}
              >
                DELETE
              </button>

              <button className="edit-produit-button">EDIT</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
