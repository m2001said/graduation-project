import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useLocation } from "react-router";

const Navbar13 = () => {
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  const navbar = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.navbar;
    } else {
      return state.template13.navbar;
    }
  });

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--website-13-color-2)] nav13 ">
      <div className="container mx-auto lg:flex flex-wrap items-center justify-between px-3 border-b border-[var(--website-13-color-22)] ">
        <div className="lg:w-1/5 sticky top-0 flex justify-between lg:static lg:justify-start h-[10vh] items-center">
          <a href="/" className="font-medium tracking-wider transition-colors cursor-pointer">
            <button className="flex items-center gap-x-4 text-[var(--website-13-color-3)]">
              <img src={navbar.logo.src} alt={navbar.logo.alt} className="w-8 h-8 sm:w-10 sm:h-10" style={{ filter: "invert(100%)" }} />
              <p className="text-2xl primary-font text-[var(--website-13-color-3)] logo-text">{navbar.logo.alt}</p>
            </button>
          </a>
          <div className="flex items-center">
            <button
              className="cursor-pointer text-xl text-[var(--website-13-color-3)] leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
              onClick={toggleNav}
            >
              {navOpen ? (
                <img src={navbar.close} alt="close" className="menu-icon relative w-8 h-8 sm:w-10 sm:h-10" />
              ) : (
                <img src={navbar.bars} alt="bars" className="menu-icon relative w-8 h-8 sm:w-10 sm:h-10" />
              )}
            </button>
          </div>
        </div>

        <div className={"lg:flex flex-grow lg:items-center items-baseline lg:h-auto h-[90vh] justify-center lg:w-4/5" + (navOpen ? " flex" : " hidden")}>
          <ul className="flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%]">
            {navbar.menuItems.map((menuItem, index) => (
              <li key={index} className="py-2 flex text-[var(--website-13-color-3)] font-medium items-center leading-snug hover:opacity-40">
                <a href={menuItem.link} className="menu-link">
                  {menuItem.title}
                </a>
              </li>
            ))}
           
            <li className="py-2 flex text-[var(--website-13-color-3)] font-medium items-center leading-snug hover:opacity-40">
              <img src={navbar.profileIcon} alt="profile" className="text-xl w-8 h-8 sm:w-10 sm:h-10  " style={{ filter: "invert(100%)" }} />
            </li>
            <li>
              <button className="rounded-full px-1  flex items-center bg-[var(--website-13-color-4)] text-[var(--website-13-color-2)] gap-1 transition ease-out duration-300 transform hover:scale-110 py-auto contact-button13">
                <p className="text-[var(--website-13-color-3)]">{navbar.button.title}</p>
                <img
                  src={navbar.button.icon}
                  alt="contact dropdown"
                  className="text-xl lg:w-6 lg:h-6 w-8 h-8 sm:w-10 sm:h-10 "
                  style={{ filter: "invert(100%)" }}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar13;
