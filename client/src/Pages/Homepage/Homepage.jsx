import React from "react";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="image-header">
        <div className="background">
          <div className="image-mask">
            <h1>DECOUVREZ NOTRE SOCIETE</h1>
          </div>
        </div>
      </div>
      <div className="nos-projets">
        <span>SGIT</span>
        <h2>Nos Projets Realise</h2>
        <div className="card-container1">
          <Card
            description="Logiciel de gestion de groupe et d’établissement des EF consolidés."
            url="https://bernardmarr.com/img/Comparing%20Data%20Visualization%20Software%20Here%20Are%20The%207%20Best%20Tools%20For%202018.png" //"https://images.ctfassets.net/s600jj41gsex/U4IZCLq00wIhd4eQe9yd6/d2895fc649d487c792bf2e6864a80277/pexels-photo-574071-1.jpeg?w=768&h=509&q=50&fm=webp&fit=scale"
          />
          <Card
            description="Logiciel d’audit interne et/ou de contrôle de gestion. "
            url="https://miro.medium.com/max/2000/1*D4Zub-vsQsuAOKm9rEd-lg.jpeg"
          />
          <Card
            description="Logiciel de gestion de cabinet d’expert comptable"
            url="https://assets.entrepreneur.com/content/3x2/2000/20190218191320-GettyImages-941729686.jpeg" //"https://www.ziprecruiter.com/blog/static/wp-content/uploads/2017/06/28155623/1071652068_Software-Developer.jpg"
          />
          <Card
            description="Logiciel de suivi de traces d’exécution sur réseau informatique. "
            url="https://ebisdata.com/wp-content/uploads/2017/03/Databases-connected-e1489858790233-1110x550.jpg" //"https://www.ziprecruiter.com/blog/static/wp-content/uploads/2017/06/28155623/1071652068_Software-Developer.jpg"
          />
        </div>
      </div>
      <div className="section-approche">
        <h1>Notre Approche</h1>
        <p>
          Nous croyons que nos solutions et logiciels informatiques, fruits de
          plusieurs années d’expérience, sont œuvrés avec beaucoup de passion et
          patience, bien qu’ils soient, comme pour tout travail humain,
          perfectibles. Au cours de nos longues années de service nous avons
          forgé une identité spécifique et une approche de travail que nous
          croyons parfaitement compatibles aux besoins réels de nos partenaires.
          Cette approche s’articule autour des axes suivants :
        </p>
        <div className="area">
          <div
            className="divider"
            // style={{
            //   backgroundImage:
            //     "url('https://bernardmarr.com/img/Comparing%20Data%20Visualization%20Software%20Here%20Are%20The%207%20Best%20Tools%20For%202018.png')",
            // }}
          >
            <i class="fas fa-angle-right divider"></i>
          </div>
          <ol>
            <li>
              <p>
                Des solutions informatiques simplifiant le travail au quotidien
                considérablement.
              </p>
            </li>
            <li>
              <p>Une stratégie de mise en place clés en main.</p>
            </li>
            <li>
              <p>
                Une relation de partenariat de long terme avec des véritables
                "partenaires".
              </p>
            </li>
          </ol>
        </div>
      </div>
      <dvi className="section-2">
        <div className="card-and-description">
          <Link to="/logiciels" className="card-part">
            <Card
              description="Simplifier le travail au quotidien"
              url="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/05/29111641/Simplification.jpeg"
            />
          </Link>
          <div className="description">
            <p>
              Nous considérons qu’il nous appartient nous, professionnels
              informatiques, de trouver comment rendre "le traitement
              automatique des opérations" au service du professionnel et de
              simplifier le travail au quotidien considérablement afin qu’il
              puisse consacrer son temps et son énergie à s’occuper de
              l’essentiel (développement des affaires, réseautage, formation,
              famille, sport, …).
            </p>
          </div>
        </div>
        <div className="card-and-description flex-end-responsive">
          <div className="description-left">
            <p>
              Consommateurs des services informatiques depuis plusieurs années.
              Nous avons constaté que la plupart des logiciels, d’une certaine
              façon, se valent. La réussite des logiciels dépendrait
              principalement de la qualité du service au tour des logiciels,
              surtout lors de la phase de la mise en place. Le succès de
              l’intégration du logiciel dépendrait essentiellement de la qualité
              d’assistance (formation utilisateur, assistance au démarrage,
              assistance de perfectionnement, traitement des cas
              spécifiques,…) qui a été fournie dans la phase de mise en place.
            </p>
          </div>
          <Link to="/logiciels">
            <Card
              description="solutions clés en main "
              url="https://www.panierdachat.com/wp-content/uploads/fly-images/10866/solution-boutique-en-ligne-cle-en-main-1170x600-c.jpg"
            />
          </Link>
        </div>
        <div className="card-and-description">
          <Link to="/logiciels">
            <Card
              description="Traiter avec des partenaires"
              url="https://www.lemoniteur.fr/mediatheque/4/6/6/000575664_620x393_c.jpg"
            />
          </Link>
          <div className="description">
            <p>
              L’utilité et les bénéfices de la relation de partenariat entre
              fournisseurs de solutions informatiques et utilisateurs de ces
              services sont multiples et variés. Mais il est indispensable que
              ce partenariat soit de de type Gagnant-Gagnant. Nous souhaitons
              que nos futures partenaires, partagent cette volonté et y
              trouveraient gains et intérêts.
            </p>
          </div>
        </div>
      </dvi>
      {/* <div className="section-1">
        <h2>NOTRE APPROCHE</h2>

        <div className="card-container1">
          <Card
            description="Logiciel Comptabilité Analytique"
            url="https://bernardmarr.com/img/Comparing%20Data%20Visualization%20Software%20Here%20Are%20The%207%20Best%20Tools%20For%202018.png" //"https://images.ctfassets.net/s600jj41gsex/U4IZCLq00wIhd4eQe9yd6/d2895fc649d487c792bf2e6864a80277/pexels-photo-574071-1.jpeg?w=768&h=509&q=50&fm=webp&fit=scale"
          />
          <Card
            description="Logiciel Paie (centrale et régionale) "
            url="https://miro.medium.com/max/2000/1*D4Zub-vsQsuAOKm9rEd-lg.jpeg"
          />
          <Card
            description="Logiciel Finances "
            url="https://assets.entrepreneur.com/content/3x2/2000/20190218191320-GettyImages-941729686.jpeg" //"https://www.ziprecruiter.com/blog/static/wp-content/uploads/2017/06/28155623/1071652068_Software-Developer.jpg"
          />
        </div>
      </div> */}
      <div className="inf-triangle"></div>
    </div>
  );
}
