// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './composants/Header';
import Home from './pages/Home';
import Footer from './composants/Footer';
import Contact from './pages/Contact';
import Formation from './pages/Formation';
import Experiences from './pages/Experience';
import Competences from './pages/Competences';


// Composants principaux
function App (){
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/experiences" element={<Experiences />} />
          {/* <Route path="/projets" element={<Projets />} /> */}
          <Route path="/formation" element={<Formation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App
