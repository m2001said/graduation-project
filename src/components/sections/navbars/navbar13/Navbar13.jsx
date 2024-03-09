import { useSelector } from "react-redux";
import React from "react";

const Navbar13 = ({ navBar, setNavBar }) => {
  const navbar = useSelector((state) => state.template13.navbar);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-darkG-13)] ">
      <div className="container mx-auto lg:flex flex-wrap items-center justify-between px-3 border-b border-[var(--color-darkG-132)] ">
        <div className="lg:w-1/5 sticky top-0 flex justify-between lg:static lg:justify-start h-[10vh] items-center">
          <a href="/" className="font-medium tracking-wider transition-colors cursor-pointer">
            <button className="flex items-center gap-x-4 text-[var(--white-13)]">
              <img src={navbar.logo.src} alt={navbar.logo.alt} className="w-8 h-8 sm:w-10 sm:h-10" style={{ filter: "invert(100%)" }} />
              <p className="text-2xl primary-font text-[var(--white-13)] logo-text">{navbar.logo.alt}</p>
            </button>
          </a>
          <div className="flex items-center">
            <button
              className="cursor-pointer text-xl text-[var(--white-13)] leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavBar(!navBar)}
            >
              {navBar ? (
                <img src={navbar.close} alt="close" className="menu-icon w-8 h-8 sm:w-10 sm:h-10" />
              ) : (
                <img src={navbar.bars} alt="bars" className="menu-icon w-8 h-8 sm:w-10 sm:h-10" />
              )}
            </button>
          </div>
        </div>

        <div className={"lg:flex flex-grow lg:items-center items-baseline lg:h-auto h-[90vh] justify-center lg:w-4/5" + (navBar ? " flex" : " hidden")}>
          <ul className="flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-8 lg:w-2/3 lg:border-x border-[#134e3c]">
              {navbar.menuItems.map((menuItem, index) => (
                <li key={index} className="py-2 flex text-[var(--white-13)] font-medium items-center leading-snug hover:opacity-40">
                  <a href={menuItem.link} className="menu-link">
                    {menuItem.text}
                  </a>
                </li>
              ))}
            </div>
            <div className="lg:w-1/3 flex lg:flex-row flex-col items-center justify-end gap-x-8">
              <li className="flex items-center py-2 text-[var(--white-13)] font-medium leading-snug hover:opacity-40">
                <a href="#" className="language-link">
                  {navbar.language}
                </a>
              </li>
              <img
                src={navbar.languageDropdownIcon}
                alt="language dropdown"
                className="icon-13 lg:w-6 h-8 sm:w-10 sm:h-10"
                style={{ filter: "invert(100%)" }}
              />
              <li className="py-2 flex text-[var(--white-13)] font-medium items-center leading-snug hover:opacity-40">
                <img src={navbar.profileIcon} alt="profile" className="text-xl w-8 h-8 sm:w-10 sm:h-10  " style={{ filter: "invert(100%)" }} />
              </li>
              <button className="rounded-full px-1  flex items-center bg-[var(--color-13-yel)] text-[var(--color-darkG-13)] gap-1 transition ease-out duration-300 transform hover:scale-110 contact-button">
                <p className="text-[var(--white-13)]">{navbar.contactButton.text}</p>
                <img
                  src={navbar.contactButton.dropdownIcon}
                  alt="contact dropdown"
                  className="text-xl lg:w-6 lg:h-6 w-8 h-8 sm:w-10 sm:h-10 "
                  style={{ filter: "invert(100%)" }}
                />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar13;
