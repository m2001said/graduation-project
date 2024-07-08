import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Navbar15 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  // const { navbar } = useSelector((state) => state.template15);
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar nav15 px-4">
      <img src={navbar.imgUrl} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
        {navbar.links.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "var(--website-15-color-5)" : "var(--website-15-color-3)"
            } ${index === navbar.links.length - 1 ? "mr-10" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a className="honerlink11" href={`#${nav.url}`} style={{ color: active === nav.title ? "var(--website-15-color-3)" : "var(--website-15-color-5)" }}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={"https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${!toggle ? "hidden" : "flex"} ${
            language === "ar" ? "right-auto left-0 " : "left-auto right-0"
          } p-6 bg-black-gradient absolute top-20  mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navbar.links.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${
                  index === navbar.links.length - 1 ? "mb-0" : "mb-4"
                }`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.url}`} style={{ color: active === nav.title ? "var(--website-15-color-6)" : "var(--website-15-color-3)" }}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar15;
