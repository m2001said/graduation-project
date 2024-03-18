import React, { useState, useEffect } from "react";
import "./navbar3.css";
import { useSelector } from "react-redux";

const Navbar3 = () => {
  const { navbar } = useSelector((state) => state.template3);
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkWindowSize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="navbar3">
      <img src={navbar.imgUrl[0]} alt="" className="logo3" />
      <div className="navbar3-menu">
        {mobile ? (
          <div className="closed-mobile-menu" onClick={toggleMenu}>
            <img src={navbar.imgUrl[1]} alt="" className="menu-icon" />
          </div>
        ) : (
          navbar.links.map((link, index) => (
            <a className="hoverlink3" key={index} href={`#${link}`} onClick={() => setMenuOpened(false)}>
              {link}
            </a>
          ))
        )}
      </div>
      {menuOpened && mobile && (
        <div className="navbar3-menu">
          {navbar.links.map((link, index) => (
            <a className="hoverlink3" key={index} href={`#${link}`} onClick={() => setMenuOpened(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar3;
