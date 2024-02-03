import React, { useState } from "react";
import "./navbar4.css";
import { getMenuStyles } from "./common";
import { useSelector } from "react-redux";

const Navbar4 = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // Fetching data from Redux state
  const { navbar4 } = useSelector((state) => state.template4);

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleLinkClick = () => {
    // Handle link click if needed
    // For example, you might want to close the menu after a link is clicked
    setMenuOpened(false);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src={navbar4.imgUrl} alt="logo" width={100} />
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          {navbar4.links.map((link, index) => (
            <a key={index} href={`#${link.toLowerCase().replace(" ", "-")}`} onClick={handleLinkClick}>
              {link}
            </a>
          ))}
          <button className="button">
            <a href={navbar4.email4}>{navbar4.buttonText}</a>
          </button>
        </div>

        <div className="menu-icon" onClick={handleMenuToggle}>
          <div className="bar">Ξ </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar4;
