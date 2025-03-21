import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Moussa KANOUTE</h3>
            <p>Manageur Systèmes d'Information</p>
          </div>
          <div className="footer-nav">
            <ul>
              <li><Link to="/portfolio">Accueil</Link></li>
              <li><Link to="/competences">Compétences</Link></li>
              <li><Link to="/experiences">Expériences</Link></li>
              {/* <li><Link to="/projets">Projets</Link></li> */}
              <li><Link to="/contact">Contact</Link></li>
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