import "./hero4.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Hero4 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    const handleResize = () => {
      // Manually refresh AOS on window resize
      AOS.refresh();
    };

    // Refresh AOS on component mount
    AOS.refresh();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero-wrapper" data-aos="fade-up">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left" data-aos="fade-right">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>{hero.title}</h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>{hero.description}</span>
            <span>{hero.text}</span>
          </div>

          <div className="flexCenter search-bar">
            {/* <HiLocationMarker color="var(--blue)" size={25} /> */}
            <input type="text" />
            <button className="button">{hero.buttonText}</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                {hero.heros[0].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText">{hero.heros[0].title}</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                {hero.heros[1].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText">{hero.heros[1].title}</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                {hero.heros[2].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText">{hero.heros[2].title}</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src={hero.imgUrl} alt="houses" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
