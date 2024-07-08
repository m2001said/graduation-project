import React, { useState } from "react";
import "./navbar2.css";
import { useSelector } from "react-redux";

const Navbar2 = ({ template }) => {
  const [activeNav, setActiveNav] = useState("#");
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
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
