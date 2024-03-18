import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar15 = () => {
  const { navbar } = useSelector((state) => state.template15);
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar nav15">
      <img src={navbar.imgUrl[0]} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navbar.items.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "var(--color5)" : "var(--color3)"} ${
              index === navbar.items.length - 1 ? "mr-10" : "mr-10"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a className="honerlink11" href={`#${nav.id}`} style={{ color: active === nav.title ? "var(--color3)" : "var(--color5)" }}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? navbar.imgUrl[1] : navbar.imgUrl[2]} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />
        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navbar.items.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "var(--color5)" : "var(--color2)"} ${
                  index === navbar.items.length - 1 ? "mb-0" : "mb-4"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} style={{ color: active === nav.title ? "var(--color2)" : "var(--color5)" }}>
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
