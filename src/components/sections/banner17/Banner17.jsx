import React from "react";
import { useSelector } from "react-redux";
import PrimaryButton17 from "../shared/shared17/PrimaryButton17";
const Banner17 = () => {
  const banner = useSelector((state) => state.template17.banner);
  return (
    <>
      <div className="container17 py-14 relative">
        <div className="relative z-20">
          <h1
            className="py-8 tracking-wider text-2xl 
          font-semibold text-[var(--color17-dark)] text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {banner.heading}
          </h1>

          {/* text content section */}

          <div className="space-y-10 ">
            <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p className="text-[var(--color17-dark)] p17">
                  <span className="text-[var(--color17-primary)]"> {banner.coloredParagraph} </span> {banner.paragraph1}
                </p>
              </div>
              <div></div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div>
                <p className=" text-[var(--color17-dark)] p17">{banner.paragraph2}</p>
              </div>
            </div>
          </div>

          {/* button section */}

          <div data-aos="fade-up" data-aos-delay="500" data-aos-offset="0" className="flex justify-center mt-10 *:sm:mt-14">
            <PrimaryButton17 />
          </div>
        </div>

        {/* bg fruits pngs */}
        <div
          data-aos="fade-right"
          className="absolute top-5 -left-16 
        sm:bottom-0 sm:left-0 opacity-50  sm:opacity-100"
        >
          <img data-aos="fade-right" src={banner.leaf} alt="" className="max-w-[160px]" />
        </div>

        <div
          data-aos="fade-right"
          className="absolute -bottom-16 -left-16 
        sm:bottom-0 sm:left-0 opacity-50  sm:opacity-100"
        >
          <img src={banner.tomato} alt="" className="max-w-[280px]" />
        </div>
        <div data-aos="fade-left" className="hidden sm:block absolute top-10 right-0 transform -translate-y-1/2 opacity-50 sm:opacity-100">
          <img src={banner.lemon} alt="" className="max-w-[200px]" />
        </div>

        <div data-aos="fade-left" className="hidden sm:block absolute bottom-0 right-0">
          <img src={banner.apple} alt="" className="max-w-[200px]" />
        </div>

        <div
          data-aos="fade"
          className="absolute top-1/2 -translate-y-1/2 r
          left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100"
        >
          <img src={banner.kiwi} alt="" className="max-w-[180px]" />
        </div>
      </div>
    </>
  );
};

export default Banner17;
