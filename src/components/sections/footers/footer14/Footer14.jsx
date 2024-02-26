import React from "react";
import { useSelector } from "react-redux";


const Footer14 = () => {
  const { footer14 } = useSelector((state) => state.template14);

  return (
    <div className="dark:bg-gray-950">
      <div className="container14">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <div className="flex gap-4">
              <img src={footer14.imgUrl} alt="" className="w-10 cursor-pointer" />
              <span className="text-[--primary14-color] font-semibold tracking-widest text-2xl uppercase sm:text-3xl cursor-pointer">{footer14.title}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-white/70 lg:pr-24 pt-7">{footer14.description}</p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {footer14.items.map((item) => (
              <div className="py-8 px-4 " key={item.title}>
                <h1 className="text-xl font-bold sm:text-left mb-3">{item.title}</h1>
                <ul className={`flex flex-col gap-3`}>
                  {item.links.map((link) => (
                    <a href=" " key={link}>
                      <li className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300">{link}</li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">{footer14.title3}</h1>
              <div>
                <div className="flex items-center gap-3">
                  <img src={footer14.LocationIcon} alt="" className="w-6" />
                  <p>{footer14.Location}</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <img src={footer14.mobileIcon} alt="" className="w-6" />
                  <p>{footer14.mobile}</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  {footer14.mediaIcons.map((icon) => (
                    <a href={icon.url} key={icon.url}>
                      <img src={icon.icon} alt="" className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer14;
