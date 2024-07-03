import React, { useState } from "react";
import "../navbar11/navbar11.css";

const Navbar11 = ({ template }) => {
  const navbar = template.navbar;

  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside11 show-menu11" : "aside11"}>
        <a href={"#home"} className="nav11_logo">
          <img src={navbar.imgUrl} alt="logo" />
        </a>
        <nav className="nav11">
          {" "}
          <div className="nav11__menu">
            <ul className="nav11__list">
              {navbar.links.map((link, index) => (
                <li key={index} className="nav11__item">
                  <a href={`#${link.url}`} className="nav11__link">
                    <img src={link.icon} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
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
