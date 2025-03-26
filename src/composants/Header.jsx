import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate= useNavigate()

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

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
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      
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
      display: isMobile ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '5px',
      cursor: 'pointer',
      alignSelf: 'center', // Alignement vertical avec le logo
      padding: '0.5rem',    // Ajoute un peu d'espace autour de l'icône
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
      display: isMobile && !menuOpen ? 'none' : 'block',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
    },
    logo:{
      cursor: 'pointer',
    }
  };

  return (
    <header className="header" style={headerStyles.header}>
      <div className="container" style={headerStyles.container}>
        <div className="logo" style={headerStyles.logo} onClick={()=>navigate('/portfolio/')}>
          <h1 style={headerStyles.logoH1}>Moussa KANOUTE</h1>
          <p style={headerStyles.logoP}>IT Manager (Jr)</p>
        </div>
        <div className="nav-toggle" onMouseDown={() => setMenuOpen(!menuOpen)} style={headerStyles.navToggle}>
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