import React from "react";
import ItemsController from "../controllers/ItemsController";
const LeftSide = () => {
  return (
    <div className="md:w=1/4 flex-1 w-full pb-6 md:pr-1 bg-white md:h-screen md:overflow-y-auto md:overflow-x-hidden">
      <div className="update-controller">
        <div className="flex-between ">
          <h3 className="body-bold  cursor-pointer uppercase">edit sections</h3>
        </div>
      </div>
      <ItemsController />
    </div>
  );
};

export default LeftSide;
