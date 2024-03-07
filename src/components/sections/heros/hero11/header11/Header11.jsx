import React from "react";
import { useSelector } from "react-redux";
import "../header11/header11.css";

const Header11 = () => {
  const { hero } = useSelector((state) => state.template11);
  return (
    <div className="home11__socials">
      {hero.mediaIcons.map((icon, index) => (
        <a key={index} href={icon.url} className="home11__social-link" target="_blank">
          <img src={icon.icon} alt="" />
        </a>
      ))}
    </div>
  );
};

export default Header11;
