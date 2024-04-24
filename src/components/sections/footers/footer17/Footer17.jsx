import React from "react";
import { useSelector } from "react-redux";

const Footer17 = () => {
  const footer = useSelector((state) => state.template17.footer);

  return (
    <>
      <div className="text-[var(--color17-white)] mt-20">
        <div
          data-aos="fade-down"
          className="container17 bg-gradient-to-b from-[var(--color17-primary)] to-[var(--color17-primaryDark)] rounded-t-3xl"
        >
          {/* heading section */}
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            {footer.heading}
          </h1>

          {/* grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-[var(--color17-white)] pb-6">
            {footer.icons.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <img src={item.icon} className="text-5xl icon-17" alt={`Icon ${index}`} />
                </div>
                {/* Rendering different icon types based on item properties */}
                {item.upAddress && (
                  <p>
                    {item.upAddress},
                    <br />
                    {item.downAddress}
                  </p>
                )}
                {item.email1 && (
                  <div>
                    <p>{item.email1}</p>
                    <p>{item.email2}</p>
                  </div>
                )}
                {item.phone1 && (
                  <div>
                    <p>+{item.phone1}</p>
                    <p>+{item.phone2}</p>
                    <p>+{item.whatsapp}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* copyright section */}
          <div className="flex justify-between p-4 items-center">
            <p className="text-[var(--color17-dark)]">{footer.copyright}</p>
            <div className="flex items-center text-[var(--color17-dark)] gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer17;
