import React, { useState } from "react";
import "../../../../assets/css/globals10.css";
import DarkMode from "./DarkMode18";
import ResponsiveMenu from "./ResponsiveMenu";
import { useSelector } from "react-redux";

const Navbar18 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="relative z-10 shadow-md w-full bg-[--website-18-color-6] dark:bg-black dark:text-white duration-300 ">
        <div className="container18 py-2 md:py-0">
          <div className="flex justify-between items-center">
            <div className="flex justify-between gap-4">
              <span className="text-3xl font-bold font-serif ">{navbar.title}</span>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navbar.links.map((link, index) => (
                  <li key={index} className="py-4">
                    <a
                      href={`#${link.url}`}
                      className="text-lg font-medium hover:text-[--website-18-color-1] py-2 hover:border-b-2 hover:border-[--website-18-color-1] transition-colors duration-500"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <div>
                  <DarkMode template={template} />
                </div>
              </ul>
            </nav>
            {/* Mobile view  */}
            <div className="flex items-center gap-4 md:hidden ">
              {/* Mobile Hamburger icon */}
              {showMenu ? (
                <img src={navbar.icons[2]} alt="" onClick={toggleMenu} className=" cursor-pointer transition-all" size={30} />
              ) : (
                <img src={navbar.icons[2]} alt="" onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} template={template} />
      </div>
    </>
  );
};

export default Navbar18;
