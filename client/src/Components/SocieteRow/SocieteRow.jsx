import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SocieteRow.css";

export default function ProductRow(props) {
  const [societeEdit, setSocieteEdit] = useState(false);
  const [idSociete, setIdSociete] = useState("");
  const [nomSociete, setNomSociete] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codeCNSS, setCodeCNSS] = useState("");
  const [matriculeFiscal, setMatriculeFiscal] = useState("");
  const [codeTVA, setCodeTVA] = useState("");
  const [codeCategorie, setCodeCategorie] = useState("");
  const [nombreEtsSecondaires, setNombreEtsSecondaires] = useState("");
  const [tel, setTel] = useState("");
  const [fax, setFax] = useState("");
  const [responsable, setResponsable] = useState("");
  const [mail, setMail] = useState("");
  const [tauxCNSSPatronal, setTauxCNSSPatronal] = useState("");
  const [tauxCNSSOuvriere, setTauxCNSSOuvriere] = useState("");
  const [tauxAccidentTravail, setTauxAccidentTravail] = useState("");
  const [tauxTFP, setTauxTFP] = useState("");
  const [tauxFOPROLOS, setTauxFOPROLOS] = useState("");
  const [assuranceGroupe, setAssuranceGroupe] = useState("");
  const [tauxAssGroupePatronal, setTauxAssGroupePatronal] = useState("");
  const [banque, setBanque] = useState("");
  const [rib, setRib] = useState("");
  const {
    IDSociete,
    NomSociete,
    Adresse,
    CodeCNSS,
    MatriculeFiscal,
    CodeTVA,
    CodeCategorie,
    NombreEtsSecondaire,
    Tel,
    Fax,
    Responsable,
    Mail,
    TauxCNSSPatronal,
    TauxCNSSOuvriere,
    TauxAccidentTravail,
    TauxTFP,
    TauxFOPROLOS,
    AssuranceGroupe,
    TauxAssGroupePatronal,
    Banque,
    RIB,
  } = {
    ...props.societe,
  };
  useEffect(() => {
    setIdSociete(IDSociete);
    setNomSociete(NomSociete);
    setAdresse(Adresse);
    setCodeCNSS(CodeCNSS);
    setMatriculeFiscal(MatriculeFiscal);
    setCodeTVA(CodeTVA);
    setCodeCategorie(CodeCategorie);
    setNombreEtsSecondaires(NombreEtsSecondaire);
    setTel(Tel);
    setFax(Fax);
    setResponsable(Responsable);
    setMail(Mail);
    setTauxCNSSPatronal(TauxCNSSPatronal);
    setTauxCNSSOuvriere(TauxCNSSOuvriere);
    setTauxAccidentTravail(TauxAccidentTravail);
    setTauxTFP(TauxTFP);
    setTauxFOPROLOS(TauxFOPROLOS);
    setAssuranceGroupe(AssuranceGroupe);
    setTauxAssGroupePatronal(TauxAssGroupePatronal);
    setBanque(Banque);
    setRib(RIB);
  }, [
    IDSociete,
    NomSociete,
    Adresse,
    CodeCNSS,
    MatriculeFiscal,
    CodeTVA,
    CodeCategorie,
    NombreEtsSecondaire,
    Tel,
    Fax,
    Responsable,
    Mail,
    TauxCNSSPatronal,
    TauxCNSSOuvriere,
    TauxAccidentTravail,
    TauxTFP,
    TauxFOPROLOS,
    AssuranceGroupe,
    TauxAssGroupePatronal,
    Banque,
    RIB,
  ]);
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
    setIdSociete(societeID);
    axios
      .put("http://localhost:3001/societe/update", {
        NomSociete: nomSociete,
        Adresse: adresse,
        CodeCNSS: codeCNSS,
        MatriculeFiscal: matriculeFiscal,
        CodeTVA: codeTVA,
        CodeCategorie: codeCategorie,
        NombreEtsSecondaire: nombreEtsSecondaires,
        Tel: tel,
        Fax: fax,
        Responsable: responsable,
        Mail: mail,
        TauxCNSSPatronal: tauxCNSSPatronal,
        TauxCNSSOuvriere: tauxCNSSOuvriere,
        TauxAccidentTravail: tauxAccidentTravail,
        TauxTFP: tauxTFP,
        TauxFOPROLOS: tauxFOPROLOS,
        AssuranceGroupe: assuranceGroupe,
        TauxAssGroupePatronal: tauxAssGroupePatronal,
        Banque: banque,
        RIB: rib,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const normalRender = () => (
    <tr key={idSociete}>
      <td>{NomSociete}</td>
      <td>{Adresse}</td>
      <td>{CodeCNSS}</td>
      <td>{MatriculeFiscal}</td>
      <td>{CodeTVA}</td>
      <td>{CodeCategorie}</td>
      <td>{nombreEtsSecondaires}</td>
      <td>{Tel}</td>
      <td>{Fax}</td>
      <td>{Responsable}</td>
      <td>{Mail}</td>
      <td>{TauxCNSSPatronal}</td>
      <td>{TauxCNSSOuvriere}</td>
      <td>{TauxAccidentTravail}</td>
      <td>{TauxTFP}</td>
      <td>{TauxFOPROLOS}</td>
      <td>{AssuranceGroupe}</td>
      <td>{TauxAssGroupePatronal}</td>
      <td>{Banque}</td>
      <td>{RIB}</td>
      <td>
        <div className="buttons-table-produit">
          <button
            onClick={() => {
              deleteSociete(IDSociete);
            }}
          >
            Supprimer
          </button>
          <button
            onClick={() => {
              setSocieteEdit(true);
            }}
          >
            Modifier
          </button>
        </div>
      </td>
    </tr>
  );
  const editRender = () => (
    <tr className="societe-row-edit">
      <td>
        <input
          value={nomSociete}
          onChange={(e) => {
            setNomSociete(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={adresse}
          onChange={(e) => {
            setAdresse(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={codeCNSS}
          onChange={(e) => {
            setCodeCNSS(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={matriculeFiscal}
          onChange={(e) => {
            setMatriculeFiscal(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={codeTVA}
          onChange={(e) => {
            setCodeTVA(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={codeCategorie}
          onChange={(e) => {
            setCodeCategorie(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={nombreEtsSecondaires}
          onChange={(e) => {
            setNombreEtsSecondaires(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={fax}
          onChange={(e) => {
            setFax(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={responsable}
          onChange={(e) => {
            setResponsable(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
          type="mail"
        />
      </td>
      <td>
        <input
          value={tauxCNSSPatronal}
          onChange={(e) => {
            setTauxCNSSPatronal(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={tauxCNSSOuvriere}
          onChange={(e) => {
            setTauxCNSSOuvriere(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={tauxAccidentTravail}
          onChange={(e) => {
            setTauxAccidentTravail(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={tauxTFP}
          onChange={(e) => {
            setTauxTFP(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={tauxFOPROLOS}
          onChange={(e) => {
            setTauxTFP(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          value={assuranceGroupe}
          onChange={(e) => {
            setAssuranceGroupe(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={tauxAssGroupePatronal}
          onChange={(e) => {
            setTauxAssGroupePatronal(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={banque}
          onChange={(e) => {
            setBanque(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <input
          value={rib}
          onChange={(e) => {
            setRib(e.target.value);
          }}
          type="text"
        />
      </td>
      <td>
        <div className="buttons-table-produit">
          <button
            onClick={() => {
              setSocieteEdit(false);
            }}
          >
            Annuler
          </button>
          <button
            onClick={() => {
              setSocieteEdit(false);
              updateSociete(IDSociete);
            }}
          >
            Modifier
          </button>
        </div>
      </td>
    </tr>
  );
  return societeEdit ? editRender() : normalRender();
}
