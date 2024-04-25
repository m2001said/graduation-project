import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Projects13 = () => {
  const projects = useSelector((state) => state.template13.projects);

  const Cards = ({ img, title, desc }) => (
    <div className="lg:pb-0 pb-4 w-full transform transition ease-out duration-300 hover:scale-[1.03]">
      <img src={img} alt={title} className="lg:w-full md:w-52 mx-auto" />
      <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
        <span className="text-[var(--color-darkG-13)] pt-2">
          <p className="text-xl primary-font font-medium text-[var(--color-darkG-13)]">{title}</p>
          <p className="text-[var(--color-darkG-13)]">{desc}</p>
        </span>
        {projects.arrowUp && <img src={projects.arrowUp} alt="arrow up" className="text-2xl rotate-45 w-8" />}
      </div>
    </div>
  );

  return (
    <div id="projects13" className="relative overflow-hidden bg-[var(--fff6ed)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--color-darkG-13)] absolute -bottom-7 -left-[30px] -right-[30px] py-3 rounded-[50%]"></div>
      <div className="xl:w-[1200px] max-w-[75%] mx-auto px-3 pt-8">
        <section className="relative lg:py-0 py-8">
          <p className="text-center text-[var(--color-13-yel)]">{projects.title}</p>
          <h1 className="text-center text-[#054130] primary-font lg:text-5xl text-xl font-semibold">{projects.heading}</h1>
          <div className="md:flex items-center justify-between lg:pt-20 pt-8 gap-x-16">
            {projects.project && projects.project.map((project, index) => <Cards key={index} img={project.img} title={project.title} desc={project.desc} />)}
          </div>
          <button className="rounded-full mx-auto mt-12 px-4 py-2 items-center text-sm bg-[#fd7b74] text-[var(--color-darkG-13)] gap-2 transition ease-out duration-300 hover:scale-110">
            <p className="text-[var(--color-13-yel)]">Load more</p>
            {projects.load && <img src={projects.load} alt="load icon" className="text-xl w-8" />}
          </button>
          {[1, 2, 3, 4].map((_, index) => (
            <img key={index} src={projects.arrowUp} alt="arrow up" className="text-[var(--color-13-yel)] text-4xl absolute top-0 left-0 rotate-[315deg] w-8" />
          ))}
        </section>

        <section className="flex items-center justify-between mt-24 mb-16 gap-2">
          {projects.logos &&
            projects.logos.map((logo, index) => (
              <span className="flex items-center flex-col gap-x-2" key={index}>
                {logo.logo && <img src={logo.logo} alt={logo.logoTitle} className="w-6 text-[var(--color-darkG-13)] text-3xl" />}
                <p className="font-medium primary-font text-xl sm:text-sm text-[var(--color-darkG-13)]">{logo.logoTitle}</p>
              </span>
            ))}
        </section>

        <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
          <div className="lg:w-1/2">
            <p className="text-[var(--color-13-yel)]">{projects.subscribe[0]?.title}</p>
            <h1 className="text-[var(--green-13)] primary-font lg:text-4xl text-xl font-semibold pt-4 pb-6">
              {projects.subscribe[0]?.description}
              <span className="underline decoration-[var(--color-13-yel)]"> {projects.subscribe[0]?.Newsletter}</span> {projects.subscribe[0]?.forupdate}
            </h1>
            <p className="text-[var(--color-darkG-13)] leading-8">{projects.subscribe[0]?.button}</p>
            <div className="relative flex items-center pt-8">
              <input type="email" placeholder="Enter your Email" className="bg-[var(--color-darkG-13)] rounded-full w-full md:px-6 px-2 h-16 outline-none" />
              <button className="absolute md:right-4 right-1 rounded-full md:px-8 flex items-center md:text-sm text-xs bg-[var(--color-13-yel)] text-[var(--color-darkG-13)] gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p className="text-[var(--color-darkG-13)]">{projects.subscribe[0]?.button}</p>
                {projects.subscribe[0]?.icon && <img src={projects.subscribe[0]?.icon} alt="right arrow" className="text-xl h-12" />}
              </button>
            </div>
          </div>
          <div className="lg:py-0 py-8 flex justify-center">
            {projects.subscribe[0]?.img && <img src={projects.subscribe[0].img} alt="subscribe image" className="lg:w-100 w-80 " />}
          </div>
        </section>
      </div>
    </div>
  );
};

Projects13.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Projects13;
