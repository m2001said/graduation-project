import React from "react";
import { useSelector } from "react-redux";


const Footer17 = ({ template }) => {
  const footer = template.footer;

  return (
    <>
      <div className="text-[var(--website-17-color-4)] mt-20">
        <div className="container17 bg-gradient-to-b from-[var(--website-17-color-1)] to-[var(--website-17-color-2)] rounded-t-3xl">
          {/* heading section */}
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            {footer.title}
          </h1>

          {/* grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-[var(--website-17-color-4)] pb-6">
            {footer.medias.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <img src={item.icon} className="text-5xl icon-17" alt={`Icon ${index}`} />
                </div>
                {/* Rendering different icon types based on item properties */}
                <p className="font-bold">{item.title}</p>
                <p>{item.subtitle}</p>
               </div>
            ))}
          </div>

          {/* footer section */}
          <div className="flex justify-between p-4 items-center">
             <a href="#" className="text-[var(--website-17-color-4)]">
                {footer.description}
              </a>
               <a href="" className="text-[var(--website-17-color-4)]">Terms of Service</a>
              <a href="" className="text-[var(--website-17-color-4)]">Privacy Policy</a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer17;
