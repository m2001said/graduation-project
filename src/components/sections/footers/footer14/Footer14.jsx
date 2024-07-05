import React from "react";
import { useSelector } from "react-redux";

const Footer14 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.footer);
  const footer = template ? template.footer : ownFooter;
  
  return (
    <div className="bg-[--website-14-color-6] dark:bg-gray-950 dark:text-white">
      <div className="container14">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <div className="flex gap-4">
              <img src={footer.imgUrl} alt="logo" className="w-10 cursor-pointer" />
              <span className="text-[--website-14-color-1] font-semibold tracking-widest text-2xl uppercase sm:text-3xl cursor-pointer">{footer.title}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-white/70 lg:pr-24 pt-7">{footer.description}</p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {footer.footerSections.map((item) => (
              <div className="py-8 px-4 " key={item.title}>
                <h1 className="text-xl font-bold sm:text-left mb-3">{item.title}</h1>
                <ul className={`flex flex-col gap-3`}>
                  {item.links.map((link) => (
                    <a href={link.url} key={link.title}>
                      <li className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300">{link.title}</li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Contact</h1>
              <div>
                <div className="flex flex-col gap-3">
                  {footer.contacts.map((item, index) => (
                    <div className="flex items-center gap-3 " key={index}>
                      <img src={item.icon} alt="" className="w-6" />
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  {footer.medias.map((icon) => (
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
