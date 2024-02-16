import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

// img
import Img1 from "../../../assets/images/images8/portfolio-img1.png";
import Img2 from "../../../assets/images/images8/portfolio-img2.png";
import Img3 from "../../../assets/images/images8/portfolio-img3.png";

const Work8 = () => {
  const { work } = useSelector((state) => state.template8);
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

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="300">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">{work.titlework}</h2>
              <p className="max-w-sm mb-16">{work.description}</p>
              <button className="btn btn-sm">{work.btnText}</button>
            </div>
            {/* Image */}
            <div className="overflow-hidden group relative border-2 border-white/50 rounded-xl">
              <div>
                {/* Overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* Image */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img1}
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-offset="200"
                />
                {/* Pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col flex gap-y-10" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="300">
            {/* Image */}
            <div className="overflow-hidden group relative border-2 border-white/50 rounded-xl">
              <div>
                {/* Overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* Image */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img2}
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-offset="200"
                />
                {/* Pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="overflow-hidden group relative border-2 border-white/50 rounded-xl">
              <div>
                {/* Overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* Image */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-offset="200"
                />
                {/* Pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work8;
