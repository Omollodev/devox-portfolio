import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">Feel free to reach for services.</p>
      <div className="contact-links">
        <a href="mailto:info@devoxsec.com" className="contact-link">
          Email
        </a>
        <a href="tel:+254713318602" className="contact-link">
          +254 713 318 602
        </a>
        <a
          href="https://github.com/Omollodev"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/devox-omollo-7452b928b/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://bugcrowd.com/h/Th4_Hunt3r"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Bugcrowd
        </a>
      </div>
    </section>
  );
}

export default Contact;
