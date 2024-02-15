import React from "react";
import Logo from "../../../../assets/images/images8/logo.svg";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="picture of logo" />
          </a>
          <button className="btn btn-sm"> Work with me </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
