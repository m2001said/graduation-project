import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Pricing15 = () => {
  const { pathname } = useLocation();
  const pricing = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.pricing;
    } else {
      return state.template15.pricing;
    }
  });
  // const { pricing } = useSelector((state) => state.template15);

  const Card = ({ title, amount, duration, children, description }) => {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    return (
      <div className={`relative ${isClicked ? "clicked" : ""}`}>
        <div
          className={`${
            title === "FREELANCING" ? "border-2 border-solid" : ""
          } pricin15_4 rounded-p[20px] py-[30px] px-[35px] relative overflow-hidden dark:text-black`}
          onClick={handleClick}
        >
          <p className="text-[13px] font-bold mb-[15px] m-0 pricin15_9">{title}</p>
          <div className="flex items-center gap-x-4 my-5">
            <p className="text-[30px] font-bold m-0 pricin15_10">{amount}</p>
            <p className="font-bold m-0 pricin15_11">{duration}</p>
          </div>
          <p className="pricin15_5">{description}</p>
          {children}
          <span className="block rounded-full mt-8 h-14 border-2 border-black border-solid shadowbtn">
            <button className="pricin15_7 pricin15_8 h-full font-bold px-10 rounded-full relative z-10 w-full flex items-center justify-center cursor:pointer">
              {pricing.actionButton}
              <img src={pricing.icons[1]} style={{ width: "30px", height: "30px", paddingLeft: "5px" }} alt="icon" />
            </button>
          </span>
          <div className="absolute z-20 -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-5 pt-52 px-3 pricn15" id="pricing">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 pricin15_1">{pricing.title}</h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center gap-x-4 pricin15_2">{pricing.subtitle}</p>
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[60px] w-full">
          {pricing.plans.map((card, index) => (
            <Card key={index} amount={card.amount} title={card.title} duration={card.duration} description={card.description}>
              <div>
                {/* {pricing.plans[index] && */}
                {card.properties.map((property, index) => (
                  <span key={index} className="flex items-center gap-x-4">
                    <img src={pricing.icons[0]} style={{ width: "30px", height: "30px" }} alt="icon" />
                    <p className="pricin15_6">{property}</p>
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Pricing15;
