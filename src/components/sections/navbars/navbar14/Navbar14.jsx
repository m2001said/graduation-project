import React from "react";
import { useSelector } from "react-redux";
import DarkMode14 from "./DarkMode14";



const Navbar14 = ({ handleOrderPopup }) => {
  const { navbar14 } = useSelector((state) => state.template14);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container14 flex justify-between items-center">
          {/* Logo and Links sec */}
          <div className="flex items-center gap-4">
            <img src={navbar14.icon} alt="" className="w-7 cursor-pointer" />
            <span className="text-[--primary14-color] font-semibold tracking-widest text-2xl uppercase sm:text-3xl cursor-pointer">{navbar14.title}</span>
            {/* Menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {navbar14.links.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* dropdown  */}
                <li className="relative cursor-pointer group">
                  <span className="flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2 ">
                    {navbar14.DropdownTxt}
                    <span>
                      <img src={navbar14.DropdownIcon} alt="" className="w-5 group-hover:rotate-180 duration-300" />
                    </span>
                  </span>

                  {/* dropdown links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {navbar14.DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-[--primaryHover14-color] rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Nav right sec */}
          <div className="flex justify-between items-center gap-4">
            {/* Search section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search14-bar" />
              <img src={navbar14.SearchIcon} alt="" className="absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <img src={navbar14.buttonIcon} alt="" className="w-6" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                {navbar14.buttonText}
              </div>
            </button>
            {/* Dark Mode sec */}
            <div>
              <DarkMode14 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar14;
