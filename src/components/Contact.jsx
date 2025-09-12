import React from "react";
import "./styles/Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Connect With Me</h2>
      
      <div className="contact-icons">
        <a
          href="linkedin.com/in/abrar-uddin-891794293"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon linkedin"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Abru786"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon github"
        >
          <FaGithub />
        </a>

        <a
          href="uddinabrar360@gmail.com"
          className="contact-icon email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.instagram.com/its_abru_009?igsh=MWt3bnl2a28zNDlrOQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}

export default Contact;
