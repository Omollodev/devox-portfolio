import React from "react";
import Logo from "./Logo";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="footer-brand" href="https://www.devoxsec.com" target="_blank" rel="noopener noreferrer">
          <Logo size={28} />
          <span>DevoxSec Technologies</span>
        </a>
        <p>&copy; {year} Devox Omollo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
