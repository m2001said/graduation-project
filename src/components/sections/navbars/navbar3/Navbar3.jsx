import React, { useState } from "react";
import "./navbar3.css";
import { useSelector } from "react-redux";

const Navbar3 = () => {
  const { navbar } = useSelector((state) => state.template3);
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="navbar3">
      <img src={navbar.imgUrl[0]} alt="" className="logo3" />
      <div className="navbar3-menu">
        {menuOpened || !mobile ? (
          <>
            {navbar.links.map((link, index) => (
              <a className="hoverlink3" key={index} href={`#${link}`} onClick={() => setMenuOpened(false)}>
                {link}
              </a>
            ))}
            {mobile && (
              <div className="closed-mobile-menu" onClick={() => setMenuOpened(false)}>
                <img src={navbar.imgUrlB} alt="" className="menu-icon" />
              </div>
            )}
          </>
        ) : (
          <div className="closed-mobile-menu" onClick={() => setMenuOpened(true)}>
            <img src={navbar.imgUrl[1]} alt="" className="menu-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar3;
