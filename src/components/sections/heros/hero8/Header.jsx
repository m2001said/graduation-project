import React from "react";
import Logo from "../../../../assets/images/images8/logo.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const { Header8 } = useSelector((state) => state.template8);
  console.log(Header8);
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="picture of logo" />
          </a>
          <button className="btn btn-sm"> {Header8.btnText} </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
