import React from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import RightSide from "../components/dashboard/sections/RightSide";
const Dashboard = () => {
  return (
    <section className="dashboard-container mx-auto relative">
      {/* here */}
      <TopSide />
      
      {/* this is the solution for aos li */}
      <div className="w-full flex-between flex-col md:flex-row dashboard-subContainer ">
        <LeftSide />
           <RightSide />
 
      </div>
    </section>
  );
};

export default Dashboard;
