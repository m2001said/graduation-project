import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Header11 = () => {
  // const { hero } = useSelector((state) => state.template11);
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template11.hero;
    }
  });
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
