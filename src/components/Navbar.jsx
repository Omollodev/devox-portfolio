import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';
import './Navbar.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light'
  );

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('devoxsec-theme', next); } catch (e) { /* storage blocked */ }
    setTheme(next);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-brand" aria-label="Devox Omollo, home">
          <Logo size={34} />
          <span className="nav-brand-text">
            <b>Devox Omollo</b>
            <small>Developer &amp; Security</small>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <div className="menu-icon" onClick={toggleMenu} role="button" tabIndex={0} aria-label="Open menu" onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}>
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