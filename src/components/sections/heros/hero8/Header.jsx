import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { header } = useSelector((state) => state.template8);
  console.log(header);
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={header.UrlImg} alt="picture of logo" />
          </a>
          <button className="btn btn-sm"> {header.btnText} </button>
        </div>
      </div>
    </div>
  );
};

export default Header;