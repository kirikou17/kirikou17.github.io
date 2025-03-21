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
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--background-color)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    logo: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoH1: {
      fontSize: '1.5rem',
      color: 'var(--primary-color)',
      margin: 0,
    },
    logoP: {
      fontSize: '0.875rem',
      color: 'var(--text-light)',
      margin: 0,
    },
    navUl: {
      display: 'flex',
      listStyle: 'none',
      gap: '1.5rem',
      margin: 0,
      padding: 0,
      flexDirection: isMobile ? 'column' : 'row',
    },
    navA: {
      textDecoration: 'none',
      color: 'var(--text-color)',
      fontWeight: '500',
      transition: 'color 0.3s',
    },
    navToggle: {
      display: isMobile ? 'flex' : 'none', // Afficher seulement en mode mobile
      flexDirection: 'column',
      gap: '5px',
      cursor: 'pointer',
    },
    navToggleSpan: {
      display: 'block',
      width: '25px',
      height: '3px',
      backgroundColor: 'var(--text-color)',
      transition: 'all 0.3s',
    },
    navToggleSpanOpen1: {
      transform: 'translateY(8px) rotate(45deg)', 
    },
    navToggleSpanOpen2: {
      opacity: 0,
    },
    navToggleSpanOpen3: {
      transform: 'translateY(-8px) rotate(-45deg)',
    },
    nav: {
      transition: 'all 0.3s ease',
      display: isMobile && !menuOpen ? 'none' : 'block', // Cache le menu en mode mobile quand il est fermé
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
    },
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