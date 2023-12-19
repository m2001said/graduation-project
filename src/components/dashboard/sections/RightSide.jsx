import React from "react";
import { Outlet } from "react-router";
const RightSide = () => {
  return (
    <div className="dashboard-subContainer">
      <Outlet />
    </div>
  );
};
export default RightSide;
