import React, { useRef } from "react";
import "./navbar6.css";
import { useSelector } from "react-redux";

const Navbar6 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar; 
   const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="nav-6">
      <div className="container mx-auto px-8 py-2">
        <div className="navigation">
          <div className="logo flex items-center gap-1">
            <img src={navbar.title} alt="" className="design6-logo" />
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper flex items-center gap-5">
              <ul className="nav__list">
                {navbar.links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <span className="cart__icon">
              <img src={navbar.shoppingIcon} alt="" className="ico" />
              <span className="badge">2</span>
            </span>
          </div>

          <div className="mobile__menu">
            <span>
              <img src={navbar.icon} alt="" onClick={menuToggle} className="ico" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar6;
