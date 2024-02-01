import React from "react";
import "./demoVideo.css";
import demo from "../../../assets/videos/demo.mp4";
const DemoVideo = () => {
  return (
    <>
      <div className="demo-section bg-gradient-to-r from-[#481b91] to-[#240d55]">
        <div className="container mx-auto text-center px-4 py-4">
          <div className="text-info">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">How to Use Our Website</h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl ">
              Watch the video below to understand how to navigate and use our website effectively.
            </p>
          </div>
          <div className="demo-video py-2">
            <video src={demo} controls></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoVideo;
