import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <p>
          Hi! I'm <strong>Mudrika Tiwari</strong>, a dedicated full-stack web developer and software engineer with a
          passion for crafting scalable, user-centric digital solutions. My journey in technology is fueled by curiosity
          and a drive to transform ideas into impactful applications.
        </p>
        <p>
          <strong>Education:</strong> Currently pursuing a B.Tech in Computer Science and Engineering at Dr. APJ Abdul Kalam Technical University (2021–2025).
        </p>
        <p>
          <strong>Core Skills:</strong> My expertise lies in developing modern web applications with technologies like:
        </p>
        <ul>
          <li>Frontend: HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS</li>
          <li>Backend: Node.js, PHP, Express.js</li>
          <li>Databases: MySQL, MongoDB</li>
          <li>Version Control: Git, GitHub</li>
        </ul>
        <p>
          I thrive on solving challenging problems, writing clean and efficient code, and collaborating in dynamic environments. 
          My approach combines technical skills with a strong understanding of UX design principles, ensuring both functionality and user satisfaction.
        </p>
        <p>
          <strong>Achievements:</strong>
        </p>
        <ul>
          <li>Developed a customizable form-generation platform with advanced data visualization features.</li>
          <li>Built an e-commerce web application with a secure payment gateway and admin panel.</li>
          <li>Successfully contributed to open-source projects, enhancing my collaboration skills.</li>
        </ul>
        <p>
          Beyond coding, I enjoy exploring emerging technologies like AI and data analytics. I believe in continuous learning 
          and actively participate in hackathons, coding challenges, and tech forums to refine my skills.
        </p>
        <p>
          <strong>My Mission:</strong> To empower businesses and individuals by delivering robust, innovative software solutions 
          that create meaningful impact.
        </p>
      </div>
      <a href="#projects" className="cta-button">Explore My Projects</a>
    </section>
  );
}

export default About;
