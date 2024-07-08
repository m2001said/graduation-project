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
    <section className="hero-wrapper4" data-aos="fade-up">
      <div className="paddings4 innerWidth4 flexCenter4 hero-container4">
        <div className="flexColStart4 hero-left4" data-aos="fade-up">
          <div className="hero-title4">
            <div className="orange-circle4" />
            <h1>{hero.title}</h1>
          </div>
          <div className="flexColStart4 secondaryText4 flexhero-des4">
            <span>{hero.description}</span>
            <span>{hero.text}</span>
          </div>

          <div className="flexCenter4 search-bar4">
            <input type="text4" />
            <button className="button4">{hero.buttonText}</button>
          </div>

          <div className="flexCenter4 stats4">
            <div className="flexColCenter4 stat4">
              <span>
                {hero.heros[0].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText4">{hero.heros[0].title}</span>
            </div>

            <div className="flexColCenter4 stat4">
              <span>
                {hero.heros[1].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText4">{hero.heros[1].title}</span>
            </div>

            <div className="flexColCenter4 stat4">
              <span>
                {hero.heros[2].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText4">{hero.heros[2].title}</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter4 hero-right4">
          <div className="image-container4">
            <img src={hero.imgUrl} alt="houses" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
