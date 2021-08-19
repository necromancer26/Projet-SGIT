import React from "react";
import "./EnCour.css";
import FoundersCard from "../../Components/FoundersCard/FoundersCard";
// import { Link } from "react-router-dom";

export default function EnCour() {
  return (
    <div className="Logiciel-en-cour">
      <div className="page-top">
        <h1>Logiciels | SGIT Solution de Gestion Intégrée de Tunisie </h1>
      </div>

      <div className="logiciel-container">
        <FoundersCard
          nom="Logiciel d’audit assurant toute la mission d’audit et du commissariat aux comptes"
          imageLink="https://www.avenir-numerique.fr/Portals/14/xBlog/uploads/2020/6/2/img_site-min.png"
        />

        <FoundersCard
          nom="Logiciel de gestion de groupe et d’établissement des EF consolidés"
          imageLink="https://www.avenir-numerique.fr/Portals/14/xBlog/uploads/2020/6/2/img_site-min.png"
        />

        <FoundersCard
          nom="Logiciel d’audit interne et/ou de contrôle de gestion"
          imageLink="https://www.avenir-numerique.fr/Portals/14/xBlog/uploads/2020/6/2/img_site-min.png"
        />

        <FoundersCard
          nom="Logiciel de gestion de cabinet d’expert comptable"
          imageLink="https://www.avenir-numerique.fr/Portals/14/xBlog/uploads/2020/6/2/img_site-min.png"
        />

        <FoundersCard
          nom="Logiciel de suivi de traces d’exécution sur réseau informatique"
          imageLink="https://www.avenir-numerique.fr/Portals/14/xBlog/uploads/2020/6/2/img_site-min.png"
        />
      </div>
    </div>
  );
}
