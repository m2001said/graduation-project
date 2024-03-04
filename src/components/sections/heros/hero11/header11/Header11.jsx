import React from "react";
import { useSelector } from "react-redux";
import "../header11/header11.css";

const Header11 = () => {
  const { header } = useSelector((state) => state.template11);
  return (
    <div className="home11__socials">
      <a href={header.links.link_instagram} className="home11__social-link" target="_blank">
        <img src={header.imgUrl[0]} alt="" />
      </a>
      <a href={header.links.link_twitter} className="home11__social-link" target="_blank">
        <img src={header.imgUrl[1]} alt="" />
      </a>
      <a href={header.links.link_behance} className="home11__social-link" target="_blank">
        <img src={header.imgUrl[2]} alt="" />
      </a>
      <a href={header.links.link_dribble} className="home11__social-link" target="_blank">
        <img src={header.imgUrl[3]} alt="" />
      </a>
      <a href={header.links.link_pinterest} className="home11__social-link" target="_blank">
        <img src={header.imgUrl[4]} alt="" />
      </a>
    </div>
  );
};
export default Header11;
