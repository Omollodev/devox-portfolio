import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assests/logo/icon-logo.png';
import './Navbar.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={logo} alt="Devox Logo" className="logo" />
        { /*<div className="nav-logo">
          <span className="logo-text">Devox<span className="highlight">Sec</span></span>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="hero" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;