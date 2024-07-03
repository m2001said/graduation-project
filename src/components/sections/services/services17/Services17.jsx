import React from "react";
 
const Services17 = ({ template }) => {
  const services = template.services;
console.log(services.services) ;
  return (
    <div className="py-14 md:py-28 bg-[var(--website-17-color-4)]">
      <div className="container17">
        <h1 className="pb-16 tracking-wider text-2xl font-semibold text-[var(--website-17-color-4)] text-center">
          {services.title}
        </h1>

        {/* Cards section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
          {services.services.map((item, index) => (
            <div
              key={index}
              className="text-center flex justify-center items-center flex-col gap-2 px-2"
            >
              <p className="text-[var(--website-17-color-6)] p17">{item.description}</p>
              {/* Adjusted the text styling below */}
              <p className="text-5xl rotate-90 text-[var(--website-17-color-2)] text-center translate-x-5">.....</p>
              <img src={item.icon} alt={`Service ${index + 1}`} className="text-5xl text-[var(--website-17-color-4)] logo-17" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services17;
