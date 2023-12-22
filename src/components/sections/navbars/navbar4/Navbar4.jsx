import React, { useState } from "react";
import "./navbar4.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "./common";
import OutsideClickHandler from "react-outside-click-handler";
import { useSelector } from "react-redux";

const Navbar4 = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // Fetching data from Redux state
  const { navbar4 } = useSelector((state) => state.template4);

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src={navbar4.imgUrl} alt="logo" width={100} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            {navbar4.links.map((link, index) => (
              <a key={index} href={`#${link.toLowerCase().replace(" ", "-")}`}>
                {link}
              </a>
            ))}
            <button className="button">
              <a href={navbar4.email4}>{navbar4.buttonText}</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Navbar4;
