import React, { useEffect, useState } from "react";
import "./navbar12.css";
const Navbar = ({ template }) => {
  const navbar = template.navbar;
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`nav12 container12  ${sticky ? "dark-nav12" : ""}`}>
      <img src={navbar.imgUrl} alt="logo" className="logo12" />
      <ul className={mobileMenu ? "" : "mb-menu12"}>
        {navbar.links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <img src={navbar.icon} alt="menu-icon" className="menu-icon12" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
