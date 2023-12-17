import React, { useRef } from "react";
import "./navbar6.css";
import { Container } from "reactstrap";
import restaurant2 from "../../../../assets/images/images6/restaurant-2-line.svg";
import shopping from "../../../../assets/images/images6/shopping-basket-fill.svg";
import menu from "../../../../assets/images/images6/menu-line.svg";
import search from "../../../../assets/images/images6/search-line.svg";

const navLinks = [
  {
    display: "Home",
  },
  {
    display: "About",
  },
  {
    display: "Menu",
  },
  {
    display: "Recipes",
  },
  {
    display: "Contact",
  },
];

const Navbar6 = () => {
 
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
 
  return (

      <header className="nav6">
        <Container>
          <div className="navigation">
            <div className="logo">
              <h2 className="d-flex align-items-center gap-1">
                <span>
                <img src={restaurant2} alt="logo" />
              </span>{" "}
                Chef Food
              </h2>
            </div>
  
            <div className="nav__menu " ref={menuRef}>
              <div className="nav__list__wrapper d-flex align-items-center gap-5">
                <ul className="nav__list">
                  {navLinks.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <a href={"#"} onClick={menuToggle}>
                        {item.display}
                      </a>
                    </li>
                  ))}
                </ul>
  
                <div className="menu__right">
                  <div className="custom__search ">
                    <input type="text" placeholder="search item...." />
                    <span>
                      <img src={search} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            <div>
              <span className="cart__icon">
              <img src={shopping} alt="" />
              <span className="badge">2</span>
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <img src={menu} alt="" onClick={menuToggle}/>
              </span>
            </div>
            
          </div>

        </Container>
      </header>
    )
}

export default Navbar6