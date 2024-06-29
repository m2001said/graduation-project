import React, { useState } from "react";
import "./navbar5.css";

const Navbar5 = ({template}) => {
  const navbar = template.navbar;


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
          <img src={navbar.imgUrl} alt="" className="navbar5-logo" />
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
          {navbar.buttonText}
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
