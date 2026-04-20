import React, { useState } from 'react';
import './Projects.css';
import carWashImg from '../assests/images/projects/car-wash.jpg';
import barcodeImg from '../assests/images/projects/barcode-system.jpg';
import repairTrackerImg from '../assests/images/projects/repair-tracker.jpg';
import portfolioImg from '../assests/images/projects/portfolio.jpg';
import bankingImg from '../assests/images/projects/banking-system.png';
{/*
import securityLabImg from '../assets/images/projects/security-lab.jpg';
import siemImg from '../assets/images/projects/siem.jpg';
import networkImg from '../assets/images/projects/network.jpg';
import cloudImg from '../assets/images/projects/cloud.jpg';
*/}

const placeholderImg = 'https://via.placeholder.com/600x340?text=Project+Screenshot';

const projects = [
  {
    id: 1,
    title: "Car Wash Management System",
    category: "Full-Stack Application",
    description: "A complete car wash management system with customer registration, service tracking, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: ["Customer management", "Service packages", "Payment tracking", "Sales reports"],
    github: "https://github.com/Omollodev/car-detailing-workflow-management-system.git",
    live: "#",
    image: carWashImg 
  },
  {
    id: 2,
    title: "Barcode-Based Unit Registration System",
    category: "Inventory & Tracking System",
    description: "A barcode scanning and registration system for tracking units/items with complete audit trail.",
    technologies: ["React", "Python", "Flask", "PostgreSQL"],
    features: ["Barcode generation", "Scanner integration", "Audit trail", "Export reports"],
    github: "https://github.com/Omollodev/barcode-registration-system.git",
    live: "#",
    image: barcodeImg
  },
  {
    id: 3,
    title: "Repair Job Tracker",
    category: "Job Management System",
    description: "A comprehensive repair job tracking system for service centers tracking devices, status, and invoices.",
    technologies: ["React", "Django", "SQLite", "Bootstrap", "Chart.js"],
    features: ["Job scheduling", "Status tracking", "Parts inventory", "Invoice generation"],
    github: "https://github.com/Omollodev/repair-job-tracker.git",
    live: "#",
    image: repairTrackerImg
  },
  {
    id: 4,
    title: "Legacy Core Banking System",
    category: "Financial Software",
    description: "Legacy-style core banking system simulation with account management and transaction processing.",
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    features: ["Account management", "Transaction processing", "Fund transfers", "Loan calculator"],
    github: "https://github.com/Omollodev/Mobile-Loan-App.git",
    live: "#",
    image: bankingImg
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    category: "Web Development",
    description: "Professional portfolio website showcasing skills, projects, and resume.",
    technologies: ["React", "CSS", "JavaScript"],
    features: ["Responsive design", "Dark theme", "Project showcase", "Contact form"],
    github: "https://github.com/Omollodev/Personal-portfolio-website",
    live: "https://omollodev.github.io/Personal-portfolio-website/",
    image: portfolioImg
  },
  {
    id: 6,
    title: "Web Security Testing Lab",
    category: "Cybersecurity",
    description: "Local penetration testing environment using Docker containers with OWASP Juice Shop & DVWA.",
    technologies: ["Docker", "Kali Linux", "OWASP", "Burp Suite"],
    features: ["Vulnerable apps", "Pen testing tools", "Containerized setup"],
    github: "https://github.com/Omollodev/web-security-lab",
    live: "#",
    image: placeholderImg
  },
  {
    id: 7,
    title: "SIEM Implementation",
    category: "Cybersecurity",
    description: "Real-time intrusion detection system using Splunk and Suricata.",
    technologies: ["Splunk", "Suricata", "Python", "Security Analytics"],
    features: ["Real-time monitoring", "Alert system", "Log analysis", "Dashboard"],
    github: "https://github.com/Omollodev/siem-lab",
    live: "#",
    image: placeholderImg
  },
  {
    id: 8,
    title: "Home Office Network Setup",
    category: "Networking",
    description: "Configured and secured a home office network with firewalls, VLANs, and security policies.",
    technologies: ["Cisco", "Firewalls", "VLAN", "TCP/IP"],
    features: ["Network segmentation", "Access control", "Monitoring setup"],
    github: "https://github.com/Omollodev/network-setup",
    live: "#",
    image: placeholderImg
  },
  {
    id: 9,
    title: "Cloud Security Projects",
    category: "Cloud Computing",
    description: "Built secure containerized environments using Docker & Kubernetes on AWS and Azure.",
    technologies: ["Docker", "Kubernetes", "AWS", "Azure"],
    features: ["Container orchestration", "Cloud deployment", "Security hardening"],
    github: "https://github.com/Omollodev/cloud-security",
    live: "#",
    image: placeholderImg

  }
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've built — from real-world applications to cybersecurity labs
        </p>
        
        <div className="project-categories">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* ===== PROJECT IMAGE (if it exists) ===== */}
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.features && (
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub →
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;