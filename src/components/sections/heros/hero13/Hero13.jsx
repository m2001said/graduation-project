import React from "react";

const Hero13 = ({ template }) => {
  const { title, description, buttons, icon, mainImage, secondaryImage } = template.hero;

  return (
    <div id="hero13" className="relative overflow-hidden bg-[var(--website-13-color-1)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--website-13-color-6)] absolute -bottom-7 -left-[30px] -right-[-30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] mx-auto px-3 lg:flex items-center justify-between">
        <div className="text-[var(--website-13-color-3)] lg:w-1/2 relative">
          <h1 className="lg:text-7xl text-2xl text-[var(--website-13-color-3)] leading-normal pb-8 primary-font font-medium">{title}</h1>
          <p className="text-[var(--website-13-color-3)]">{description}</p>
          <div className="flex items-center gap-x-2 mt-4">
            {buttons.map((btn, index) => (
              <a key={index} href={btn.url}>
                <button className="rounded-full px-4 py-2 flex items-center text-sm bg-[var(--website-13-color-4)] text-[var(--website-13-color-3)] gap-2 transition ease-out duration-300 transform hover:scale-110">
                  <span>{btn.buttonText}</span>
                  <img src={icon} className="w-6 h-auto" alt="arrow" />
                </button>
              </a>
            ))}
          </div>
        </div>
        <div className="lg:w-[35%] w-72 relative lg:mx-0 mx-auto justify-end lg:py-0 py-8">
          <img src={mainImage} alt={`Image 1`} className="lg:w-full mb-4 rounded-lg shadow-lg" style={{ maxWidth: "100%", height: "auto" }} />
          <img
            src={secondaryImage}
            alt={`Image 2`}
            className="sm:block hidden lg:w-40 w-1/4 absolute bottom-16 lg:-left-20 -left-10"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero13;
