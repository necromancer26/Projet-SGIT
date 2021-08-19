import React from "react";
import "./logiciel.css";
import FoundersCard from "../../Components/FoundersCard/FoundersCard";
// import { Link } from "react-router-dom";

export default function Logiciel() {
  return (
    <div className="Logiciel">
      <div className="page-top">
        <h1>Logiciels | SGIT Solution de Gestion Intégrée de Tunisie </h1>
      </div>

      <div className="logiciel-container">
        <FoundersCard
          nom="Logiciel d’établissement des Etats financiers "
          imageLink="https://www.avenir-numerique.fr/Portals/14/xBlog/uploads/2020/6/2/img_site-min.png"
          description={() => (<p1>Ce logiciel peut être être utilisés pour les missions suivantes :<span className="fonctionalite">Principales fonctionnalités</span><ul>

            <li> • Les comptables et les Experts comptables</li>
            <li> • Les missions d’audit</li>
            <li> • Les sociétés désirant de simplifier l’établissement des EF ainsi que celle désirant établir des EF plus qu’une seule fois dans l’année et pour être précis (suite à quelques cliques).</li> </ul></p1>)}
        />
        <FoundersCard
          nom="Logiciel de gestion de taches et de collaborateurs"
          imageLink="https://www.avenir-numerique.fr/Portals/14/xBlog/uploads/2020/6/2/img_site-min.png"
          description={() => (<p1>Assurer la gestion des collaborateurs et des tâches au quotidien. :<span className="fonctionalite">Principales fonctionnalités</span><ul>

            <li> • Gestion de tâches personnelles et des collaborateurs.</li>
            <li> • Gestion de messagerie interne au sein du cabinet</li>
            <li> •	Administration et gestion des collaborateurs affectation, suivi et analyse.</li> </ul></p1>)}
        />

      </div>
    </div >
  );
}
