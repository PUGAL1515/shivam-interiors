import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SocialIcons from "./components/SocialMediaIcons";

import ServicePage from './pages/ServicePage';
import ProjectsPage from './pages/Projectspage';
import AboutPage from './pages/AboutPage';   // ✅ ADD THIS

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        <Navbar />

        {/* GLOBAL SOCIAL ICONS */}
        <SocialIcons />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} /> {/* ✅ ADD THIS */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;