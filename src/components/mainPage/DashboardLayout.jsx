import React from "react";
import RightSide from "./sections/RightSide";
import LeftSide from "./sections/LeftSide";
import TopSide from "./sections/TopSide";

const DashboardLayout = () => {

  return (
    <section className="w-full ">
      <TopSide />
      <div className="flex-center">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};

export default DashboardLayout;
