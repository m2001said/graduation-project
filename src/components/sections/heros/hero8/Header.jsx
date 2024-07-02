import React from "react";

const Header = ({ template }) => {
  const header = template.header;

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={header.imgUrl} alt="picture of logo" />
          </a>
          <button className="btn btn-sm"> {header.buttonText} </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
