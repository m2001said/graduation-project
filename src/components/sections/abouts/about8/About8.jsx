import React, { useState, useEffect } from "react";

const About8 = ({ template }) => {
  const about = template.about;

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById("about").getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0;

      if (isVisible) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <div className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top" style={{ backgroundImage: `url(${about.imgUrl})` }}>
            <img src={about.imgUrl} />
          </div>
          {/* text */}
          <div className="flex-1">
            <h2 className="h2 text-accent">{about.title}</h2>
            <h3 className="h3 mb-4">{about.subtitle}</h3>
            <p className="mb-6">{about.description}</p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? about.numbers[0] : null}</div>
                <div className="font-primary text-sm tracking-[2px]">
                  <span>{about.type[0]}</span>
                  <br /> {about.typeOfExpericnce[0]}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? about.numbers[1] : null}</div>
                <div className="font-primary text-sm tracking-[2px]">
                  <span>{about.type[1]}</span>
                  <br /> {about.typeOfExpericnce[1]}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? about.numbers[2] : null}</div>
                <div className="font-primary text-sm tracking-[2px]">
                  <span>{about.type[2]}</span>
                  <br /> {about.typeOfExpericnce[2]}
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">{about.buttonText}</button>
              <a href="#" className="text-gradient btn-link">
                {about.linkText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About8;
