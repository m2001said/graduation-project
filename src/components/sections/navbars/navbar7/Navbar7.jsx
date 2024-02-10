import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar7 = () => {
  const { navLinks7 } = useSelector((state) => state.template7);

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav7 className="w-full flex py-6 justify-between items-center navbar" style={{ color: "var(--color-dim-white)" }}>
      <img src={navLinks7[0].imgUrl.imgUrlA} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks7.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${
              index === navLinks7.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`} style={{ color: active === nav.title ? "var(--color-secondary)" : "var(--color-dim-white)" }}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? navLinks7[0].imgUrl.imgUrlB : navLinks7[0].imgUrl.imgUrlC}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks7.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${
                  index === navLinks7.length - 1 ? "mb-0" : "mb-4"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} style={{ color: active === nav.title ? "var(--color-secondary)" : "var(--color-dim-white)" }}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav7>
  );
};

export default Navbar7;
