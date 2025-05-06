const projects = [
  {
    title: 'CALCULATOR',
    description: 'A sleek portfolio built with React and Vite.',
    imageUrl: 'https://example.com/portfolio-image.jpg', // Replace with your image URL
    link: 'calculator/index.html', // Replace with your project link
  },
  {
    title: 'ARRAY_OBJECTS',
    description: 'A full-stack task management app with user authentication.',
    imageUrl: 'https://example.com/task-manager-image.jpg', // Replace with your image URL
    link: 'array_objects/index.html', // Replace with your project link
  },
  {
    title: 'CONVERTER',
    description: 'An e-commerce platform built with Node.js and Express.',
    imageUrl: 'https://example.com/ecommerce-image.jpg', // Replace with your image URL
    link: 'converter/index.html', // Replace with your project link
  },
  {
    title: 'MATH OPERATION',
    description: 'A simple blog platform with CRUD functionality.',
    imageUrl: 'https://example.com/blog-app-image.jpg', // Replace with your image URL
    link: 'loop/index.html', // Replace with your project link
  },
  {
    title: 'to-do-list',
    description: 'A weather forecasting app using OpenWeather API.',
    imageUrl: 'https://example.com/weather-dashboard-image.jpg', // Replace with your image URL
    link: 'to-do-client-omega.vercel.app', // Replace with your project link
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
