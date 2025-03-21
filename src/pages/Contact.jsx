import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaSnapchatGhost } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, on simulerait l'envoi des données à un serveur
    console.log("Données du formulaire:", formData);
    setFormSubmitted(true);
    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      email: "",
      sujet: "",
      message: "",
    });
  };

  return (
    <section className="contact" style={{marginTop:75}}>
      <h2>Contact</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Informations de Contact</h3>
          <div className="info-item">
            <div className="info-icon">📧</div>
            <p>kanoute428@gmail.com</p>
          </div>
          <div className="info-item">
            <div className="info-icon">📱</div>
            <p>+221 78 318 34 61</p>
          </div>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <p>Senegal</p>
          </div>

          <div className="social-links">
            <h3>Réseaux Sociaux</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaGithub size={25} color="black" />
              </a>
              <a href="#" className="social-icon">
              <FaLinkedin size={25} color="blue" />
              </a>
              
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Envoyez-moi un Message</h3>
          {formSubmitted ? (
            <div className="form-success alert alert-success" role="alert">
              <p className="mb-0">
                Votre message a été envoyé avec succès. Je vous répondrai dans les
                plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sujet" className="form-label">
                  Sujet
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn" style={{backgroundColor:'#8B4513', color:'white'}}>
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;