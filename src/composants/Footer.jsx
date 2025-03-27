import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Moussa KANOUTE</h3>
            <p>Manager de Systèmes d'Information</p>
          </div>
          <div className="footer-nav">
            <ul>
              <li><Link to="/portfolio/" onClick={()=>window.scrollTo(0)}>Accueil</Link></li>
              <li><Link to="/portfolio/competences" onClick={()=>window.scrollTo(0)}>Compétences</Link></li>
              <li><Link to="/portfolio/experiences" onClick={()=>window.scrollTo(0)}>Expériences</Link></li>
              {/* <li><Link to="/projets">Projets</Link></li> */}
              <li><Link to="/portfolio/contact" onClick={()=>window.scrollTo(0)}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Moussa KANOUTE - Tous droits réservés</p>
        </div>
      </footer>
    );
  };

  export default Footer