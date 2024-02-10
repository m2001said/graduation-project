import React from "react";
import { useSelector } from "react-redux";
import "../header11/header11.css";

const Header11 = () => {
  const { header11 } = useSelector((state) => state.template11);
  return (
    <div className="home11__socials">
      <a href={header11[0].links.link_instagram} className="home11__social-link" target="_blank">
        <img src={header11[0].imgUrl.imgUrl_instagram} alt="" />
      </a>
      <a href={header11[0].links.link_twitter} className="home11__social-link" target="_blank">
        <img src={header11[0].imgUrl.imgUrl_twitter} alt="" />
      </a>
      <a href={header11[0].links.link_behance} className="home11__social-link" target="_blank">
        <img src={header11[0].imgUrl.imgUrl_behance} alt="" />
      </a>
      <a href={header11[0].links.link_dribble} className="home11__social-link" target="_blank">
        <img src={header11[0].imgUrl.imgUrl_dribble} alt="" />
      </a>
      <a href={header11[0].links.link_pinterest} className="home11__social-link" target="_blank">
        <img src={header11[0].imgUrl.imgUrl_pinterest} alt="" />
      </a>
    </div>
  );
};
export default Header11;
