import React, { useRef } from "react";
import "./navbar6.css";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

const Navbar6 = () => {
  const { navbar } = useSelector((state) => state.template6);
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="nav-6">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <span>
                <img src={navbar.imgUrl} alt="logo" className="logo6-icon" />
              </span>{" "}
                <img src={navbar.logo} alt="logo" className="design6-Logo" />
            </h2>
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navbar.links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={`#${item}`} onClick={menuToggle}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="menu__right">
                <div className="custom__search ">
                  <input type="text" placeholder="search item...." />
                  <span>
                    <img src={navbar.searchIcon} alt="" className="ico" />
                  </span>
                </div>
              </div>
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
              <img src={navbar.menuIcon} alt="" onClick={menuToggle} className="ico" />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar6;
