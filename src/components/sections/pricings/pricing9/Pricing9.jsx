import React from "react";

const ProjectCard = ({ project }) => (
  <div className=" bg-[var(--website-9-color-1)]  hover:translate-y-4  ease-in-out duration-500 rounded-br-3xl rounded-b-3xl  	 rounded-lg overflow-hidden shadow-2xl">
    <img
      src={project.imgUrl}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/path/to/fallback-image.jpg";  
      }}
      alt={project.description}
      className="w-full h-64 object-cover"
    />
    <div className="p-4  ease-in-out duration-300">
      <h2 className="text-xl text-[var(--website-9-color-4)] font-bold mb-2">{project.description}</h2>
      <p className="text-[var(--website-9-color-4)]  mb-2">{project.subtitle}</p>
      <div className="flex items-center gap-2 mb-4">
        {project.icons.map((icon, index) => (
          <div key={index} className="flex items-center gap-1">
            <img src={icon.icon} alt={icon.title} className="w-4 h-4" />
            <span className="text-[var(--website-9-color-4)]">{icon.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Pricing9 = ({ template }) => {
  const projects = template.projects.projects;

  return (
    <main id={template.projects.sectionId} className="py-20 bg-gradient-to-r from-[var(--website-9-color-1)] to-[var(--website-9-color-3)] ">
      <div className="container mx-auto px-3">
      <div className="lg:flex justify-between items-center  bg-[var(--website-9-color-1)]    p-4  
       shadow-2xl px-4 py-6 rounded-3xl flex ">
        <div className="lg:w-3/5">
          <h1 className="text-[var(--website-9-color-4)]  hover:text-[var(--website-9-color-3)] hover:translate-x-4 ease-in-out duration-300 text-2xl font-bold">{template.projects.title}</h1>
          <p className="text-lg text-[var(--website-9-color-4)] hover:text-[var(--website-9-color-3)] ease-in-out duration-300 ">{template.projects.description}</p>
          <p className="text-sm text-[var(--website-9-color-4)] hover:text-[var(--website-9-color-3)] ease-in-out duration-300">{template.projects.subtitle}</p>
        </div>
        <div className="bg-[var(--website-9-color-3)]    gap-x-3 lg:w-4/5 mt-6
         shadow-2xl px-4 py-6 rounded-3xl flex items-start">
          {template.projects.categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 text-[var(--website-9-color-4)]  border border-[var(--website-9-color-1)]     rounded-full hover:bg-[var(--website-9-color-1)]    ease-in-out duration-300  focus:outline-none"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <section className="mt-8 grid gap-4 lg:grid-cols-4 w-full md:grid-cols-2 grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      </div>
    </main>
  );
};

export default Pricing9;
