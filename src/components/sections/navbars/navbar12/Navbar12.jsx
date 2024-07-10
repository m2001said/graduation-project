import React, { useEffect, useState } from "react";
import "./navbar12.css";
import { useSelector } from "react-redux";

const Navbar = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`nav12 container12 ${sticky ? "dark-nav12" : ""}`}>
      <img src={navbar.imgUrl} alt="logo" className="logo12" />
      <img src={navbar.icon} alt="menu-icon" className="menu-icon12" onClick={toggleMenu} />
      <ul className={mobileMenu ? "mobile-menu-open" : "mobile-menu-closed"}>
        {navbar.links.map((link, index) => (
          <li>
            <a key={index} href={`#${link.url}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
