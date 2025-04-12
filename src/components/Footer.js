import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // Importing icons for GitHub and LinkedIn
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Mudrika Tiwari</p>
        <div className="social-links">
          <a href="https://github.com/mudrikatiwari" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/mudrikatiwari" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
