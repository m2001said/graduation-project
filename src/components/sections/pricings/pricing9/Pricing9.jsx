import React from "react";

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img
      src={project.imgUrl}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/path/to/fallback-image.jpg"; // Fallback image path
      }}
      alt={project.description}
      className="w-full h-64 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{project.description}</h2>
      <p className="text-gray-600 mb-2">{project.subtitle}</p>
      <div className="flex items-center gap-2 mb-4">
        {project.icons.map((icon, index) => (
          <div key={index} className="flex items-center gap-1">
            <img src={icon.icon} alt={icon.title} className="w-4 h-4" />
            <span>{icon.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Pricing9 = ({ template }) => {
  const projects = template.projects.projects;

  return (
    <main className="container mx-auto pt-8 px-3">
      <div className="lg:flex justify-between items-center hover:bg-gray-100 p-4 rounded-lg">
        <div className="lg:w-3/5">
          <h1 className="text-gray-800 text-2xl font-bold">{template.projects.title}</h1>
          <p className="text-lg text-gray-600">{template.projects.description}</p>
          <p className="text-sm text-gray-500">{template.projects.subtitle}</p>
        </div>
        <div className="flex gap-4 lg:w-2/5 lg:pt-0 pt-6">
          {template.projects.category.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:text-gray-900 hover:bg-gray-200 focus:outline-none"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <section className="mt-8 grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
};

export default Pricing9;
