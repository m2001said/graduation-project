import "./hero4.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Hero4 = () => {
  const { hero4 } = useSelector((state) => state.template4);
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              {hero4.title}
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>{hero4.description1}</span>
            <span>{hero4.description2}</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">{hero4.buttonText}</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={hero4.stats[0].start} end={hero4.stats[0].end} duration={hero4.duration} /> <span>{hero4.icon}</span>
              </span>
              <span className="secondaryText">{hero4.stats[0].title}</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={hero4.stats[1].start} end={hero4.stats[1].end} duration={hero4.duration} /> <span>{hero4.icon}</span>
              </span>
              <span className="secondaryText">{hero4.stats[1].title}</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={hero4.stats[2].end} /> <span>+</span>
              </span>
              <span className="secondaryText">{hero4.stats[2].title}</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={hero4.imgUrl} alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
