import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSgit } from "../../SGITlogo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        {/* <h2>Acceuil</h2> */}
        <Link to="/">
          <LogoSgit />
        </Link>
      </div>
      <div className="footer-section">
        <h2>Plus d'informations</h2>
        <li>
          <Link to="/logiciel">Logiciel</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>{" "}
        </li>
      </div>
      <div className="footer-section">
        <h2>Contacter nous</h2>
        <ul className="list-footer">
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <span className="Adresse">
              {" "}
              Résidence el HANA,Immeuble Nour 3,El Menzah 7{" "}
            </span>
          </li>
          <li>
            {" "}
            <i class="fas fa-fax"> +216 70814414</i>
          </li>
          <li>
            <i class="fas fa-phone-volume"> +216 92806064 </i>
          </li>
          <li>
            <i class="fas fa-envelope"> sgit@gmail.com</i>
          </li>
        </ul>
      </div>
    </footer>
  );
}
