import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* LEFT COLUMN - Content */}
          <div className="about-content">
            <p className="about-intro">
              I'm a passionate <span className="highlight">cyber-security</span>{" "}
              and <span className="highlight">full-stack developer</span>. I
              thrive on building real-world applications and solving complex
              problems. With a strong foundation in computer science and
              hands-on experience in various projects, I'm eager to contribute
              my skills and grow in the tech industry.
            </p>
            <p className="about-text">
              I'm an active bug bounty hunter on Bugcrowd, working across web
              applications and Android APKs, and I maintain a personal security
              lab (Docker, Kali Linux, Burp Suite, Splunk, Suricata) to stay
              sharp on OWASP Top 10 and real-world vulnerability classes. Recent
              work spans a barcode-based registration system, a legacy core
              banking simulation, a car wash management platform, and a SIEM
              implementation for intrusion detection.
            </p>

            <div className="about-education">
              <h3>Education &amp; Certification</h3>
              <div className="education-item">
                <h4>Diploma in Computer Science & Mathematics</h4>
                <p className="institution">
                  Zetech University | Expected graudation December 2026
                </p>
              </div>
              <div className="education-item">
                <h4>CCNA &amp; CEH Certified</h4>
                <p className="institution">
                  Cisco Certified Netwrok Associate, Hack The Box
                </p>
              </div>
              <div className="education-item">
                <h4>AWS Certification</h4>
                <p className="institution">In Progress</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Quick Facts / Contact Info */}
          <div className="about-sidebar">
            <div className="fact-card">
              <h3>Quick Facts</h3>
              <ul className="fact-list">
                <li>
                  <span className="fact-label"> Location:</span> Ruiru, Kiambu,
                  Kenya
                </li>
                <li>
                  <span className="fact-label"> Email:</span>{" "}
                  devoxomollo@gmail.com
                </li>
                <li>
                  <span className="fact-label"> Phone:</span> +254713318602
                </li>
                <li>
                  <span className="fact-label"> Focus:</span> CyberSecurity,
                  full-Stack Developer
                </li>
              </ul>
            </div>

            <div className="fact-card">
              <h3>What I Bring</h3>
              <ul className="fact-list">
                <li>Full-stack delivery across MERN, Python, and Java</li>
                <li>
                  Hands-on penetration testing and vulnerability assessment
                </li>
                <li>Active bug bounty research on web and Android targets</li>
                <li>Comfort working across development and security teams</li>
              </ul>
            </div>

            <div className="fact-card">
              <h3>Currently</h3>
              <ul className="fact-list">
                <li>Researching new CWE and disclosure write-ups</li>
                <li>Building out cloud security labs on AWS</li>
                <li>Open-source contributor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
