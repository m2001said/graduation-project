import React, { useState } from "react";

const Services9 = ({ template }) => {
  const services = template.services;

  // State to track the index of the hovered card
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle hover on cards
  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <main className="bg-[var(--website-9-color-3)] mt-20 lg:py-20 service-99">
      <div className="container mx-auto px-3 text-center" service-9-div="true">
        <p className="uppercase text-xl text-[var(--website-9-color-1)] py-8">{services.title}</p>

        <div className="flex lg:flex-row flex-col gap-x-16 gap-y-8 py-20">
          {services.services.map((service, index) => (
            <div
              key={index}
              className={`card bg-[var(--website-9-color-1)] rounded-[var(--border-radius-lg-9)] lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl hover:-translate-y-10 transition-transform  duration-500 ${
                hoveredIndex !== null && hoveredIndex !== index ? 'opacity-45  ' : ''
              }`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button className="bg-[var(--website-9-color-2)] text-[var(--website-9-color-3)] rounded-full flex justify-center items-center w-20 h-20 shadow-2xl mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-2/3 h-1/2 m-auto bg-[var(--website-9-color-2)] hover:bg-transparent hover:-translate-x-11 transition-transform duration-300 active:bg-[var(--website-9-color-6)]"
                />
              </button>
              <p className="text-lg font-medium py-4 text-[var(--website-9-color-3)]">{service.title}</p>
              <p className="w-2/3 mx-auto text-[var(--website-9-color-3)]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services9;
