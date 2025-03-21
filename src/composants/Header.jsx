// ... existing code ...
import React, { useState } from 'react'; // Ajout de l'importation de React et useState
import { Link } from 'react-router-dom'; // Ajout de l'importation de Link

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header className="header">
        <div className="logo">
          <h1>Moussa KANOUTE</h1>
          <p>Manageur de Systèmes d'Information</p>
        </div>
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {/* <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
            <li><Link to="/competences" onClick={() => setMenuOpen(false)}>Compétences</Link></li>
            <li><Link to="/experiences" onClick={() => setMenuOpen(false)}>Expériences</Link></li>
            <li><Link to="/projets" onClick={() => setMenuOpen(false)}>Projets</Link></li>
            <li><Link to="/formation" onClick={() => setMenuOpen(false)}>Formation</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul> */}

<ul>
            <li><Link to="/portfolio/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
            <li><Link to="/competences" onClick={() => setMenuOpen(false)}>Compétences</Link></li>
            <li><Link to="/experiences" onClick={() => setMenuOpen(false)}>Expériences</Link></li>
            {/* <li >Projets</li> */}
            <li><Link to="/formation" onClick={() => setMenuOpen(false)}>Formation</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
        </nav>
      </header>
    );
  };

  export default Header