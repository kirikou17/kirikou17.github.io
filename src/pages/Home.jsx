import React, { useState } from 'react'; // Ajout de l'importation de React et useState
import { Link } from 'react-router-dom'; // Ajout de l'importation de Link


const Home = () => {
    return (
   
      <section className="home">
        <div className="hero">
          <div className="hero-content">
            <h2>Expert en Gestion des Systèmes d'Information</h2>
            <p>Professionel dans la transformation digitale et le management des SI</p>
            <div className="cta-buttons">
              {/* <Link to="/contact" className="btn primary">Me contacter</Link>
              <Link to="/projets" className="btn secondary">Voir mes projets</Link> */}
            </div>
          </div>
          <div className="hero-image">
            {/* Image placeholder */}
            <div >
                <img src='./src/assets/image.jpg' style={{width:200,padding:10,borderRadius:50}}/>
            </div>
          </div>
        </div>
        
        <div className="summary">
          <h3>Mon Profil</h3>
          <p>
            Manageur de Systèmes d'Information expérimenté, je pilote des projets de transformation digitale
            et coordonne les équipes techniques pour garantir l'alignement des SI avec la stratégie d'entreprise.
            Expert en gouvernance IT, gestion de projets et optimisation des processus métiers.
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