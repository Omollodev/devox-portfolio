import React from "react";
import "./Skill.css";

const skillGroups = [
  {
    title: "Cynsersecurity researcher",
    skills: [
      "Pentesting (Web & Android APK)",
      "OWASP Top 10",
      "Burpsuite & Caido",
    ],
  },
  {
    title: "Cloud *& Infracture",
    skills: ["AWS", "Docker", "Kubernetes", "Linux", "VLANS & Firewalls"],
  },
  {
    title: "Development",
    skills: [
      "Web Development",
      "Android Developmet (React-native, Java)",
      "(MERN) Tech Stack i.e. MongoDB, Express, React & Node",
      "Python (Flask, Django",
    ],
  },
  {
    title: "Tools & Practices",
    skills: ["Git / Github", "Postman", "Nmap", "JWT-based Auth", "REST APIs"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
