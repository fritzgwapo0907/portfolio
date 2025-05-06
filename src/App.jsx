import React from 'react';
import './global.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';
import SocialLinks from './components/sociallinks';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialLinks />
    </div>
  );
}
