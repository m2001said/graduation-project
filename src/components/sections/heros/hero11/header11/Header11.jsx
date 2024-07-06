import React from "react";
import { useSelector } from "react-redux";

const Header11 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  return (
    <div className="home11__socials">
      {hero.heros.map((icon, index) => (
        <a key={index} href={icon.url} className="home11__social-link" target="_blank">
          <img src={icon.icon} alt="" />
        </a>
      ))}
    </div>
  );
};

export default Header11;
