import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Register() {
  const [pseudoUtilisateur, setPseudoUtilisateur] = useState("");
  const [mdpUtilisateur, setMdpUtilisateur] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        pseudoUtilisateur: pseudoUtilisateur,
        mdpUtilisateur: mdpUtilisateur,
      })
      .then(() => {
        alert("success login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="Register">
      <h1>Login Page</h1>
      <form
        className="register-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="pseudo-utilisateur-login">
          Veilliez saisir un Pseudo
        </label>
        <input
          type="text"
          name="pseudo"
          id="pseudo-utilisateur-login"
          onChange={(e) => {
            setPseudoUtilisateur(e.target.value);
          }}
        />
        <label htmlFor="password-utilisateur-login">
          Veuillez saisir le mot de passe
        </label>
        <input
          type="password"
          name="password"
          id="password-utilisateur-login"
          onChange={(e) => {
            setMdpUtilisateur(e.target.value);
          }}
        />
        <div className="button-container-login">
          <button>Submit</button>
          <input type="reset" value="Cancel" className="reset-button" />
        </div>
      </form>
    </div>
  );
}
