import React from "react";
import { useSelector } from "react-redux";

const Services = () => {
  const services = useSelector((state) => state.template17.services);

  return (
    <>
      <div className="py-14 md:py-28 bg-[var(--website-17-color-4)]">
        <div className="container17">
          <h1
            
            className="pb-16 tracking-wider text-2xl font-semibold text-[var(--website-17-color-4)] text-center"
          >
            {services.title}
          </h1>

          {/* Cards section */}
          <div >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              {services.icons.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex justify-center items-center flex-col gap-2 px-2"
                >
                  <p className="text-[var(--website-17-color-6)] p17">{item.description}</p>
                  <p className="text-5xl rotate-90 text-[var(--website-17-color-2)] text-center translate-x-5">.....</p>
                  <img src={item.icon} alt={`Icon ${item.id}`} className="text-5xl text-[var(--website-17-color-4)] logo-17" />
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
