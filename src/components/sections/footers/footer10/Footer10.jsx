import React from "react";
import "../../../../assets/css/globals10.css";

const Footer10 = ({ template }) => {
  const footer = template.footer;

  return (
    <div className="bg-[--website-10-color-5] dark:bg-gray-950 dark:text-white">
      <section className="items-center p-10 sm:p-30">
        <div className=" grid md:grid-cols-3">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footer.imgUrl} alt="Logo" className="max-w-[50px]" />
              {footer.title}
            </h1>
            <p className="">{footer.description}</p>
            <br />
            <div className="flex flex-col gap-3">
              {footer.contacts.map((contact, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <img src={contact.icon} alt="" className="w-5" />
                  <p>{contact.value}</p>
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
                    <a href={link.url} key={link.title}>
                      <li className="cursor-pointer hover:translate-x-1 duration-300 textHover10 space-x-1 paraColor10">{link.title}</li>
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
