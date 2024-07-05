import React, { useEffect } from "react";

const Services8 = ({ template }) => {
  const services = template.services;

  useEffect(() => {
    // AOS initialization and refresh removed
    return () => {};
  }, []);

  return (
    <section className=" section8 lg:mb-24" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & Image*/}
          <div
            className="flex-1  lg:bg-bottom bg-no-repeat  mb-12 lg:mb-0"
            style={{
              backgroundImage: `url(${services.imgUrl})`,
            }}
          >
            <h2 className="h2 text-accent mb-6 serviceC">{services.title}</h2>
            <h3 className="h3 max-w-[455px] mb-16 serviceC">{services.subtitle}</h3>
            <button className="btn btn-sm serviceC">{services.buttonText}</button>
          </div>
          {/* services */}
          <div className="flex-1 ">
            {/* services list */}
            <div className="">
              {services.services.map((service, index) => {
                // Destructure

                return (
                  <div className="border-b border-white/20 h-[146px] mb-[36px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{service.title}</h4>
                      <p className="font-secondary leading-tight">{service.description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="" className="btn w-9 h-9 mb-[24px] flex justify-center items-center">
                        (/){/* Unicode arrow character */}
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {service.linkText}
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
