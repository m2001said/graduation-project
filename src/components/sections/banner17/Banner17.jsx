import React from "react";
import { useSelector } from "react-redux";
import PrimaryButton17 from "../shared/shared17/PrimaryButton17";

const Banner17 = () => {
  const banner = useSelector((state) => state.template17.banner);

  return (
    <>
      <div className="container17 py-14 relative">
        <div className="relative z-20">
          <h1 className="py-8 tracking-wider text-2xl font-semibold text-[var(--website-17-color-4)] text-center">
            {banner.title}
          </h1>

          {/* text content section */}

          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p className="text-[var(--website-17-color-4)] p17">
                  <span className="text-[var(--website-17-color-1)]">{banner.subtitle}</span>{" "}
                  {banner.paragraph1}
                </p>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div>
                <p className="text-[var(--website-17-color-5)] p17">{banner.description}</p>
              </div>
            </div>
          </div>

          {/* button section */}

          <div className="flex justify-center mt-10 sm:mt-14">
            <PrimaryButton17 />
          </div>
        </div>

        {/* bg fruits pngs */}
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={banner.imgs[3].imgUrl} alt="" className="max-w-[160px]" />
        </div>

        <div className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={banner.imgs[4].imgUrl} alt="" className="max-w-[280px]" />
        </div>
        <div className="hidden sm:block absolute top-10 right-0 transform -translate-y-1/2 opacity-50 sm:opacity-100">
          <img src={banner.imgs[2].imgUrl} alt="" className="max-w-[200px]" />
        </div>

        <div className="hidden sm:block absolute bottom-0 right-0">
          <img src={banner.imgs[0].imgUrl} alt="" className="max-w-[200px]" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
          <img src={banner.imgs[1].imgUrl} alt="" className="max-w-[180px]" />
        </div>
      </div>
    </>
  );
};

export default Banner17;
