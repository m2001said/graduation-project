import React, { useState } from "react";
import { useSelector } from "react-redux";
import ResponsiveMenu from "./ResponsiveMenu";



const Navbar = ({ theme, setTheme }) => {
  const { navbar } = useSelector((state) => state.template18);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container18 py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-3xl font-bold font-serif">{navbar.title}</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navbar.links.map((data, index) => (
                <li key={index} className="py-4">
                  <a
                    href={data.link}
                    className=" text-lg font-medium  hover:text-[--primary18-color] py-2 hover:border-b-2 hover:border-[--primary18-color] transition-colors duration-500  "
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <img src={navbar.lightIcon} alt="" onClick={() => setTheme("light")} className="" />
              ) : (
                <img src={navbar.darkIcon} alt="" onClick={() => setTheme("dark")} className="" />
              )}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* dark  mode */}
            {theme === "dark" ? (
              <img src={navbar.lightIcon} alt="" onClick={() => setTheme("light")} className="" />
            ) : (
              <img src={navbar.darkIcon} alt="" onClick={() => setTheme("dark")} className="" />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <img src={navbar.menuIcon} alt="" onClick={toggleMenu} className=" cursor-pointer transition-all" size={30} />
            ) : (
              <img src={navbar.menuIcon} alt="" onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
