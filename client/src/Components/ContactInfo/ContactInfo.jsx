import React from "react";

import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="ContactInfo">
      <div className="contact-section-head">
        <h1>Collaborer avec SGIT</h1>
        <p>
          SGIT, société de service et solution, cherche à mettre les compétences
          et les connaissances de ces collaborateurs afin d'atteindre un
          objectif commun.
        </p>
      </div>

      <div className="contact-section-body">
        <h1>Contact SGIT</h1>
        <div className="grid-container">
          <i class="fas fa-map-marker-alt"></i>
          <p>Résidence el HANA,Immeuble Nour 3,El Menzah 7</p>
          <i class="fas fa-fax"> </i>
          <p>+216 70 814 414</p>
          <i class="fas fa-phone-volume"> </i>
          <p>+216 92806064</p>
          <i class="fas fa-envelope"></i>
          <p>sgit@gmail.com </p>
        </div>
      </div>
      <div className="reseaux-sociaux">
        <h1>Réseaux sociaux : </h1>
        <div className="social-media-grid">
          <i class="fab fa-facebook"></i>
          <p>Facebook</p>
          <i class="fab fa-twitter"></i>
          <p>Twitter</p>
        </div>
      </div>

      <div className="contact-section-foot">
        <h1> Horaire de travail </h1>
        <div className="horraire-section">
          <p>Lundi - Vendredi: 8am à 6pm </p>
          <p>Samedi: 9am à 2pm </p>
          <p>Dimanche: Fermé </p>
        </div>
      </div>
    </div>
  );
}
