import React, { useState } from 'react'; // Ajout de l'importation de React et useState
import { Link } from 'react-router-dom'; // Ajout de l'importation de Link


const Home = () => {

  const scrollToTop = () => {
    window.scrollTo(0);
  };

    return (
   
      <section className="home" style={{marginTop:75}}>
        <div className="hero">
          <div className="hero-content">
            <h2>Spécialiste junior en Management des SI</h2>
            <p>Professionnel en transformation digitale en management des SI </p>
            <div className="cta-buttons">
              <Link to="/portfolio/contact" className="btn primary">Me contacter</Link>
              <Link to="/portfolio/competences"  className="btn secondary">Voir mes competences</Link>
            </div>
          </div>
          <div className="hero-image"> 
            {/* Image placeholder */}
            <div >
                <img src="image.jpg" style={{width:200,padding:10,borderRadius:50}} />
            </div>
          </div>
        </div>
        
        <div className="summary">
          <h3>Mon Profil</h3>
          <p>
          Axé sur la transformation digitale et le management des SI, je propose des solutions innovantes pour rationaliser les opérations et maximiser l'efficacité des entreprises modernes.
          </p>
          </div>
        
        <div className="key-skills">
          <h3>Domaines d'Expertise</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🔄</div>
              <h4>Transformation Digitale</h4>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h4>Installation Systeme et Maintenance</h4>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h4>Analyse de données</h4>
            </div>
            <div className="skill-card">
              <div className="skill-icon">👥</div>
              <h4>Management d'Équipes</h4>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📊</div>
              <h4>Gestion de Projets</h4>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔒</div>
              <h4>Sécurité Informatique</h4>
            </div>
           
          </div>
        </div>
     </section>
    );
  };

export default Home