import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Navbar13 = ({ template }) => {
  const { t, i18n } = useTranslation();
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const direction = i18n.dir();

  return (
    <nav className="sticky top-16 z-50 bg-[var(--website-13-color-2)] nav13">
      <div className="container mx-auto lg:flex flex-wrap items-center justify-between px-3 border-b border-[var(--website-13-color-22)]">
        <div className="lg:w-1/5 sticky top-0 flex justify-between lg:static lg:justify-start h-[10vh] items-center">
          <a href="/" className="font-medium tracking-wider transition-colors cursor-pointer">
            <button className="flex items-center gap-x-4 text-[var(--website-13-color-3)]">
              <img
                src={navbar.imgUrl}
                alt={navbar.title}
                className="w-8 h-8 sm:w-10 sm:h-10"
                style={{ filter: "invert(100%)" }}
              />
              <p className="text-2xl primary-font text-[var(--website-13-color-3)] logo-text">{navbar.title}</p>
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggler */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[var(--website-13-color-3)] focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`lg:flex flex-grow lg:items-center items-baseline lg:h-auto justify-center lg:w-4/5 ${isOpen ? "block" : "hidden"}`}>
          <ul className={`flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] ${direction === 'rtl' ? 'rtl' : ''}`}>
            {navbar.links.map((link, index) => (
              <li key={index} className="py-2 flex text-[var(--website-13-color-3)] font-medium items-center leading-snug hover:opacity-40">
                <a href={link.url} className="menu-link">
                  {link.title}
                </a>
              </li>
            ))}
            <li className="py-2 flex text-[var(--website-13-color-3)] font-medium items-center leading-snug hover:opacity-40">
              <img
                src={navbar.icons[0]} // Assuming icons[0] is the profile icon
                alt="profile"
                className="text-xl w-8 h-8 sm:w-10 sm:h-10"
                style={{ filter: "invert(100%)" }}
              />
            </li>
            <li>
              <button className={`rounded-full px-1 flex items-center bg-[var(--website-13-color-4)] text-[var(--website-13-color-2)] gap-1 transition ease-out duration-300 transform hover:scale-110 py-auto contact-button13 ${direction === 'rtl' ? 'rtl' : ''}`}>
                <p className={`text-[var(--website-13-color-3)] ${direction === 'rtl' ? 'order-2 ml-2' : 'order-1'}`}>{navbar.subtitle}</p>
                <img
                  src={navbar.icons[1]} // Assuming icons[1] is the contact button icon
                  alt="contact dropdown"
                  className={`text-xl lg:w-6 lg:h-6 w-8 h-8 sm:w-10 sm:h-10 ${direction === 'rtl' ? 'order-1 mr-2' : 'order-2 ml-2'}`} // Adjust margin and order for icon placement in RTL
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
