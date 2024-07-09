import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar17 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container17 bg-[var(--website-17-color-2)] shadow-sm   z-30">
      <div className="flex justify-between items-center py-4 sm:py-3 px-4 sm:px-8">
        {/* Logo section */}
        <img src={navbar.imgUrl} className="" style={{ width: "50px", height: "50px" }} alt="" />
        {/* Toggle button for small screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-[var(--website-17-color-4)] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div className={`sm:flex items-center ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            {navbar.links.map(({ index, title, url }) => (
              <li key={index}>
                <a
                  href={`#${url}`}
                  className="text-[var(--website-17-color-4)] hover:text-[var(--website-17-color-1)] text-xl font-semibold"
                >
                  {title}
                </a>
              </li>
            ))}

            {/* Simple dropdown and links */}
            <li className="relative cursor-pointer">
              <button onClick={toggleDropdown} className="flex items-center gap-2 text-[var(--website-17-color-4)] hover:text-[var(--website-17-color-1)] text-xl font-semibold focus:outline-none">
                {navbar.description}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {/* Dropdown section */}
              <div className={`absolute z-50 mt-2 w-[200px] bg-[var(--website-17-color-3)] text-[var(--website-17-color-4)] shadow-md p-2 rounded-md ${isDropdownOpen ? "block" : "hidden"}`}>
                <ul>
                  {navbar.dropDown.map(({ index, title, url }) => (
                    <li key={index}>
                      <a href={`#${url}`} className="text-xl inline-block w-full rounded-md p-2 hover:bg-[var(--website-17-color-1)]">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Login button section */}
            <li>
              <button className="flex justify-center items-center gap-2 bg-gradient-to-t from-[var(--website-17-color-1)] to-[var(--website-17-color-2)] rounded-3xl px-2 md:px-5 py-2 hover:scale-105 duration-300">
                {navbar.title}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar17;
