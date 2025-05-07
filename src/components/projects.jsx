const projects = [
  {
    title: 'CALCULATOR',
    description: 'A sleek calculator built with js.',
    imageUrl: '/screenshot_2025-05-07_182308.png',
    link: 'calculator/index.html', // Replace with your project link
  },
  {
    title: 'ARRAY_OBJECTS',
    description: 'A employee list system use to add employee.',
    imageUrl: '/screenshot_2025-05-07_182353.png',
    link: 'array_objects/index.html', // Replace with your project link
  },
  {
    title: 'CONVERTER',
    description: 'A converter platform built with js, css, and html.',
    imageUrl: '/screenshot_2025-05-07_182414.png',
    link: 'converter/index.html', // Replace with your project link
  },
  {
    title: 'MATH OPERATION',
    description: 'A simple loop built with js.',
    imageUrl: '/screenshot_2025-05-07_182434.png',
    link: 'loop/index.html', // Replace with your project link
  },
  {
    title: 'to-do-list',
    description: 'A to-do-list system built with react and express',
    imageUrl: '/screenshot_2025-05-07_205239.png',
    link: 'https://to-do-client-omega.vercel.app/', // Replace with your project link
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <h3>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto' }} />
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
}
