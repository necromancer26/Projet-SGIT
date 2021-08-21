import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [pseudoUtilisateur, setPseudoUtilisateur] = useState("");
  const [mdpUtilisateur, setMdpUtilisateur] = useState("");
  const [mdpConfirm, setMdpConfirm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        nomUtilisateur: nomUtilisateur,
        pseudoUtilisateur: pseudoUtilisateur,
        mdpUtilisateur: mdpUtilisateur,
        mdpConfirm: mdpConfirm,
      })
      .then(() => {
        alert("success insert");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="Register">
      <h1>Register Page</h1>
      <form
        className="register-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="pseudo-utilisateur">Veilliez saisir un Pseudo</label>
        <input
          type="text"
          name="pseudo"
          id="pseudo-utilisateur"
          onChange={(e) => {
            setPseudoUtilisateur(e.target.value);
          }}
        />
        <label htmlFor="nom-utilisateur">Veuillez saisir votre nom</label>
        <input
          type="text"
          name="nom"
          id="nom-utilisateur"
          onChange={(e) => {
            setNomUtilisateur(e.target.value);
          }}
        />
        <label htmlFor="password-utilisateur">
          Veuillez saisir le mot de passe
        </label>
        <input
          type="password"
          name="password"
          id="password-utilisateur"
          onChange={(e) => {
            setMdpUtilisateur(e.target.value);
          }}
        />
        <label htmlFor="password-confirmation">Resaisir le mot de passe </label>
        <input
          type="password"
          name="password"
          id="password-confirmation"
          onChange={(e) => {
            setMdpConfirm(e.target.value);
          }}
        />
        <div className="button-container">
          <button>Submit</button>
          <input type="reset" value="Cancel" className="reset-button" />
        </div>
      </form>
    </div>
  );
}
