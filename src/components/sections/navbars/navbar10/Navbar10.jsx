import React from "react";
import "../../../../assets/css/globals10.css";
import DarkMode from "./DarkMode";
import { useSelector } from "react-redux";

const Navbar10 = ({template}) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  return (
    <>
      <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <div className="items-center p-10 sm:p-30 py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl sm:text-3xl flex gap-2">
              <a href="# ">
                <img src={navbar.imgUrl} alt="" className="w-10" />
              </a>
              {navbar.title}
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode template= {template}/>
              </div>
              <ul className="items-center gap-4 hidden sm:flex">
                {navbar.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="textHover10 inline-block py-4 px-4 duration-200">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="btnBg10 btnTxt10 hover:scale-105 duration-200 py-1 px-4 rounded-full flex items-center gap-3"
                
              >
                {navbar.buttonText}
                <a href="/#">
                  <img src={navbar.icons[0]} alt="" className="w-7 drop-shadow-sm cursor-pointer" />
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
