import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import { Link } from "react-router-dom"
export default function Dashboard() {
  // const [NomProduit] = useState("");
  // const [CodeProduit] = useState("");
  // const [Categorie] = useState("");
  // const [DetailProduit] = useState("");
  const [produit, setProduits] = useState([]);
  const [NomSociete] = useState("");
  const [Adresse] = useState("");
  const [CodeCNSS] = useState("");
  const [MatriculeFiscal] = useState("");
  const [CodeTVA] = useState("");
  const [CodeCategorie] = useState("");
  const [NombreEtsSecondaire] = useState("");
  const [Tel] = useState("");
  const [Fax] = useState("");
  const [Responsable] = useState("");
  const [Mail] = useState("");
  const [TauxCNSSPatronal] = useState("");
  const [TauxAccidentTravail] = useState("");
  const [TauxCNSSOuvriere] = useState("");
  const [TauxTFP] = useState("");
  const [TauxFOPROLOS] = useState("");
  const [AssuranceGroupe] = useState("");
  const [TauxAssGroupePatronal] = useState("");
  const [TauxAssGroupeOuvriere] = useState("");
  const [Banque] = useState("");
  const [RIB] = useState("");
  const [societes, setSocietes] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false)
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
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/produit/get")
      .then((response) => {
        setProduits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/produit/get")
      .then((response) => {
        console.log(response.data);
        setProduits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deleteProduit = (produitID) => {
    axios
      .delete(`http://localhost:3001/api/produit/delete/${produitID}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // const updateProduit = (produitID) => {
  //   console.log(produitID);
  //   axios
  //     .put('http://localhost:3001/api/produit/update', {
  //       NomProduit: NomProduit,
  //       CodeProduit: CodeProduit,
  //       Categorie: Categorie,
  //       DetailProduit: DetailProduit,
  //     })
  //     .then((res) => { })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div className="Dashboard">
      <h1>Admin Page</h1>
      <div className="Dashboard-button">
        <div className="Dashboard-button1">
          <Link to="/societe">
            <button>
              Ajouter societe
            </button>
          </Link>
        </div>
        <div className="Dashboard-button2">
          <Link to="/produit">
            <button>
              Ajouter produit
            </button>
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
              < div className="buttons-table" >
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
              </div>
            </tr>
          ))
          }
        </tbody >
      </table >
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
          {!toggleEdit && produit.map((produit) => (
            <tr key={produit.IDProduit}>
              <td>{produit.CodeProduit}</td>
              <td>{produit.NomProduit}</td>
              <td>{produit.Categorie}</td>
              <td>{produit.Detail}</td>
              <td>
                <div className="buttons-table-produit">
                  <button
                    onClick={() => {
                      deleteProduit(produit.IDProduit);
                    }}
                  >
                    Supprimer
                  </button>
                  <button onClick={() => { setToggleEdit(!toggleEdit) }}>
                    Modifier
                  </button>
                </div>
              </td>
            </tr>)
          )}
          {toggleEdit && produit.map((produit) => (
            <tr key={produit.IDProduit}>
              <td><input type="text"
                id="code-produit"
                name="code" value={produit.CodeProduit} /></td>
              <td><input type="text"
                id="nom-produit"
                name="nom" value={produit.NomProduit} /></td>
              <td>
                <select
                  id="categorie-produit"
                  name="categorie"
                  onChange={(e) => {
                    // setCategorieProduit(e.target.value);
                  }}
                  value={produit.Categorie}
                >
                  <option value="produit.Categorie">{produit.Categorie}</option>
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
                  }}
                  value={produit.Detail}
                ></textarea>
              </td>
              <td>
                <div className="buttons-table-produit">
                  <button
                    onClick={() => {
                      deleteProduit(produit.IDProduit);
                    }}
                  >
                    Supprimer
                  </button>
                  <button onClick={() => { setToggleEdit(!toggleEdit) }}>
                    Modifier
                  </button>
                </div>
              </td>
            </tr>)
          )}
        </tbody>
      </table>
    </div>
  )
};
