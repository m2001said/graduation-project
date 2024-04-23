import React from "react";
import { useSelector } from "react-redux";

const Footer13 = () => {
  const footer = useSelector((state) => state.template13.footer);

  return (
    <footer className="bg-[var(--color-darkG-13)] text-[var(--white-13)] pb-16">
      <div className="container mx-auto px-3 lg:pt-20 pt-8">
        <section>
          <div className="lg:flex items-center justify-between">
            <span className="lg:w-4/5 lg:flex items-center justify-start">
              <button className="lg:w-1/3 flex items-center gap-x-4 text-[var(--white-13)]">
                <img src={footer.logo} className="text-2xl w-20" alt="Logo" />
                <p className="text-2xl primary-font text-[var(--white-13)]">{footer.Name}</p>
              </button>
              <p className="lg:flex justify-center lg:w-1/3 lg:py-0 py-6 text-[var(--white-13)]">{footer.description}</p>
            </span>
            <span className="lg:w-1/3 flex items-center gap-x-8 lg:pb-0 pb-4">
              <p className="text-[var(--white-13)]">{footer.contactTitle}</p>
              <button className="rounded-full px-3 py-2 flex items-center justify-center bg-[var(--color-13-yel)] text-[var(--colo-13-green)] gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p className="text-[var(--white-13)]">{footer.contactButton}</p>
                <img src={footer.arrow} className="w-5" alt="Arrow" />
              </button>
            </span>
          </div>
          <div className="lg:py-20">
            <ul className="lg:flex items-center justify-between">
              <div className="lg:flex items-center justify-start lg:w-4/5">
              {footer.quickLinks.map((link, index) => (
                  <li key={index} className="lg:w-1/4 lg:pb-0 pb-3">
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </div>
             
            </ul>
          </div>
        </section>
        <section>
          <span className="text-[var(--white-13)] lg:w-1/3 justify-center flex items-center gap-4"> 
        <ul className="sm:flex justify-between pt-8">
            {footer.socialMedia.map((social, index) => (
              <li key={index}>
                <a href={social.url}>
                  <img  className="cursor-pointer rounded-full border border-[var(--color-g-13-g)] p-2 h-8 w-8" src={social.icon} alt="" />
                </a>
              </li>
            ))}
          </ul>
          </span>
        </section>
        <section>
          <ul className="sm:flex justify-between pt-8">
            <li>
              <a href="#">{footer.privacy}</a>
            </li>
            <li>
              <a href="#">{footer.rights}</a>
            </li>
            <li>
              <a href="#">{footer.conditions}</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer13;
