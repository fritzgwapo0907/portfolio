import './global.css';
import { useState } from 'react';
import {FaHome,FaUser,FaProjectDiagram,FaFacebook,FaInstagram,FaLinkedin,FaGithub} 
from 'react-icons/fa';

function App() {
  const [active, setActive] = useState("Home");

  const projects = [
    {
      title: 'CALCULATOR',
      description: 'A sleek calculator built with JS.',
      imageUrl: '/screenshot_2025-05-07_182308.png',
      link: 'calculator/index.html',
    },
    {
      title: 'ARRAY_OBJECTS',
      description: 'An employee list system use to add employee.',
      imageUrl: '/screenshot_2025-05-07_182353.png',
      link: 'array_objects/index.html',
    },
    {
      title: 'CONVERTER',
      description: 'A converter platform built with JS, CSS, and HTML.',
      imageUrl: '/screenshot_2025-05-07_182414.png',
      link: 'converter/index.html',
    },
    {
      title: 'MATH OPERATION',
      description: 'A simple loop built with JS.',
      imageUrl: '/screenshot_2025-05-07_182434.png',
      link: 'loop/index.html',
    },
    {
      title: 'TO-DO LIST',
      description: 'A to-do-list system built with React and Express.',
      imageUrl: '/screenshot_2025-05-07_205239.png',
      link: 'https://to-do-client-omega.vercel.app/',
    },
  ];

  const renderContent = () => {
    switch (active) {
      case "Home":
        return (
          <div className="flex flex-col items-center text-center mt-10 text-gray-200 px-4 space-y-6">
  <img
    src="/fritz.jpg"
    alt="Profile"
    className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 shadow-lg border-4 border-gray-700"
  />
  <h1 className="text-4xl font-bold">Hi, I'm Fritz 👋</h1>
  <p className="text-lg text-gray-400 max-w-2xl">
    Hello! I'm currently a student pursuing a Bachelor of Science in Information Technology (BSIT).
        My journey in tech began with a curiosity for how websites and applications work behind the scenes,
        and that curiosity has grown into a deep interest in software development, web technologies, and
        building real-world solutions through code.
  </p>


  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
    <div className="bg-gray-800 px-4 py-2 rounded-lg">🎓 3rd Year BSIT</div>
    <div className="bg-gray-800 px-4 py-2 rounded-lg">🏆 Dean’s Lister</div>
    <div className="bg-gray-800 px-4 py-2 rounded-lg">💻 4+ Projects</div>
    <div className="bg-gray-800 px-4 py-2 rounded-lg">⚙️ React, Flask</div>
  </div>



  <div className="flex flex-wrap justify-center gap-4 mt-6 text-3xl text-gray-400">
    <i className="devicon-html5-plain colored"></i>
    <i className="devicon-css3-plain colored"></i>
    <i className="devicon-javascript-plain colored"></i>
    <i className="devicon-react-original colored"></i>
    <i className="devicon-python-plain colored"></i>
  </div>
</div>

        );
      case "About":
        return (
          <div className="flex flex-col items-center justify-center min-h-screen px-4 text-gray-300 space-y-10 text-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">About Me</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src="/bc05b6ce-8fe0-4fe8-a3bc-07447d82350f.jpg" alt="Tech 1" className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className="text-lg font-semibold">Officer of Mandated Org.</h3>
                <p className="text-sm text-gray-400">I'm an Auditor in the Information, Communication, and Technology Student Organization.</p>
              </div>

              <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src="/3e0fc681-1799-48fd-ae21-ad53d434a229.jpg" alt="Tech 2" className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className="text-lg font-semibold">Academic Achiever.</h3>
                <p className="text-sm text-gray-400">Consistent Dean's Lister since first year college.</p>
              </div>

              <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src="/ec007f56-4ccb-4cc0-9345-a6e41e48a448.jpg" alt="Tech 3" className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className="text-lg font-semibold">My Capstone Groupmates</h3>
                <p className="text-sm text-gray-400">wala lang, cute lang namin dito.</p>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-base md:text-lg mb-6">
                I'm currently a student pursuing a Bachelor of Science in Information Technology (BSIT).
                My journey in tech began with a curiosity for how websites and applications work behind the scenes,
                and that curiosity has grown into a deep interest in software development, web technologies, and
                building real-world solutions through code.
                <br /><br />
                This portfolio is a collection of some of the projects I’ve worked on so far. I'm excited to keep learning,
                building, and sharing my progress along the way.
              </p>
            </div>
          </div>
        );
      case "Projects":
        return (
          <div className="flex flex-col items-center text-center px-4 text-gray-200 space-y-10">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
              <p className="text-gray-400 text-base md:text-lg">
                Here are some of the projects I've built throughout my journey. Click on each to explore!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 rounded-xl shadow hover:shadow-xl hover:bg-gray-700 transition"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row flex-1">
    
        <aside className="w-full md:w-64 bg-gray-800 shadow-md p-4 md:p-6 flex md:flex-col justify-between items-center md:items-start sticky top-0 z-10">
          <nav className="flex md:flex-col w-full justify-between md:justify-start md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-8">My Portfolio</h2>
            <ul className="flex md:flex-col gap-4 md:gap-6">
              <li onClick={() => setActive("Home")} className={`flex items-center gap-2 cursor-pointer ${active === "Home" ? 'text-blue-400 font-semibold' : 'text-gray-400 hover:text-white'}`}>
                <FaHome /> Home
              </li>
              <li onClick={() => setActive("About")} className={`flex items-center gap-2 cursor-pointer ${active === "About" ? 'text-blue-400 font-semibold' : 'text-gray-400 hover:text-white'}`}>
                <FaUser /> About
              </li>
              <li onClick={() => setActive("Projects")} className={`flex items-center gap-2 cursor-pointer ${active === "Projects" ? 'text-blue-400 font-semibold' : 'text-gray-400 hover:text-white'}`}>
                <FaProjectDiagram /> Projects
              </li>
            </ul>
          </nav>
        </aside>

        
        <main className="flex-1 overflow-y-auto p-4 md:p-10 bg-gray-900">
          {renderContent()}
        </main>
      </div>

      
      <footer className="bg-gray-800 text-gray-400 py-4">
        <div className="flex justify-center gap-5 text-xl">
          <a href="https://web.facebook.com/fritztacanay/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/damn_itx.fritxzz/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/fritz-gerald-tacanay-6973a5361/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://github.com/fritzgwapo0907" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
