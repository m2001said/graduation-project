import React, { useState } from "react";
import "./navbar2.css";

const Navbar2 = ({ template }) => {
  const [activeNav, setActiveNav] = useState("#");
  const navbar = template.navbar;

  return (
    <nav className="nav2 mb-5">
      {navbar.links.map((item) => (
        <a
          key={item.url}
          href={item.url}
          onClick={() => setActiveNav(item.url)}
          className={activeNav === item.url ? "active" : ""}
        >
          <img src={item.imgUrl} alt="" className="nav-icon" />
          <span className="nav-text">{item.text}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar2;
