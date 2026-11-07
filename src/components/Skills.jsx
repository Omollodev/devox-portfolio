import React from "react";
import "./Skill.css";

const skillGroups = [
  {
    title: "Full-Stack Development",
    skills: [
      "Python: Django with Bootstrap",
      "React for web interfaces",
      "React Native with Expo & EAS",
      "MERN & PERN stacks",
      "Java",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQL", "SQLite3"],
  },
  {
    title: "DevSecOps",
    skills: [
      "Git & GitHub",
      "CI/CD workflow pipelines",
      "Docker",
      "Kubernetes",
      "Linux",
    ],
  },
  {
    title: "Security Review",
    skills: [
      "Black-box testing (web & Android APK)",
      "White-box code and configuration review",
      "OWASP Top 10",
      "Burp Suite & Caido",
      "Bug bounty research",
    ],
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
