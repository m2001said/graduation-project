import React from "react";
import { useSelector } from "react-redux";

const Services = () => {
  const services = useSelector((state) => state.template17.services);

  return (
    <>
      <div className="py-14 md:py-28 bg-gray-50">
        <div className="container17">
          <h1
            data-aos="fade"
            className="pb-16 tracking-wider text-2xl font-semibold text-[var(--color17-dark)] text-center"
          >
            {services.heading}
          </h1>

          {/* Cards section */}
          <div data-aos="fade" data-aos-delay="300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              {services.icons.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex justify-center items-center flex-col gap-2 px-2"
                >
                  <p className="text-[var(--color17-light)] p17">{item.paragraph}</p>
                  <p className="text-5xl rotate-90 text-[var(--color17-dark)] text-center translate-x-5">.....</p>
                  <img src={item.icon} alt={`Icon ${item.id}`} className="text-5xl text-[var(--color17-dark)] logo-17" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
