import React, { useState } from "react";
import "./navbar5.css";

const Navbar5 = ({template}) => {
  const navbar = template.navbar;


  const [active, setActive] = useState("navbar-5-Menu");
  const showNavbar5 = () => {
    setActive("navbar-5-Menu showNavbar5");
  };
  const removeNavbar = () => {
    setActive("navbar-5-Menu");
  };

  const [noBg, addBg] = useState("navbar5-two");

  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navbar5-two navbar5-with_Bg");
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
        <ul className="navbarMenu5-list">
          {navbar.links.map((link, index) => (
            <li key={index} className="navbarMenu-5-listItem">
              <a href={link.url} onClick={() => removeNavbar()}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={removeNavbar} className="navbarMenu-5-btnOne">
          {navbar.buttonText}
        </button>
      </div>

      <div className="toggleIcon" onClick={showNavbar5}>
        <a href=" #">
          <img src={navbar.icon} alt="" className="navbar5-two-icon" />
        </a>
      </div>
    </div>
    // </div>
  );
};

export default Navbar5;
