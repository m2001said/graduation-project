import React, { useState } from "react";
import "../navbar11/navbar11.css";
import { useSelector } from "react-redux";

const Navbar11 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className="aside11 show-menu11">
        <a href={"#home"} className="nav11_logo">
          <img src={navbar.imgUrl} alt="logo" />
        </a>

        <ul className="nav11__list">
          {navbar.links.map((link, index) => (
            <li key={index} className="nav11__item">
              <a href={`#${link.url}`} className="nav11__link">
                <img src={link.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>

        <div className="nav11__footer">
          <span className="copyright11">&copy; 2023 - 2024.</span>
        </div>
      </aside>
    </>
  );
};

export default Navbar11;
