import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Work8 = () => {
  const { work } = useSelector((state) => state.template8);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });

    AOS.refresh();

    return () => AOS.refreshHard();
  }, []);

  return (
    <section className="section8" id="work">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 leading-tight text-accent">{work.title}</h2>
          <p className="max-w-sm mb-16">{work.description}</p>
          <button className="btn btn-sm mb-4">{work.btnText}</button>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10">
          {work.projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0 ${index % 2 === 0 ? "lg:flex-1" : "lg:flex-1 lg:order-2"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1200"
              data-aos-offset="300"
            >
              {/* text */}

              {/* Image */}
              <div className="overflow-hidden group relative border-2 border-white/50 rounded-xl">
                <div>
                  {/* Overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* Image */}
                  <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={project.UrlImg}
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-offset="200"
                  />
                  {/* Pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">{project.pretitle}</span>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">{project.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work8;
