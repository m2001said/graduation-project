import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Footer18 = () => {
  // const { footer } = useSelector((state) => state.template18);
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template18.footer;
    }
  });
  return (
    <div className="bg-gray-100 dark:bg-[--dark18] mt-14 rounded-t-3xl">
      <section className="container18">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">{footer.title}</h1>
            <p className="text-sm">{footer.description}</p>
            <br />
            <div className="flex flex-col gap-3">
              {footer.contacts.map((item) => (
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt="" className="w-6" />
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            {/* Social media */}
            <div className="flex items-center gap-5 mt-6">
              {footer.medias.map((icon) => (
                <a href={icon.url} key={icon.url}>
                  <img src={icon.icon} alt="" className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            {footer.footerSections.map((item) => (
              <div className="py-8 px-4 " key={item.title}>
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">{item.title}</h1>
                <ul className={`flex flex-col gap-3`}>
                  {item.links.map((link) => (
                    <a href=" " key={link.title}>
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-[ --primary18-color] space-x-1 text-gray-500 dark:text-gray-200">
                        {link.title}
                      </li>
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

export default Footer18;
