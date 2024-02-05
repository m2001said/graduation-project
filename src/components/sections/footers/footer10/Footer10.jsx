import React from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";


const Footer10 = () => {
  const { footer10 } = useSelector((state) => state.template10);

  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="items-center p-10 sm:p-30">
        <div className=" grid md:grid-cols-3">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footer10.imgUrl} alt="Logo" className="max-w-[50px]" />
              {footer10.title}
            </h1>
            <p className="">{footer10.description}</p>
            <br />
            <div className="flex items-center gap-3">
              <img src={footer10.LocationIcon} alt="" className="w-4" />
              <p>{footer10.Location}</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <img src={footer10.mobileIcon} alt="" className="w-3" />
              <p>{footer10.mobile}</p>
            </div>
            {/* Social media */}
            <div className="flex items-center gap-5 mt-6">
              {footer10.mediaIcons.map((icon) => (
                <a href={icon.url} key={icon.url}>
                  <img src={icon.icon} alt="" className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            {footer10.items.map((item) => (
              <div className="py-8 px-4 " key={item.title}>
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">{item.title}</h1>
                <ul className={`flex flex-col gap-3`}>
                  {item.links.map((link) => (
                    <a href=" " key={link}>
                      <li className="cursor-pointer hover:translate-x-1 duration-300 textHover space-x-1 paraColor">{link}</li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer10;
