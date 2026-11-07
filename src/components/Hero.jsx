import React from "react";
import profilePic from "../assests/images/developer-potrait.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Devox Omollo</h1>
            <p className="hero-title">
              Full-Stack Developer | DevSecOps | Security Reviewer
            </p>
            <p className="hero-description">
              I build full-stack applications with Python (Django and Bootstrap),
              React, and React Native on Expo and EAS, on the MERN and PERN
              stacks and Java. I ship them through Git and GitHub, CI/CD
              pipelines, Docker and Kubernetes, then review them for security
              with black-box and white-box testing. Active bug bounty hunter on
              Bugcrowd, working across web applications and Android APKs.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a
                href="/Devox_Omollo_CV.pdf"
                className="btn-secondary"
                download
              >
                Download Resume
              </a>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/Omollodev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/devoxomollo-7452b928b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://bugcrowd.com/h/Th4_Hunt3r"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Bugcrowd
              </a>
              <a href="https://www.devoxsec.com" target="_blank" rel="noopener noreferrer" className="social-link">
                DevoxSec Technologies
              </a>
              <a href="mailto:devoxomollo@gmail.com" className="social-link">
                Email
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Profile Picture */}
          <div className="hero-image">
            <div className="image-wrapper">
              {
                <img
                  src={profilePic}
                  alt="Devox Omollo"
                  className="profile-image"
                />
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
