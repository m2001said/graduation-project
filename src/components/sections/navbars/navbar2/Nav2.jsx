import React from "react";
import "./nav2.css";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} href="#">
        <FaHome />
      </a>
      <a href="#services2" onClick={() => setActiveNav("#services2")} className={activeNav === "#services2" ? "active" : "#services2"}>
        <FaInfoCircle />
      </a>
      <a href="#projects2" onClick={() => setActiveNav("#projects2")} className={activeNav === "#projects2" ? "active" : "#projects2"}>
        <FaBook />
      </a>
      <a href="#testimonials2" onClick={() => setActiveNav("#testimonials2")} className={activeNav === "#testimonials2" ? "active" : "testimonials2"}>
        <FaHandsHelping />
      </a>
      <a href="#contactUs2" onClick={() => setActiveNav("#contactUs2")} className={activeNav === "#contactUs2" ? "active" : "#contactUs2"}>
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
