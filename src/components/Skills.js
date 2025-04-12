import React from 'react';
import '../styles/Skills.css';
/* import Footer from './Footer'; // Ensure the footer is imported */

function Skills() {
  return (
    <div id="root">
      <div className="main-content">
        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>HTML5, CSS3, JavaScript, React</p>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <p>Node.js, PHP, MySQL, MongoDB</p>
            </div>
            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, VS Code, Trello, Jira</p>
            </div>
          </div>
        </section>
      </div>
     
    </div>
  );
}

export default Skills;
