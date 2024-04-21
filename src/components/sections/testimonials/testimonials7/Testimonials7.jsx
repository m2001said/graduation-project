import React from "react";
import styles from "../../heros/hero7/styles7/style";
import FeedbackCard from "../testimonials7/feedback7/FeedbackCard7";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Testimonials7 = () => {
  const { cards } = useSelector((state) => state.template7.feedbacks);
  // const { title, subtitle, content } = useSelector((state) => state.template7.testimonial);

  const { pathname } = useLocation();
  const { title, subtitle, content } = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.testimonials;
    } else {
      return state.template7.testimonials;
    }
  });
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
        <h2 className={styles.heading2}>
          {title} <br className="sm:block hidden" /> {subtitle}
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`} style={{ color: "var(--color5)" }}>
            {content}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-0">
        {cards.map((card, index) => (
          <FeedbackCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials7;
