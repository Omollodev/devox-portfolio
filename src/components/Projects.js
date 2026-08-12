import React, { useState } from "react";
import "./Projects.css";
import carWashImg from "../assests/images/projects/car-wash.jpg";
import barcodeImg from "../assests/images/projects/barcode-system.jpg";
import repairTrackerImg from "../assests/images/projects/repair-tracker.jpg";
import portfolioImg from "../assests/images/projects/portfolio.jpg";
import bankingImg from "../assests/images/projects/banking-system.png";

const projects = [
  {
    id: 1,
    title: "Car Wash Management System",
    category: "Full-Stack Application",
    description:
      "A complete car wash management system with customer registration, service tracking, payment processing, and admin dashboard.",
    github:
      "https://github.com/Omollodev/car-detailing-workflow-management-system.git",
    live: "#",
    image: carWashImg,
  },
  {
    id: 2,
    title: "Barcode-Based Unit Registration System",
    category: "Inventory & Tracking System",
    description:
      "A barcode scanning and registration system for tracking units/items with complete audit trail.",
    technologies: ["React", "Python", "Flask", "PostgreSQL"],
    github: "https://github.com/Omollodev/barcode-registration-system.git",
    live: "#",
    image: barcodeImg,
  },
  {
    id: 3,
    title: "Repair Job Tracker",
    category: "Job Management System",
    description:
      "A comprehensive repair job tracking system for service centers tracking devices, status, and invoices.",
    technologies: ["React", "Django", "SQLite", "Bootstrap", "Chart.js"],
    github: "https://github.com/Omollodev/repair-job-tracker.git",
    live: "#",
    image: repairTrackerImg,
  },
  {
    id: 4,
    title: "Legacy Core Banking System",
    category: "Financial Software",
    description:
      "Legacy-style core banking system simulation with account management and transaction processing.",
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    github: "https://github.com/Omollodev/Mobile-Loan-App.git",
    live: "#",
    image: bankingImg,
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "Professional portfolio website showcasing skills, projects, and resume.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Omollodev/Personal-portfolio-website",
    live: "https://omollodev.github.io/Personal-portfolio-website/",
    image: portfolioImg,
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const INITIAL_VISIBLE = 3; // matches one row on desktop (3-column grid)

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE);

  const hasMore = filteredProjects.length > INITIAL_VISIBLE;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've built — from real-world
          applications to cybersecurity labs
        </p>

        <div className="project-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
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

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub →
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="projects-toggle">
            <button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show Less"
                : `Show More (${filteredProjects.length - INITIAL_VISIBLE})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
