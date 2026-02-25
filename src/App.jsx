import './global.css';
import { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

function App() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

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
    {
      title: 'UVify',
      description: 'UVify provides accurate UV index readings and alerts to keep you safe under the sun..',
      imageUrl: '/UVify.png',
      link: 'https://v0-uvifymain.vercel.app/',
    },
  ];

  const webinars = [
    {
      title: "Cybersecurity for Everyone",
      issuer: "Department of Information and Communications Technology (DICT-CAR)",
      imageUrl: "/webinar.png",
      pdfUrl: "/Fritz_Tacanay.pdf",
    },
  ];

  const certificates = [
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      imageUrl: "/dataanalytics.png",
      pdfUrl: "/DataAnalyticsEssentials.pdf",
    },
    {
      title: "Apply AI-Update Your Resume",
      issuer: "Cisco Networking Academy",
      imageUrl: "/Apply_AI-_Update_Your_Resume_.jpg",
      pdfUrl: "/Apply_AI-_Update_Your_Resume.pdf",
    },
    {
      title: "Apply AI: Analyze Customer Reviews",
      issuer: "Cisco Networking Academy",
      imageUrl: "/Apply_AI-_Analyze_Customer.jpg",
      pdfUrl: "/Apply_AI-_Analyze_Customer.pdf",
    },
    {
      title: "AI Fundamentals With IBM Skills Build ",
      issuer: "Cisco Networking Academy",
      imageUrl: "/AI_Fundamentals_with_IBM_SkillsBuild.jpg",
      pdfUrl: "/AI_Fundamentals_with_IBM_SkillsBuild.pdf",
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      imageUrl: "/certificate_1.jpg",
      pdfUrl: "/_certificate_1.pdf",
    },
    {
      title: "Introduction To Data Science",
      issuer: "Cisco Networking Academy",
      imageUrl: "/certificate_2.jpg",
      pdfUrl: "/_certificate_2.pdf",
    },
    {
      title: "Introduction To Modern AI",
      issuer: "Cisco Networking Academy",
      imageUrl: "/certificate_3.jpg",
      pdfUrl: "/_certificate_3.pdf",
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
              and that curiosity has grown into a deep interest in software development, web technologies,
              and building real-world solutions through code.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-800 px-4 py-2 rounded-lg">🎓 4th Year BSIT</div>
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
    <div className="flex flex-col items-center px-4 text-gray-300 space-y-10 text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">About Me</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
          <img src="/bc05b6ce-8fe0-4fe8-a3bc-07447d82350f.jpg" alt="Tech 1" className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold">Officer of Mandated Org.</h3>
          <p className="text-sm text-gray-400">
            I'm a Respresentative of 4A in the Information, Communication, and Technology Student Organization.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
          <img src="/3e0fc681-1799-48fd-ae21-ad53d434a229.jpg" alt="Tech 2" className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold">Academic Achiever.</h3>
          <p className="text-sm text-gray-400">
            Consistent Dean's Lister since first year college.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
          <img src="/ec007f56-4ccb-4cc0-9345-a6e41e48a448.jpg" alt="Tech 3" className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold">My Capstone Groupmates</h3>
          <p className="text-sm text-gray-400">
            wala lang, cute lang namin dito.
          </p>
        </div>
      </div>
      <p className="text-lg font-semibold">
          I'm currently a student pursuing a Bachelor of Science in Information Technology (BSIT). 
          My journey in tech began with a curiosity about how websites and applications work behind the scenes, 
          and that curiosity has grown into a deep interest in software development, web technologies, 
          and building real-world solutions through code.
        </p>
        <p className="text-lg font-semibold">
          This portfolio is a collection of some of the projects I’ve worked on so far. I’m excited to continue 
           learning, building, and sharing my progress along the way.
        </p>
    </div>
  );


      case "Projects":
        return (
          <div className="flex flex-col items-center text-center px-4 text-gray-200 space-y-10">
            <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 rounded-xl shadow hover:shadow-xl hover:bg-gray-700 transition"
                >
                  <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        );

      case "Webinars":
  return (
    <div className="flex flex-col items-center text-center px-4 text-gray-200 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold">Webinars Attended</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {webinars.map((webinar, index) => (
          <a
            key={index}
            href={webinar.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
              <img
                src={webinar.imageUrl}
                alt={webinar.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{webinar.title}</h3>
              <p className="text-sm text-gray-400">{webinar.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

      case "Certificates":
  return (
    <div className="flex flex-col items-center text-center px-4 text-gray-200 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold">Certificates</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer flex flex-col items-center">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
            </div>
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

        <aside className="w-full md:w-64 bg-gray-800 p-4 md:p-6 sticky top-0 z-10">

          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">My Portfolio</h2>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col gap-4 bg-gray-700 p-4 rounded-lg mb-4">
              <li onClick={() => { setActive("Home"); setMenuOpen(false); }} className="cursor-pointer flex items-center gap-2"><FaHome /> Home</li>
              <li onClick={() => { setActive("About"); setMenuOpen(false); }} className="cursor-pointer flex items-center gap-2"><FaUser /> About</li>
              <li onClick={() => { setActive("Projects"); setMenuOpen(false); }} className="cursor-pointer flex items-center gap-2"><FaProjectDiagram /> Projects</li>
              <li onClick={() => { setActive("Certificates"); setMenuOpen(false); }} className="cursor-pointer flex items-center gap-2"><FaProjectDiagram /> Certificates</li>
              <li onClick={() => { setActive("Webinars"); setMenuOpen(false); }} className="cursor-pointer flex items-center gap-2"><FaProjectDiagram /> Webinars</li>
            </ul>
          )}

          {/* Desktop Sidebar */}
          <nav className="hidden md:flex md:flex-col w-full">
            <h2 className="text-2xl font-bold mb-8">My Portfolio</h2>
            <ul className="flex flex-col gap-6">
              <li onClick={() => setActive("Home")} className="cursor-pointer flex items-center gap-2"><FaHome /> Home</li>
              <li onClick={() => setActive("About")} className="cursor-pointer flex items-center gap-2"><FaUser /> About</li>
              <li onClick={() => setActive("Projects")} className="cursor-pointer flex items-center gap-2"><FaProjectDiagram /> Projects</li>
              <li onClick={() => setActive("Certificates")} className="cursor-pointer flex items-center gap-2"><FaProjectDiagram /> Certificates</li>
              <li onClick={() => setActive("Webinars")} className="cursor-pointer flex items-center gap-2"><FaProjectDiagram /> Webinars</li>
      
            </ul>
          </nav>

        </aside>

        <main className="flex-1 p-10">
          {renderContent()}
        </main>

      </div>

      <footer className="bg-gray-800 py-4 flex justify-center gap-6">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
      </footer>
    </div>
  );
}

export default App;
