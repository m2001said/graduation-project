import React from "react";

const Projects13 = ({ template }) => {
  const projects = template.projects;

  const Cards = ({ project }) => {
    return (
      <div className="lg:pb-0 pb-4 w-full transform transition ease-out duration-300 hover:scale-[1.03]">
        <img src={project.imgUrl} alt={project.title} className="lg:w-full md:w-52 mx-auto" />
        <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
          <span className="text-[var(--website-13-color-1)] pt-2">
            <p className="text-xl primary-font font-medium text-[var(--website-13-color-1)]">{project.title}</p>
            <p className="text-[var(--website-13-color-1)]">{project.description}</p>
          </span>
          {project.icon && <img src={project.icon} alt="icon" className="text-2xl w-8" />}
        </div>
      </div>
    );
  };

  return (
    <div id="projects13" className="relative overflow-hidden bg-[var(--website-13-color-5)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--website-13-color-1)] absolute -bottom-7 -left-[30px] -right-[30px] py-3 rounded-[50%]"></div>
      <div className="xl:w-[1200px] max-w-[75%] mx-auto px-3 pt-8">
        <section className="relative lg:py-0 py-8">
          <p className="text-center text-[var(--website-13-color-4)]">{projects.title}</p>
          <h1 className="text-center text-[#054130] primary-font lg:text-5xl text-xl font-semibold">{projects.description}</h1>
          <div className="md:flex items-center justify-between lg:pt-20 pt-8 gap-x-16">
            {projects.projects &&
              projects.projects.map((project, index) => (
                <Cards key={index} project={project} />
              ))}
          </div>
          <div className="flex justify-center gap-2 flex-wrap ">
            {projects.buttons &&
              projects.buttons.map((button, index) => (
                <button
                  key={index}
                  className="rounded-full mx-auto mt-12 px-4 py-2 items-center text-sm bg-[var(--website-13-color-4)] text-[var(--website-13-color-1)] gap-2 transition ease-out duration-300 hover:scale-110"
                >
                  <p className="text-[var(--website-13-color-1)]">{button.buttonText}</p>
                </button>
              ))}
          </div>
          {[1, 2, 3, 4].map((_, index) => (
            <img
              key={index}
              src={projects.icon}
              alt="arrow up"
              className="text-[var(--website-13-color-4)] text-4xl absolute top-0 left-0 rotate-[315deg] w-16"
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects13;
