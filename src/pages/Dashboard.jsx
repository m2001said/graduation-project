import React, { useEffect } from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import RightSide from "../components/dashboard/sections/RightSide";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const screen = useSelector((state) => state.screen);
  const { colors } = useSelector((state) => state.template);

  useEffect(() => {
    for (let index = 0; index < colors.templateColors.length; index++) {
      document.documentElement.style.setProperty(`--website-color-${index + 1}`, colors.templateColors[index]);
    }
  }, []);

  return (
    <section className="dashboard-container mx-auto relative">
      <TopSide />
      <div className="w-full flex-between flex-col md:flex-row dashboard-subContainer overflow-hidden">
        <LeftSide />
        <div className="dashboard-right-section" style={{ maxWidth: screen === "pc" ? "100%" : screen === "tablet" ? "991px" : "767px" }}>
          <div className="w-full border border-slate-300 shadow  md:rounded-tl-3xl md:rounded-bl-3xl  mb-2 overflow-y-auto overflow-x-hidden  mx-2 md:mx-4 md:self-start md:ml-1 relative">
            <RightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
