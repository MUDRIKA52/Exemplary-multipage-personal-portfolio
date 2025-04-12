import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to reach out! I am always open to discuss projects, opportunities, or ideas.</p>
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
          
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message" rows="4"></textarea>
          
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;


