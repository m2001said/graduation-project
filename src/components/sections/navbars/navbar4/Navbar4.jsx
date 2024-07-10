import React, { useState } from "react";
import "./navbar4.css";
import { getMenuStyles } from "./common";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar4 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleLinkClick = () => {
    // Handle link click if needed
    // For example, you might want to close the menu after a link is clicked
    setMenuOpened(false);
  };

  return (
    <section className="h-wrapper4">
      <div className="flexCenter4 innerWidth4 paddings4 h-container4">
        <img src={navbar.imgUrl} alt="logo" width={100} />
        <div className="flexCenter4 h-menu4" style={getMenuStyles(menuOpened)}>
          {navbar.links.map((link, index) => (
            <a key={index} href={`#${link.url}`} onClick={() => setMenuOpened(false)}>
              {link.title}
            </a>
          ))}
          <button className="button4">
            <a href={navbar.email}>{navbar.buttonText}</a>
          </button>
        </div>

        <div className="menu-icon4" onClick={handleMenuToggle}>
          <div className="bar4">Ξ </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar4;
