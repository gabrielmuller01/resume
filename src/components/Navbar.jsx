import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default Navbar;