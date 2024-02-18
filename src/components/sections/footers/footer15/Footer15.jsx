import React from "react";
import { useSelector } from "react-redux";

const Footer15 = () => {
  const { footer15 } = useSelector((state) => state.template15);

  return (
    <footer className="px-3 bg-transparent">
      <div className="container mx-auto py-[60px] sm:flex-row flex-col gap-y-4 items-center justify-between">
        <p className="text-[19px] text-[#262626] dark:text-white font-bold">
          <span className="flex items-center gap-x-8 pb-6 text-[22px] ml-[650px] cursor:pointer">
            <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
              <img src={footer15[0].imgUrl.FaTwitter} alt="Twitter" style={{ width: "40px", height: "40px" }} />
            </a>
            <a href="https://dribbble.com/session/new" target="_blank" rel="noopener noreferrer">
              <img src={footer15[0].imgUrl.FaDribbble} alt="Dribbble" style={{ width: "40px", height: "40px" }} />
            </a>
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
              <img src={footer15[0].imgUrl.FaBehance} alt="Behance" style={{ width: "40px", height: "40px" }} />
            </a>
          </span>
          <span className="ml-[500px]">
            <span className="foot15_1"> {footer15[0].title.title1}</span> <span className="foot15_2">{footer15[0].title.title2} </span>
            <span className="foot15_3"> {footer15[0].title.title3}</span>
          </span>
        </p>
        <p className="text-[17px] foot15_4 font-bold ml-[600px]">
          {footer15[0].title.title4} <span className="foot15_5">{footer15[0].title.title5}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer15;
