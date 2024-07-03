import React from "react";
import styles from "../../../sections/heros/hero7/styles7/style"; // Adjust the path based on your project structure
import Button7 from "../../features/feature7/Button7";

const Cta7 = ({ template }) => {
  const cta = template.cta;

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
          <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>{cta.title}</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--website-7-color-1)" }}>
              {cta.description}
            </p>
          </div>
          <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button7 buttonText={cta.buttonText} styles={`px-4 py-5 mt-6 text-[var(--website-7-color-5)] rounded-full bg-[var(--website-7-color-1)]`} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cta7;
