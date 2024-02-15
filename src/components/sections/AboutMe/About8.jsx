import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About8 = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });

    // Optional: Refresh AOS when the component updates
    AOS.refresh();

    // Clean up AOS when the component unmounts
    return () => AOS.refreshHard();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById("about").getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0;

      if (isVisible) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-offset="300"
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></div>
          {/* text */}
          <div className="flex-1" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="300">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a Freelance Frontend Developer with over 5 years of experience.</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora accusamus porro tempore quibusdam ab nesciunt voluptatum magnam doloribus
              corrupti molestiae.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? 13 : null}</div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? 15 : null}+</div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? 12 : null}+</div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About8;
