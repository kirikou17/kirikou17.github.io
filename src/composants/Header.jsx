import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détecte si l'écran est en mode mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Vérifier au chargement initial
    checkIfMobile();
    
    // Vérifier à chaque redimensionnement
    window.addEventListener('resize', checkIfMobile);
    
    // Nettoyer l'event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const headerStyles = {
   
  };

  return (
    <header className="header" style={headerStyles.header}>
      <div className="container" style={headerStyles.container}>
        <div className="logo" style={headerStyles.logo}>
          <h1 style={headerStyles.logoH1}>Moussa KANOUTE</h1>
          <p style={headerStyles.logoP}>Manageur de Systèmes d'Information</p>
        </div>
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} style={headerStyles.navToggle}>
          <span style={{ ...headerStyles.navToggleSpan, ...(menuOpen ? headerStyles.navToggleSpanOpen1 : {}) }}></span>
          <span style={{ ...headerStyles.navToggleSpan, ...(menuOpen ? headerStyles.navToggleSpanOpen2 : {}) }}></span>
          <span style={{ ...headerStyles.navToggleSpan, ...(menuOpen ? headerStyles.navToggleSpanOpen3 : {}) }}></span>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`} style={headerStyles.nav}>
          <ul style={headerStyles.navUl}>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio/" onClick={() => setMenuOpen(false)} style={headerStyles.navA}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/competences" onClick={() => setMenuOpen(false)} style={headerStyles.navA}>
                Compétences
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiences" onClick={() => setMenuOpen(false)} style={headerStyles.navA}>
                Expériences
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formation" onClick={() => setMenuOpen(false)} style={headerStyles.navA}>
                Formation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)} style={headerStyles.navA}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;