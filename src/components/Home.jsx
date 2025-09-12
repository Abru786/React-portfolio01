import React from "react";
import "./styles/Home.css";
import profilePic from "../assets/image11.jpg"; 

function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        {/* Left Side - Text Intro */}
        <div className="home-text">
          <h1 className="home-title">Hi, I'm <span>ABRARUDDIN</span> 👋</h1>
          <h2 className="home-subtitle">Full Stack Java Developer</h2>
          <p className="home-desc">
            I am Learning about building scalable web applications using
            <strong> Java</strong>, <strong>Spring Boot</strong>, and
            <strong> React</strong>. I love solving problems and learning
            new technologies to grow as a developer.
          </p>
          <a
            href="/projects"
            className="home-btn"
          >
            View My Work 🚀
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="home-image">
          <img src={profilePic} alt="My Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;

