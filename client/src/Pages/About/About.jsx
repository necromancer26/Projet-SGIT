import React from "react";
import "./About.css";
import CustomCarousel from "../../Components/CustomCarousel/CustomCarousel";
import FoundersCard from "../../Components/FoundersCard/FoundersCard";
export default function About() {
  return (
    <div className="About">
      <div className="page-top">
        <h1>
          A propos de nous | SGIT Solution de Gestion Intégrée de Tunisie{" "}
        </h1>
      </div>
      <h2>Présentation de la société : </h2>
      <div className="presentation-section">
        <p>
          La société
          <span className="SGIT-desc">
            Solutions de Gestion Intégrée de Tunisie (SGIT)
          </span>
          est une société anonyme constituée en 2009 au capital de 140000 dt.
          Elle est
          <span className="SGIT">
            spécialisée dans le développement et l’intégration des solutions
            informatiques de gestion
          </span>
          . Notre société est
          <span className="SGIT">
            cofinancée par la société "Internationale SICAR" et par le fonds
            "RITI"
          </span>
          (Régime d’incitation à l’Innovation dans le domaine de la Technologie
          de l’Information) et ce,{" "}
          <span className="SGIT">
            suite à des évaluations multidisciplinaires{" "}
          </span>
          auxquelles ont fait l’objet nos solutions informatiques,{" "}
          <span className="SGIT">au niveau de la SICAR </span>et{" "}
          <span className="SGIT">
            au niveau d’une commission composée de représentant de sept
            ministères
          </span>{" "}
          et coiffée par{" "}
          <span className="SGIT">le secrétaire d’état en informatique</span>.
          Son savoir-faire couvre <span className="SGIT">la conception</span> et{" "}
          <span className="SGIT">
            l’intégration des solutions informatiques clés en main pour les
            entreprises
          </span>
          . Son champ de prédilection reste les métiers agissant sur le système
          d’information (comptabilité, reporting financier, contrôle de gestion,
          audit interne, conception et intégration des procédures, gestion des
          collaborateurs et des taches,…).
        </p>
      </div>

      <h2>Avis : </h2>
      <div className="avis-section">
        <CustomCarousel />
        <div className="divider-avis"></div>
      </div>
      <h2>Nos compétences : </h2>
      <div className="competence">
        <div className="competence-card">
          <div className="competence-card-title">
            <i class="fas fa-laptop-code icon-comp"></i>
            <h4>Maitrise des outils informatiques</h4>
          </div>
          <h5>
            Nous maitrisons toutes les étapes de la technologie de gestion des
            projets informatiques (conception, développement, mise en place,
            maintenance). Nous utilisons un environnement de développement qui
            couvre tous les environnements de développement des logiciels
            informatiques (environnement propriétaire, environnements Web,
            environnement Téléphonie).
          </h5>
        </div>
        <div className="competence-card">
          <div className="competence-card-title">
            <i class="fas fa-american-sign-language-interpreting icon-comp"></i>
            <h4>Maitrise des systèmes d’information</h4>
          </div>
          <h5>
            Ceci concerne les métiers et activités suivants :
            <audit className="point-card1">
              • Organisation et procédure de travail (organigramme,
              incompatibilité des taches, fiche de poste, contrôle interne, …)
            </audit>
            <audit className="point-card2">
              • Système de sécurité et des habilitations
            </audit>
            <audit className="point-card3">
              • Processus de la remontée de l’information, de reporting et
              d’aide à la prise de décision
            </audit>
            <audit className="point-card4">
              • Contrôle de gestion et/ou audit interne (conception et mise en
              place d’un système de suivi par tableau de bord, …).
            </audit>
          </h5>
        </div>
        <div className="competence-card">
          <div className="competence-card-title">
            <i class="fas fa-coins icon-comp"></i>
            <h4>Maitrise du volet financement</h4>
          </div>

          <h5>
            Bien que notre métier principal soit le développement des solutions
            informatiques, nous sommes capables également d’aiguiller nos
            partenaires sur les meilleures façons de se procurer de ces
            solutions avec les moindres coûts d’investissement.
          </h5>
        </div>
      </div>
      <h2 className="equipe-title">Notre équipe</h2>
      <div className="founder-container">
        <FoundersCard
          isFounder
          imageLink="https://www.tacresults.com/wp-content/uploads/2015/08/Aug2015.jpg"
          nom="BEDOUI Basma"
          profession="Expert Comptable"
          description={() => (
            <p>
              {" "}
              - Mastère professionnel Sécurité des Systèmes Informatiques,
              Communicants et embarqués. - Mastère spécialisé en System de
              communication et réseaux. - Maîtrise Electronique-Informatique.
            </p>
          )}
        />
        <FoundersCard
          isFounder
          imageLink="http://landfoodpeople.ca/wp-content/uploads/2021/04/finance-coach-1.jpeg"
          nom="WAHADA Mourad"
          profession="Expert Comptable"
          description={() => (
            <p>
              - Mastère professionnel Sécurité des Systèmes Informatiques,
              Communicants et embarqués. - Mastère spécialisé en System de
              communication et réseaux. - Maîtrise Electronique-Informatique.
            </p>
          )}
        />
        <FoundersCard
          isFounder
          imageLink="https://ied.eu/wp-content/uploads/2018/04/entrepreneur-1.jpg"
          nom="BEDOUI Basma"
          profession="Expert Comptable"
          description={() => (
            <p>
              - Mastère professionnel Sécurité des Systèmes Informatiques,
              Communicants et embarqués. - Mastère spécialisé en System de
              communication et réseaux. - Maîtrise Electronique-Informatique.
            </p>
          )}
        />
      </div>
      <h2> Nos référence </h2>
    </div>
  );
}
