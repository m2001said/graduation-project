import React from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";
import DarkMode from "./DarkMode";


const Navbar10 = ({ handleOrderPopup }) => {
  const { navbar } = useSelector((state) => state.template10);
  return (
    <>
      <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <div className="items-center p-10 sm:p-30 py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl sm:text-3xl flex gap-2">
              <a href="# ">
                <img src={navbar.icon} alt="" className="w-10" />
              </a>
              {navbar.title}
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="items-center gap-4 hidden sm:flex">
                {navbar.links.map((link, index) => (
                  <li key={index}>
                    <a href={`#${link}`} className="textHover inline-block py-4 px-4 duration-200">
                      {link}
                    </a>
                  </li>
                ))}

                {/* drop sec */}
                {/* <li className="group relative cursor-pointer">
                  <div className="textHover flex h-[72px] items-center gap-[2px]">
                    {navbar10.DropdownTxt}
                    <a href="/#">
                      <img src={navbar10.DropdownIcon} alt="" className="w-5 transition-all duration-200 group-hover:rotate-180" />
                    </a>
                  </div>

                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                    <ul className="space-y-3">
                      {navbar10.DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a href={data.link} className="inline-block w-full rounded-md p-2 bgHover">
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li> */}
              </ul>
              <button className="btnBg btnTxt hover:scale-105 duration-200 py-1 px-4 rounded-full flex items-center gap-3" onClick={() => handleOrderPopup()}>
                {navbar.buttonText}
                <a href="/#">
                  <img src={navbar.buttonIcon} alt="" className="w-7 drop-shadow-sm cursor-pointer" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar10;
