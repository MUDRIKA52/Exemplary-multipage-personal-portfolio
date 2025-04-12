import React from 'react';
import '../styles/Home.css';
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Mudrika Tiwari</h1>
          <p>A passionate software engineer, full-stack developer, and tech enthusiast.</p>
          <a href="#about" className="cta-button">Explore My Journey</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
