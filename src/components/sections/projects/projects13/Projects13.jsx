/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
const Projects13 = () => {
  const Cards = ({ img, title, desc }) => {
    const projects = useSelector((state) => state.template13.projects);

    return (
      <div className="lg:pb-0 pb-4 w-full transform transition ease-out duration-300 hover:scale-[1.03]">
        <img src={img} alt="" className="lg:w-full md:w-52 mx-auto" />
        <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
          <span className="text-[var(--color-13-green)] pt-2">
            <p className="text-xl primary-font font-medium text-[var(--color-13-green)]">{title}</p>
            <p className="text-[var(--color-13-green)]">{desc}</p>
          </span>
          <img src={projects.arrup} className="text-2xl rotate-45 w-8" />
        </div>
      </div>
    );
  };
  const projects = useSelector((state) => state.template13.projects);

  return (
    <div id="projects13" className="relative overflow-hidden bg-[var(--fff6ed)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--color-13-green)] absolute -bottom-7 -left-[30px] -right-[30px] py-3 rounded-[50%] "></div>
      <div className="xl:w-[1200px] max-w-[75%] mx-auto px-3 pt-8">
        <section className="relative lg:py-0 py-8 ">
          <p className="text-center text-[var(--fb7a3f)]">{projects.title}</p>
          <h1 className="text-center text-[#054130] primary-font lg:text-5xl text-xl font-semibold">{projects.heading}</h1>
          <div className="md:flex items-center justify-between lg:pt-20 pt-8 gap-x-16">
            <Cards img={projects.img1} title={projects.title1} desc={projects.desc1} />
            <Cards img={projects.img2} title={projects.title2} desc={projects.desc2} />
            <Cards img={projects.img3} title={projects.title3} desc={projects.desc3} />
          </div>
          <button className="rounded-full mx-auto mt-12 px-4 py-2 items-center text-sm bg-[#fd7b747] text-[var(--white-13)] gap-2 transition ease-out duration-300 hover:scale-110 ">
            <p className="text-[var(--fb7a3f)]">Load more</p>
            <img src={projects.load} className="text-xl w-8" />
          </button>
          {[1, 2, 3, 4].map((_, index) => (
            <img src={projects.arrup} key={index} className="text-[var(--fb7a3f)] text-4xl absolute top-0  left-0 rotate-[315deg] w-8" />
          ))}
        </section>
        <section className="flex items-center justify-between mt-24 mb-16 gap-2">
          <span className="flex items-center  flex-col gap-x-2">
            <img src={projects.logo1} className="w-6 text-[var(--black-13)] text-3xl" />
            <p className="font-medium primary-font text-xl text-[var(--black-13)]">{projects.logo1talk}</p>
          </span>
          <span className="flex items-center  flex-col gap-x-2">
            <img src={projects.logo2} className="w-6 text-[var(--black-13)] text-3xl" />
            <p className="font-medium primary-font text-xl text-[var(--black-13)]">{projects.logo2talk}</p>
          </span>
          <span className="flex items-center  flex-col gap-x-2">
            <img src={projects.logo3} className="w-6 text-[var(--black-13)] text-3xl" />
            <p className="font-medium primary-font text-xl text-[var(--black-13)]">{projects.logo3talk}</p>
          </span>
          <span className="flex items-center  flex-col gap-x-2">
            <img src={projects.logo4} className="w-6 text-[var(--black-13)] text-3xl" />
            <p className="font-medium primary-font text-xl text-[var(--black-13)]">{projects.logo4talk}</p>
          </span>
          <span className="flex items-center  flex-col gap-x-2">
            <img src={projects.logo5} className="w-6 text-[var(--black-13)] text-3xl" />
            <p className="font-medium primary-font text-xl text-[var(--black-13)]">{projects.logo5talk}</p>
          </span>
        </section>
        <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
          <div className="lg:w-1/2">
            <p className="text-[var(--fb7a3f)]">{projects.OurNewsletter}</p>
            <h1 className="text-[var(--green-13)] primary-font lg:text-4xl text-xl font-semibold pt-4 pb-6">
              {projects.Subscribeourdaily}
              <span className="underline decoration-[var(--color-13-yel)]"> {projects.Newsletter}</span> {projects.forupdate}
            </h1>
            <p className="text-[var(--black-13)] leading-8">{projects.subsdesc}</p>
            <div className="relative flex items-center pt-8">
              <input type="email" placeholder="Enter your Email" className="bg-[var(--white-13)] rounded-full w-full md:px-6 px-2 h-16 outline-none" />
              <button className="absolute md:right-4 right-1 rounded-full md:px-8 flex items-center md:text-sm text-xs bg-[var(--fd7b47)] text-[var(--white-13)] gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p>{projects.Subs}</p>
                <img src={projects.arrR} className="text-xl h-12" />
              </button>
            </div>
          </div>
          <div className="lg:py-0 py-8 flex justify-center">
            <img src={projects.img2} alt="" className="lg:w-100 w-80 " />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects13;
