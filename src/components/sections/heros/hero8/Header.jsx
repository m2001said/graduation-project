import React from "react";
import { useSelector } from "react-redux";

const Header = ({ template }) => {
  const ownHeader = useSelector((state) => state.ownTemplate.header);
  const header = template ? template.header : ownHeader;
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#logo">
            <img src={header.imgUrl} alt="img" />
          </a>
          <button className="btn btn-sm"> {header.buttonText} </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
