import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pricing15 = () => {
  const { pricing } = useSelector((state) => state.template15);

  const Card = ({ title, amount, duration, children }) => {
    const [isClicked, setIsClicked] = useState(false);

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
          <p className="pricin15_5">{pricing.title.paragraf}</p>
          {children}
          <span className="block rounded-full mt-8 h-14 border-2 border-black border-solid shadowbtn">
            <button className="pricin15_7 pricin15_8 h-full font-bold px-10 rounded-full relative z-10 w-full flex items-center justify-center cursor:pointer">
              {pricing.btn_text.btn1}
              <img src={pricing.imgUrl[1]} style={{ width: "30px", height: "30px", paddingLeft: "5px" }} />
            </button>
          </span>
          <div className="absolute z-20 -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-5 pt-52 px-3 " id="pricing">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 pricin15_1">{pricing.title.title1}</h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center gap-x-4 pricin15_2">
          {pricing.title.title2} <span className="caveat text-3xl pricin15_3">{pricing.title.title3} </span>
        </p>
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[60px] w-full">
          <Card amount={pricing.Card1.amount} title={pricing.Card1.title} duration={pricing.Card1.duration}>
            <div>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6">{pricing.sub_title.sub_title1}</p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6">{pricing.sub_title.sub_title2} </p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6 pl-[30px] line-through">{pricing.sub_title.sub_title3}</p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6 pl-[30px] line-through">{pricing.sub_title.sub_title4}</p>
              </span>
            </div>
          </Card>
          <Card amount={pricing.Card2.amount} title={pricing.Card2.title} duration={pricing.Card2.duration}>
            <div>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6">{pricing.sub_title.sub_title5}</p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6">{pricing.sub_title.sub_title6}</p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6 pl-[30px] line-through">{pricing.sub_title.sub_title7}</p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6 pl-[30px] line-through">{pricing.sub_title.sub_title8}</p>
              </span>
            </div>
          </Card>
          <Card amount={pricing.Card3.amount} title={pricing.Card3.title} duration={pricing.Card3.duration}>
            <div>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6">{pricing.sub_title.sub_title9} </p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6">{pricing.sub_title.sub_title10} </p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6 pl-[30px] line-through">{pricing.sub_title.sub_title11}</p>
              </span>
              <span className="flex items-center gap-x-4">
                <img src={pricing.imgUrl[0]} style={{ width: "30px", height: "30px" }} />
                <p className="pricin15_6 pl-[30px] line-through">{pricing.sub_title.sub_title12}</p>
              </span>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Pricing15;
