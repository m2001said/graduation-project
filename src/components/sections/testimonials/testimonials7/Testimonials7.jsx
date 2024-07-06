import React from "react";
import styles from "../../heros/hero7/styles7/style";
import FeedbackCard from "../testimonials7/feedback7/FeedbackCard7";
import { useSelector } from "react-redux";


const Testimonials7 = ({ template }) => {

  const ownTestimonials= useSelector((state) => state.ownTemplate.testimonials);
  const testimonials = template ? template.testimonials : ownTestimonials;
  
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
            <h2 className={styles.heading2}>
              {testimonials.title} <br className="sm:block hidden" /> {testimonials.subtitle}
            </h2>
            <div className="w-full md:mt-0 mt-6">
              <p className={`${styles.paragraph} text-left max-w-[450px]`} style={{ color: "var(--website-7-color-5)" }}>
                {testimonials.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-0">
            {testimonials.testimonials.map((card, index) => (
              <FeedbackCard key={index} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials7;
