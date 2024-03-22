import React from "react";
import {useSelector} from "react-redux";
const Footer17 = () => {
  const footer = useSelector((state) => state.template17.footer);
  return (
    <>
      <div className="text-[var(--color17-white)] mt-20">
        <div   data-aos='fade-down'
          className="container17 bg-gradient-to-b from-[var(--color17-primary)]
    to-[var(--color17-primaryDark] rounded-t-3xl"
        >
          {/* heading section */}
          <h1
            className="py-10 text-3xl font-bold 
          text-yellow text-center"
          >
{footer.heading}          </h1>

          {/* grid section  */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 gap-14 border-b-2 border-[var(--color17-white)]
            pb-6 "
          >
            {/* Address section  */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <img src={footer.locationIcon} className="text-5xl icon-17" />
              </div>
              <p>
                {" "}
                {footer.upAddress},
                <br />
{footer.downAddress}              </p>
            </div>

            {/* email section */}
            <div className="text-center space-y-4space-y-4 ">
              <div className="flex justify-center">
                <img src={footer.emailIcon} className="text-5xl icon-17" />
              </div>
              <div>
                <p>{footer.email1}</p>
                <p>{footer.email2}</p>
              </div>
            </div>

            {/* phone section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <img src={footer.phoneIcon} className="flex justify-center icon-17" />
              </div>
              <div>
            <p>+{footer.phone1}</p>
                <p>+{footer.phone2}</p>
                <p>+{footer.whatsapp}</p>
              </div>
            </div>
          </div>
          {/* copyright  section  */}
          <div className="flex  justify-between p-4 items-center">
            <p className="text-[var(--color17-dark)]" >{footer.copyright}</p>
            <div className="flex items-center text-[var(--color17-dark)] gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#"> Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer17;
