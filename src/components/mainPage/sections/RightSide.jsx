import React from "react";
import { useSelector } from "react-redux";
const RightSide = () => {
  const { heroSection } = useSelector((state) => state.template);

  const screen = useSelector((state) => state.screen);
  return (
    <div className="flex-1 flex justify-start flex-col items-center bg-slate-100  h-screen text-black p-4">
      <div style={{ backgroundColor: "#ddd", padding: "1rem", width: "100%", maxWidth: screen === "pc" ? "100%" : screen === "tablet" ? "991px" : "500px" }}>
        <div className="flex flex-col items-start overflow-hidden">
          <div className="p-3 border">
            <p>Hero section</p>
          </div>
          <div className="p-3 border">
            <p>{heroSection.title}</p>
          </div>
          <div className="p-3 border">
            <p>{heroSection.subTitle}</p>
          </div>
          <div className="p-3 border">
            <p>{heroSection.description}</p>
          </div>
          <div className="w-3/4">
            <img src={heroSection.imgUrl} className="card_img" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
