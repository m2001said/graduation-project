import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../navbar11/navbar11.css";

const Navbar11 = () => {
  const { navbar11 } = useSelector((state) => state.template11);
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside11 show-menu11" : "aside11"}>
        <a href="#" className="nav11_logo">
          <img src={navbar11[0].imgUrl.imgUrl_logo} alt="" />
        </a>

        <nav11 className="nav11">
          <div className="nav11__menu">
            <ul className="nav11__list">
              <li className="nav11__item">
                <a href="#home" className="nav11__link">
                  <img src={navbar11[0].imgUrl.imgUrl_home} alt="" />
                </a>
              </li>

              <li className="nav11__item">
                <a href="#services" className="nav11__link">
                  <img src={navbar11[0].imgUrl.imgUrl_user} alt="" />
                </a>
              </li>

              <li className="nav11__item">
                <a href="#resume " className="nav11__link">
                  <img src={navbar11[0].imgUrl.imgUrl_briefcase} alt="" />
                </a>
              </li>

              <li className="nav11__item">
                <a href="#portfolio" className="nav11__link">
                  <img src={navbar11[0].imgUrl.imgUrl_graduation} alt="" />
                </a>
              </li>

              <li className="nav11__item">
                <a href="#layers" className="nav11__link">
                  <img src={navbar11[0].imgUrl.imgUrl_layers} alt="" />
                </a>
              </li>

              <li className="nav11__item">
                <a href="#blog" className="nav11__link">
                  <img src={navbar11[0].imgUrl.imgUrl_note} alt="" />
                </a>
              </li>

              <li className="nav11__item">
                <a href="#contact" className="nav11__link">
                  <img src={navbar11[0].imgUrl.imgUrl_Bubble} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav11>

        <div className="nav11__footer">
          <span className="copyright11">&copy; 2023 - 2024.</span>
        </div>
      </aside>
      <div className={toggle ? "nav__toggle11 nav__toggle11-open" : "nav__toggle11"} onClick={() => showMenu(!toggle)}>
        <img src={navbar11[0].imgUrl.imgUrl_menu} alt="" className="icon__menu11" />
      </div>
    </>
  );
};

export default Navbar11;
