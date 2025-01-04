import React from 'react';

const projects = [
  {
    title: 'StudyMate',
    description: 'An educational platform for effective revision and gamified learning.',
    link: '#',
  },
  {
    title: 'Scheduler App',
    description: 'A scheduling web app using React and MERN stack.',
    link: '#',
  },
  {
    title: 'AI-Powered Document Retrieval',
    description: 'An AI model for retrieving and correlating user document data.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 px-6 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-indigo-500 hover:underline">still in development</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
