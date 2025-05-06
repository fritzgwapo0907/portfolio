// components/Navbar.jsx
import React from 'react';


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#socials">Connect</a></li>
      </ul>
    </nav>
  );
}
