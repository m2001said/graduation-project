import React, { useState } from "react";
import { useSelector } from "react-redux";
import AllControllers from "../controllers/AllControllers";
import ColorController from "../controllers/ColorController";
const LeftSide = () => {
  const [showLeftSide, setShowLeftSide] = useState(true);
  const handleClick = () => {
    setShowLeftSide(!showLeftSide);
  };

  const template = useSelector((state) => state.template);
  const sections = Object.keys(template);
  return showLeftSide ? (
    <div className="max-md:w-full flex-auto w-60 pb-6 bg-white md:overflow-y-auto md:overflow-x-hidden dashboard-subContainer" style={{ minWidth: "250px" }}>
      <div className="update-controller">
        <div className="flex-between cursor-pointer" onClick={handleClick}>
          <h3 className="body-bold  cursor-pointer uppercase">edit sections</h3>
          <img src="/assets/icons/goLeft.svg" width={18} alt="down" />
        </div>
      </div>
      {sections.map((section) => {
        if (section === "colors") return <ColorController key={section} />;
        else return <AllControllers controllerSection={section} key={section} />;
      })}
    </div>
  ) : (
    <div className="absolute top-3 left-4 bg-white rounded-sm p-1 flex-center cursor-pointer" onClick={handleClick}>
      <p className="font-bold white mr-1">Open Dashboard</p>
      <img src="/assets/icons/down.svg" width={18} alt="down" />
    </div>
  );
};

export default LeftSide;
