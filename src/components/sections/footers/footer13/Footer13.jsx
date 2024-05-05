import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Footer13 = () => {
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template13.footer;
    }
  });

  return (
    <footer className="bg-[var(--website-13-color-1)] text-[var(--website-13-color-3)] pb-16">
      <div className="container mx-auto px-3 lg:pt-20 pt-8">
        <section>
          <div className="lg:flex items-center justify-between">
            <span className="lg:w-4/5 lg:flex items-center justify-start">
              <button className="lg:w-1/3 flex items-center gap-x-4 text-[var(--website-13-color-3)]">
                <img src={footer.logo} className="text-2xl w-20" alt="Logo" />
                <p className="text-2xl primary-font text-[var(--website-13-color-3)]">{footer.title}</p>
              </button>
              <p className="lg:flex justify-center lg:w-1/3 lg:py-0 py-6 text-[var(--website-13-color-3)]">{footer.description}</p>
            </span>
            <span className="lg:w-1/3 flex items-center gap-x-8 lg:pb-0 pb-4">
              <p className="text-[var(--website-13-color-3)]">{footer.subtitle}</p>
              {footer.button.map((button, index) => (
                <a key={index} href={button.url} className="rounded-full px-3 py-2 flex items-center justify-center bg-[var(--website-13-color-4)] text-[var(--website-13-color-1)] gap-2 transition ease-out duration-300 transform hover:scale-110">
                  <p className="text-[var(--website-13-color-3)]">{button.title}</p>
                  <img src={button.icon} className="w-5" alt="Arrow" />
                </a>
              ))}
            </span>
          </div>
          <div className="lg:py-20">
            <ul className="lg:flex items-center justify-between">
              <div className="lg:flex items-center justify-start lg:w-4/5">
                {footer.sections.map((section, index) => (
                  <li key={index} className="lg:w-1/4 lg:pb-0 pb-3">
                    <a href={section.url}>{section.title}</a>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </section>
        <section>
          <span className="text-[var(--website-13-color-3)] lg:w-1/3 justify-center flex items-center gap-4"> 
            <ul className="sm:flex justify-between pt-8">
              {footer.urls.map((url, index) => (
                <li key={index}>
                  <a href={url.url}>
                    <img className="cursor-pointer rounded-full border border-[var(--website-13-color-2)] p-2 h-8 w-8" src={url.icon} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </span>
        </section>
        <section>
          <ul className="sm:flex justify-between pt-8">
            {footer.footerSection.map((item, index) => (
              <li key={index}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer13;
