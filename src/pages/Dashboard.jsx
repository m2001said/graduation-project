import React from "react";
import TopSide from "./../components/mainPage/sections/TopSide";
import LeftSide from "../components/mainPage/sections/LeftSide";
import RightSide from "./../components/mainPage/sections/RightSide";

const Dashboard = () => {
  return (
    <section className="container mx-auto">
      <TopSide />
      <div className="flex-center">
        
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};

export default Dashboard;
