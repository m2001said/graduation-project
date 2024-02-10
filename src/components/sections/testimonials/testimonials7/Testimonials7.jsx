import React from "react";
import styles from "../../heros/hero7/styles7/style";
import FeedbackCard from "../testimonials7/feedback7/FeedbackCard7";
import { useSelector } from "react-redux";

const Testimonials7 = () => {
  const { feedback, test7 } = useSelector((state) => state.template7);
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
        <h2 className={styles.heading2}>
          {test7[0].title.titleA} <br className="sm:block hidden" /> {test7[0].title.titleB}
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`} style={{ color: "var(--color-dim-white)" }}>
            {test7[0].title.titleC}{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-0">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
export default Testimonials7;
