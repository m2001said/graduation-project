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
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src={navbar.imgUrl} alt="logo" width={100} />
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          {navbar.links.map((link, index) => (
            <Link to={link.url} key={index} onClick={handleLinkClick}>
              {link.title}
            </Link>
          ))}
          <button className="button">
            <a href={navbar.email}>{navbar.buttonText}</a>
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
