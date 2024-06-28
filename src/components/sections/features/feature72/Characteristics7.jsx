import React from "react";
import { useSelector } from "react-redux";
import styles, { layout } from "../../heros/hero7/styles7/style";

const Billing = () => {
  const { characteristics } = useSelector((state) => state.template7);
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="product" className={layout.sectionReverse}>
          <div className={layout.sectionImgReverse}>
            <img src={characteristics.images[2]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              {characteristics.title} <br className="sm:block hidden" /> {characteristics.subtitle}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
              {characteristics.description}
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
              <img src={characteristics.images[0]} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
              <img src={characteristics.images[1]} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Billing;
