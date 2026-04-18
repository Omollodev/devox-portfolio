import React from "react";
import "./Skill.css";
import skillIcon from "../assests/icons/favicon.ico";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <img src={skillIcon} alt="skill icon" className="skill-icon" />
          <h3>Web Development</h3>
        </div>
        <div className="skill-card">
          <img src={skillIcon} alt="skill icon" className="skill-icon" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill-card">
          <img src={skillIcon} alt="skill icon" className="skill-icon" />
          <h3>React</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
