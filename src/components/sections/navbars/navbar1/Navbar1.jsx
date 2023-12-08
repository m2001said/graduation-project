import React, { useState, useRef, useEffect } from "react";
import "./navbar1.css";
import { useSelector } from "react-redux";

const Navbar1 = () => {
  const { navbar } = useSelector((state) => state.template);
  const [openMenu, setOpenMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 667);
  const menuRef = useRef(null);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("toggle-menu")) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className="Nav-container ">
        <a href="#" className="logo">
          <img src={navbar.logo} alt="Logo" />
        </a>
        <nav>
          {isSmallScreen && (
            <div ref={menuRef} className={`toggle-menu ${openMenu ? "open" : ""}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          )}
          <ul className={isSmallScreen && openMenu ? "show" : ""}>
            {/* Map over navbar.links to dynamically generate links */}
            {navbar.links.map((link, index) => (
              <li key={index}>
                <a href="#" onClick={() => setOpenMenu(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar1;
