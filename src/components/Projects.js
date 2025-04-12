import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    { title: 'Portfolio Website', description: 'A personal portfolio built with React to showcase my skills and projects.' },
    { title: 'E-Commerce Platform', description: 'A full-stack Node.js application for an online store with payment integration.' },
    { title: 'Weather App', description: 'A dynamic weather app using OpenWeather API and React.' },
    { title: 'Blogging Platform', description: 'A MERN stack blogging platform for content creation and sharing.' },
    { title: 'Task Manager', description: 'A minimalist task manager app built with vanilla JavaScript and local storage.' },
  ];

  return (
    <section className="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
