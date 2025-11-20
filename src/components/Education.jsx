import React from "react";
import "./styles/Education.css";

function Education() {
  const skills = [
    "Java",
    "Spring Boot",
    "Hibernate / JPA",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "REST APIs",
    "Git & GitHub",
  ];

  return (
    <section className="education-section">
      <h2 className="education-title">Education & Skills</h2>

      <div className="education-container">
        
        <div className="education-card">
          <h3>Bachelor of Computer Applications (BCA)</h3><p>Grade:- A</p>
          <p>
            Sant Gadge Baba amravati University . [2022-2025]
          </p>
        </div>

        <div className="skills-card">
          <h3>My Full Stack Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

