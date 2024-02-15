import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero13 = () => {
  const heroData = useSelector((state) => state.template13.hero);

  // Extracting data from heroData
  const { title, subtitle, servicesButtonText, projectsButtonText, images, icon, num } = heroData;

  return (
    <div id="hero13" className="relative overflow-hidden bg-[var(--color-13-green)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--fff6ed)] absolute -bottom-7 -left-[30px] -right-[-30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] mx-auto px-3 lg:flex items-center justify-between">
        <div className="text-[var(--white-13)] lg:w-1/2">
          <h1 className="lg:text-7xl text-2xl leading-normal pb-8 primary-font font-medium">{title}</h1>
          <p className="text-[var(--white-13)]">{subtitle}</p>
          <div className="flex items-center gap-x-2 ">
            <button className="rounded-full px-3 py-2 flex items-center text-sm bg-[#fd7b47] gap-2 transition ease-out duration-300 transform hover:scale-110">
              <p className="text-[var(--white-13)]">{servicesButtonText}</p>
              <img src={icon} className="w-10 h-auto text-xl" alt="arrow" />
            </button>
            <button className="rounded-full px-3 py-2 flex items-center flex-row text-sm  gap-2 transition ease-out duration-300 transform hover:scale-110">
              <a href="#project13"></a>
              <p className="text-[var(--white-13)]">{projectsButtonText} </p>
              <img src={icon} className="w-10 h-auto text-xl" alt="arrow" style={{ filter: "invert(100%)" }} />
            </button>
          </div>
        </div>
        <div className="lg:w-[35%] w-72 relative lg:mx-0 mx-auto justify-end lg:py-0  py-8">
          <img src={images.main} alt="" className="lg:w-full" />
          <img src={images.secondary} alt="" className="sm:block hidden lg:w-40 w-1/4 absolute bottom-16 lg:-left-20 -left-10" />
          <p className="absolute top-10 right-0 rotate-90 text-[var(--white-13)] font-medium">{num}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero13;
