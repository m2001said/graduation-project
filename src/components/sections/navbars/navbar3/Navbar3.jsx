import React, { useState } from "react";
import "./navbar3.css";
import { useSelector } from "react-redux";

const Navbar3 = () => {
  const { navbar3 } = useSelector((state) => state.template3);
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="navbar3">
      <img src={navbar3.imgUrl[0].imgUrlA} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div className="closed-mobile-menu" onClick={() => setMenuOpened(true)}>
          <img src={navbar3.imgUrl[0].imgUrlB} alt="" className="menu-icon" />
        </div>
      ) : (
        <ul className="navbar3-menu">
          {navbar3.links.map((link, index) => (
            <li key={index}>
              <a href={`#${link}`} onClick={() => setMenuOpened(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar3;
