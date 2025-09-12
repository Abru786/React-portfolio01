import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      {/* 🌌 Global Animated Background */}
      <Particles
        className="global-bg"
        options={{
          background: { color: "#0d1117" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { speed: 1 },
            links: { enable: true, color: "#ffffff" },
          },
        }}
      />
      
      {/* 🧭 Navbar + Page Content */}
      <Navbar />
      <div className="container mt-4 page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
