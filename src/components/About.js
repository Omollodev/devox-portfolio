import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* LEFT COLUMN - Content */}
          <div className="about-content">
            <p className="about-intro">
              I'm a passionate <span className="highlight">cyber-security</span> and <span className="highlight">full-stack developer</span>.
              I thrive on building real-world applications and solving complex problems. With a strong foundation in computer science and hands-on experience in various projects, I'm eager to contribute my skills and grow in the tech industry.
            </p>            
            <p className="about-text">
              Over the past month alone, I've built several production-ready applications including a 
              Car Wash Management System, Barcode Registration System, Repair Job Tracker, and a 
              Legacy Core Banking System. Each project has strengthened my skills and taught me 
              something new.
            </p>
            {/*            
            <div className="about-education">
              <h3>🎓 Education</h3>
              <div className="education-item">
                <h4>Diploma in Computer Science & Mathematics</h4>
                <p className="institution">Zetech University 2024 - 2026</p>
              </div>
              <div className="education-item">
                <h4>Cisco Networking Academy</h4>
                <p className="institution">Networking Basics, CCNA, Cybersecurity | 2022 - 2023</p>
              </div>
              <div className="education-item">
                <h4>Hack The Box Academy</h4>
                <p className="institution">Bug Bounty Hunter, Penetration Tester, SOC Analyst</p>
              </div>
            </div>
            */}
          </div>
    
          
          {/* RIGHT COLUMN - Quick Facts / Contact Info */}
          <div className="about-sidebar">
            <div className="fact-card">
              <h3>Quick Facts</h3>
              <ul className="fact-list">
                <li><span className="fact-label"> Location:</span> Ruiru, Kiambu, Kenya</li>
                <li><span className="fact-label"> Email:</span> devoxomollo@gmail.com</li>
                <li><span className="fact-label"> Phone:</span> +254713318602</li>
                <li><span className="fact-label"> Status:</span> Seeking Industrial Attachment</li>
                <li><span className="fact-label"> Availability:</span> Immediate (3 months)</li>
              </ul>
            </div>
            
            <div className="fact-card">
              <h3>What I'm Looking For</h3>
              <ul className="fact-list">
                <li><span className="fact-icon">✅</span> Industrial attachment in any ICT field</li>
                <li>✅ Hands-on experience with real projects</li>
                <li>✅ Mentorship from industry professionals</li>
                <li>✅ Opportunity to learn and contribute</li>
              </ul>
            </div>
            
            <div className="fact-card">
              <h3>Fun Facts</h3>
              <ul className="fact-list">
                <li>💻 Built 9+ projects in the past month</li>
                <li>🔒 CTF enthusiast and bug bounty hunter</li>
                <li>☕ Open-source contributor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;