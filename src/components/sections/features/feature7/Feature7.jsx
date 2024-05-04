import React from "react";
import { useSelector } from "react-redux";
import styles, { layout } from "../../heros/hero7/styles7/style";
import Button7 from "../feature7/Button7";
import { useLocation } from "react-router";

const FeatureCard = ({ title, description, imgUrl, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== 2 ? "mb-6" : "mb-0"} feature-card`}>
      <div className="w-[64px] h-[64px] rounded-full bg-dimBlue">
        <img src={imgUrl} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]" style={{ color: "var(--color5)" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const Business7 = () => {
  const { pathname } = useLocation();
  const feature = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.features;
    } else {
      return state.template7.features;
    }
  });

  const { buttonText, title, features } = feature; // Change feature to items
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {title.title} <br className="sm:block hidden" /> {title.subtitle}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color6)" }}>
          {title.content}
        </p>
        <Button7 text={buttonText} styles={`px-4 py-5 mt-6 text-[var(--color2)] rounded-full bg-[var(--color3)]`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((f, index) => (
          <FeatureCard key={index} {...f} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business7;
