import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductRow({ produit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nomProduit, setNomProduit] = useState("");
  const [codeProduit, setCodeProduit] = useState("");
  const [categorie, setCategorie] = useState("");
  const [detail, setDetail] = useState("");
  const [idProduit, setIdProduit] = useState("");
  const { IDProduit, CodeProduit, NomProduit, Categorie, Detail } = produit;
  useEffect(() => {
    setIdProduit(IDProduit);
    setCodeProduit(CodeProduit);
    setCategorie(Categorie);
    setDetail(Detail);
    setNomProduit(NomProduit);
  }, [IDProduit, CodeProduit, NomProduit, Categorie, Detail]);
  const deleteProduit = (produitID) => {
    axios
      .delete(`http://localhost:3001/produit/delete/${produitID}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(produitID);
  };
  const updateProduit = (produitID) => {
    console.log("params", nomProduit, codeProduit, categorie, detail);
    setIdProduit(produitID);
    axios
      .put("http://localhost:3001/produit/update", {
        NomProduit: nomProduit,
        CodeProduit: codeProduit,
        Categorie: categorie,
        DetailProduit: detail,
        IDProduit: idProduit,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const normalRender = () => (
    <tr key={IDProduit}>
      <td>{CodeProduit}</td>
      <td>{NomProduit}</td>
      <td>{Categorie}</td>
      <td>{Detail}</td>
      <td>
        <div className="buttons-table-produit">
          <button
            onClick={() => {
              deleteProduit(IDProduit);
            }}
          >
            Supprimer
          </button>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Modifier
          </button>
        </div>
      </td>
    </tr>
  );
  const editRender = () => (
    <tr>
      <td>
        <input
          type="text"
          onChange={(e) => {
            setCodeProduit(e.target.value);
          }}
          id="code-produit"
          name="code"
          value={codeProduit}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => {
            setNomProduit(e.target.value);
          }}
          id="nom-produit"
          name="nom"
          value={nomProduit}
        />
      </td>
      <td>
        <select
          id="categorie-produit"
          name="categorie"
          onChange={(e) => {
            setCategorie(e.target.value);
          }}
          value={categorie}
        >
          <option value="produit.Categorie">{Categorie}</option>
          <option value="logiciel">Logiciel</option>
        </select>
      </td>
      <td>
        <textarea
          id="detail-produit"
          name="detail"
          rows="5"
          cols="33"
          placeholder="..."
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          value={detail}
        ></textarea>
      </td>
      <td>
        <div className="buttons-table-produit">
          <button
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Annuler
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              updateProduit(IDProduit);
            }}
          >
            Modifier
          </button>
        </div>
      </td>
    </tr>
  );
  return isEditing ? editRender() : normalRender();
}
