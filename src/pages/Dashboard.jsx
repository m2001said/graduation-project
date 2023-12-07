import React from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import { useSelector } from "react-redux";
import RightSide from "../components/dashboard/sections/RightSide";
const Dashboard = () => {
  const screen = useSelector((state) => state.screen);
  return (
    <section className="dashboard-container mx-auto ">
      <TopSide />
      <div className="w-full flex-between flex-col md:flex-row bg-white">
        <LeftSide />
        <div
          className="md:w-3/4 w-full flex justify-start flex-col items-center h-screen text-black  p-2"
          style={{ maxWidth: screen === "pc" ? "100%" : screen === "tablet" ? "991px" : "767px" }}
        >
          <div className="w-full h-full border border-slate-300 shadow md:rounded-tl-3xl md:rounded-bl-3xl  mb-2 bg-slate-50 overflow-y-auto overflow-x-hidden mx-2 md:mx-4 md:self-start md:ml-1 ">
            <RightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
