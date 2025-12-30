import React from 'react';

const Projects = ({ projectList }) => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 text-center flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <h1 className="text-4xl font-bold text-blue-500 mb-12">Projects</h1>
      <ul className="flex flex-wrap justify-center">
        {projectList.map((item) => (
          <li
            key={item.id}
            className="w-[300px] m-3 p-3 bg-gray-800 rounded-lg hover:scale-105 transition-all duration-300 flex flex-col justify-between h-[400px]"
          >
            <img
              src={item.imageUrl}
              alt={item.projectTitle}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h2 className="text-lg font-bold text-white mb-2">{item.projectTitle}</h2>
            <p className="text-sm text-gray-400 mb-4">{item.description}</p>
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Project live
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;