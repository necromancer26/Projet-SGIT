import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./Login.css";

export default function Register() {
  const [pseudoUtilisateur, setPseudoUtilisateur] = useState("");
  const [mdpUtilisateur, setMdpUtilisateur] = useState("");
  const [data, setData] = useState(null);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    //
    axios
      .post(
        "http://localhost:3001/login",
        {
          username: pseudoUtilisateur,
          password: mdpUtilisateur,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getUser = () => {
    axios
      .get("http://localhost:3001/user", {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
        if (res.data) {
        }
      })
      .catch((e) => {
        console.log(e);
      });
    history.push("/dashboard");
  };
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
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
      <div>
        <h1>Log Out</h1>
        <button onClick={logout}>Submit</button>
      </div>
    </div>
  );
}
