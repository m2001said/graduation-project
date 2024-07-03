import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./demoVideo.css";
import demo from "../../../assets/videos/demo.mp4";
import { useTranslation } from "react-i18next";

const DemoVideo = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <div className="demo-section bg-gradient-to-r from-[#481b91] to-[#240d55]">
        <div className="container mx-auto text-center px-4 py-4">
          <div className="text-info">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none"
            >
              {t("DEMOLIVE.TITLE")}
            </h1>
            <p data-aos="fade-down" data-aos-duration="1000" className="mx-auto max-w-[700px] text-gray-200 md:text-xl ">
              {t("DEMOLIVE.DESCRIPTION")}
            </p>
          </div>
          <div className="demo-video py-2" data-aos="fade-down" data-aos-duration="1000">
            <video src={demo} controls></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoVideo;
