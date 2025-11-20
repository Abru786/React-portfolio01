

import React from "react";
import "./styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built using React & Bootstrap with animated background and responsive design.",
      img: "/images/Portfolio.png", 
      link: "https://abru-web.netlify.app/",
    },
    {
      title: "Student Management System",
      desc: "A full-stack project using Spring Boot (Backend) + React (Frontend) with CRUD operations.",
      img: "/images/Full Stack App.png",
      link: "*",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} className="project-img" />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="demo-btn">
                🔗 View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
