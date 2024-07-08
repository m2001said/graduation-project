import React from "react";
import styles, { layout } from "../../heros/hero7/styles7/style"; // Adjust the path based on your project structure
import Button7 from "../../features/feature7/Button7";
import { useSelector } from "react-redux";

const CardDeal = ({ template }) => {
  const ownServices = useSelector((state) => state.ownTemplate.services);
  const services = template ? template.services : ownServices;
  return (
    <div id={services.sectionId} className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              {services.title} <br className="sm:block hidden" /> {services.subtitle}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--website-7-color-5)" }}>
              {services.description}
            </p>
            <Button7 buttonText={services.buttonText} styles={`px-4 py-5 mt-6 text-[var(--website-7-color-1)] rounded-full bg-[var(--website-7-color-5)]`} />
          </div>
          <div className={layout.sectionImg}>
            <img src={services.imgUrl} alt="billing" className="w-[100%] h-[100%]" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardDeal;
