import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">Mudrika Tiwari</Link>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={isMobile ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
