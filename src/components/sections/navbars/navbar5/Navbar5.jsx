import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./navbar5.css";
import { useLocation } from "react-router";

const Navbar5 = () => {
  const { pathname } = useLocation();
  const navbar = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.navbar;
    } else {
      return state.template5.navbar;
    }
  });

  const [active, setActive] = useState("navbarMenu");
  const showNavbar = () => {
    setActive("navbarMenu showNavbar");
  };
  const removeNavbar = () => {
    setActive("navbarMenu");
  };

  const [noBg, addBg] = useState("navbar5-two");

  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navbar5-two navbar-with_Bg");
    } else {
      addBg("navbar5-two");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    // <div className="navbar5">
    <div className={noBg}>
      <div className="navbar5-logoDiv">
        <a href=" #">
          <img src={navbar.icon} alt="" className="navbar5-logo" />
        </a>
      </div>
      <div className={active}>
        <ul className="navbarMenu-list">
          {navbar.links.map((link, index) => (
            <li key={index} className="navbarMenu-listItem">
              <a href={link.url} onClick={() => removeNavbar()}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={removeNavbar} className="navbarMenu-btnOne">
          {navbar.buttonTxt}
        </button>
      </div>

      <div className="toggleIcon" onClick={showNavbar}>
        <a href=" #">
          <img src={navbar.menuIcon} alt="" className="navbar5-two-icon" />
        </a>
      </div>
    </div>
    // </div>
  );
};

export default Navbar5;
