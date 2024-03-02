import React from "react";
import { useSelector } from "react-redux";
import styles, { layout } from "../../../heros/hero7/styles7/style";
import Button7 from "../feature7_1/Button7";

const FeatureCard = ({ imgUrl, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== 2 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue`}>
        <img src={imgUrl} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]" style={{ color: "var(--color5)" }}>
          {content}
        </p>
      </div>
    </div>
  );
};

const Business7 = () => {
  const { feature } = useSelector((state) => state.template7);
  const { text, title, ...features } = feature;
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {title.titleA} <br className="sm:block hidden" /> {title.titleB}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color2)" }}>
          {title.titleC}
        </p>
        <Button7 styles={`px-4 py-5 mt-6  text-[var(--color2)] rounded-full bg-[var(--color3)] `} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {Object.values(features).map((f, index) => (
          <FeatureCard key={f.id} {...f} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business7;
