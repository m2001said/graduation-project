import React from "react";

const Header11 = ({ template }) => {
  const hero = template.hero;
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
