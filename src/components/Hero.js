import React from 'react';
import profilePic from '../assests/images/developer-potrait.jpg';
import './Hero.css';


function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Devox Omollo</h1>
            <p className="hero-title">
            Cybersecurity Enthusiast | Full-Stack Developer
            </p>
            <p className="hero-description">
              I'm a passionate developer with expertise in building modern web applications. Cybersecurity enthusiast with a knack for creating secure and efficient solutions. I love crafting beautiful and functional user experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/Devox_Omollo_Resume.pdf" className="btn-secondary" download>Download Resume</a>
            </div>
            
            <div className="hero-social">
              <a href="https://github.com/Omollodev" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/devoxomollo-7452b928b" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
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