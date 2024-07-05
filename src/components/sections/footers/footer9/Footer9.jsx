import React from "react";
import { useTranslation } from "react-i18next";

const Footer9 = ({ template }) => {
  const { t, i18n } = useTranslation();
  const footer = template.footer;
  const isRTL = i18n.dir() === "rtl";

  return (
    <footer className="footer9 text-[var(--website-9-color-2)]">
      <section className="flex flex-col bg-[var(--website-9-color-3)] pt-8">
        <div className="container mx-auto lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between w-full px-3 py-12">
            <div className="flex flex-col items-start lg:items-start lg:w-1/3">
              <span className="flex items-center gap-x-2">
                <button className="bg-[var(--website-9-color-2)] text-[var(--website-9-color-1)] rounded-full w-14 h-14">
                  <img src={footer.imgUrl} className="w-1/2 h-1/2 m-auto" alt="Home" />
                </button>
                <p className="font-medium text-xl">{footer.title}</p>
              </span>
              <p className="xl:text-base text-sm py-4 w-full lg:text-left text-center">{footer.subtitle}</p>
              {footer.medias.map((item, index) => (
                <span className="flex items-center gap-x-2 pt-4" key={index}>
                  <img src={item.icon} alt={item.title} className="logo-9" />
                  <p>{item.title}</p>
                </span>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-12 lg:w-2/3 lg:justify-between mt-6 lg:mt-0">
              {footer.footerSections.map((section, index) => (
                <div key={index}>
                  <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">{section.title}</p>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="xl:text-base text-sm mt-2 cursor-pointer">
                        <a href={link.url}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="relative h-14 flex justify-center items-center">
                <input
                  type="email"
                  placeholder={isRTL ? "ادخل بريدك الالكتروني" : "Enter your email"}
                  className="h-full w-full rounded-full bg-[var(--website-9-color-1)] text-[var(--website-9-color-2)] placeholder:text-[var(--website-9-color-2)] px-3"
                />
                <button
                  className={`bg-[var(--website-9-color-1)] text-[var(--website-9-color-4)] rounded-full w-12 h-12 flex justify-center items-center text-xl absolute ${isRTL ? 'left-1' : 'right-1'}`}
                >
                  <img src={footer.icon} className={isRTL ? 'transform rotate-180' : ''} alt="Subscribe" />
                </button>
              </div>
              <span className="text-[var(--website-9-color-2)] flex items-center gap-4 text-3xl justify-center lg:justify-start mt-4">
                {footer.contacts.map((item, index) => (
                  <a href={item.url} key={index}>
                    <img src={item.icon} className="cursor-pointer w-8 h-8" alt={item.url} />
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--website-9-color-3)] text-[var(--c616161)] xl:text-base text-sm">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-14 lg:text-left text-center py-4">
          <p className="lg:mb-0 mb-4">{footer.description}</p>
          <ul className="flex flex-wrap justify-center lg:justify-end items-center gap-x-4">
            {footer.links.map((link, index) => (
              <li key={index} className="cursor-pointer text-[var(--website-9-color-1)]">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer9;
