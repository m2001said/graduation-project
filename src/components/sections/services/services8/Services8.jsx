import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Services8 = () => {
  const { pathname } = useLocation();
  const Services = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.services;
    } else {
      return state.template8.services;
    }
  });
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
    <section className="section8 lg:mb-24" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & Image*/}
          <div
            className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-offset="300"
            style={{
              backgroundImage: `url(${Services.UrlImg})`,
            }}
          >
            <h2 className="h2 text-accent mb-6 serviceC">{Services.title}</h2>
            <h3 className="h3 max-w-[455px] mb-16 serviceC">{Services.titleDescription}</h3>
            <button className="btn btn-sm serviceC">{Services.btnText}</button>
          </div>
          {/* services */}
          <div className="flex-1 " data-aos="fade-left" data-aos-duration="1200" data-aos-offset="300">
            {/* services list */}
            <div className="">
              {Services.Data.map((service, index) => {
                // Destructure

                return (
                  <div className="border-b border-white/20 h-[146px] mb-[36px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{service.name}</h4>
                      <p className="font-secondary leading-tight">{service.description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="" className="btn w-9 h-9 mb-[24px] flex justify-center items-center">
                        (/){/* Unicode arrow character */}
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {service.link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services8;
