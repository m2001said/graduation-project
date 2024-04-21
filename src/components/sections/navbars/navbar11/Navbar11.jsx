import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../navbar11/navbar11.css";
import { useLocation } from "react-router";

const Navbar11 = () => {
  // const { navbar } = useSelector((state) => state.template11);
  const { pathname } = useLocation();
  const navbar = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.navbar;
    } else {
      return state.template11.navbar;
    }
  });
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside11 show-menu11" : "aside11"}>
        <a href={"#home"} className="nav11_logo">
          <img src={navbar.logo} alt="logo" />
        </a>
        <nav11 className="nav11">
          <div className="nav11__menu">
            <ul className="nav11__list">
              {navbar.links.map((link) => (
                <li className="nav11__item">
                  <a href={link.url} className="nav11__link">
                    <img src={link.icon} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav11>
        <div className="nav11__footer">
          <span className="copyright11">&copy; 2023 - 2024.</span>
        </div>
      </aside>
      <div className={toggle ? "nav__toggle11 nav__toggle11-open" : "nav__toggle11"} onClick={() => showMenu(!toggle)}>
        <img src={navbar.links[1].icon} alt="" className="icon__menu11" />
      </div>
    </>
  );
};
export default Navbar11;
