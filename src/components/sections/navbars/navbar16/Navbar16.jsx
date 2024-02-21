import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./navbar16.css";

const Navbar16 = () => {
  const { navbar } = useSelector((state) => state.template16);
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);

    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  return (
    <header className={`${scrollHeader ? "scroll-header16 " : ""} header16 `}>
      <nav className="nav16  container16 ">
        <a href="/" onClick={scrollTop} className="nav__logo16 ">
          <img src={navbar.logo} alt="" className="nav__logo-img16 " />
        </a>
        <div className={`${showMenu ? "show-menu16 " : ""} nav__menu16 `}>
          <ul className="nav__list16 ">
            {navbar.links.map(({ name, path }, index) => (
              <li className="nav__item16 " key={index}>
                <a href={`#${path}`} className="nav__link16 " onClick={() => setShowMenu(!showMenu)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__toggle16 " onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Navbar16;
