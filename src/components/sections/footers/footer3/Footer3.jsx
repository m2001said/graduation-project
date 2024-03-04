import React from "react";
import "./footer3.css";
import { useSelector } from "react-redux";
const Footer3 = () => {
  const { footer } = useSelector((state) => state.template3);

  return (
    <div className="footer3-container">
      <hr />
      <div className="footer3">
        <div className="scoil-links-f3">
          <img src={footer.imgUrl[0]} alt="" />
          <img src={footer.imgUrl[1]} alt="" />
          <img src={footer.imgUrl[2]} alt="" />
        </div>

        <div className="logo-f3">
          <img src={footer.imgUrl[3]} alt="" />
        </div>
      </div>
      <div className="blur3 blur-f-1"></div>
      <div className="blur3 blur-f-2"></div>
    </div>
  );
};

export default Footer3;
