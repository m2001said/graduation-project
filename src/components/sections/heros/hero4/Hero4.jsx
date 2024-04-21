import "./hero4.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router";

const Hero4 = () => {
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

  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template4.hero;
    }
  });
  return (
    <section className="hero-wrapper" data-aos="fade-up">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left" data-aos="fade-right">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>{hero.title}</h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>{hero.description1}</span>
            <span>{hero.description2}</span>
          </div>

          <div className="flexCenter search-bar">
            {/* <HiLocationMarker color="var(--blue)" size={25} /> */}
            <input type="text" />
            <button className="button">{hero.buttonText}</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                {hero.stats[0].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText">{hero.stats[0].title}</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                {hero.stats[1].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText">{hero.stats[1].title}</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                {hero.stats[2].end} <span>{hero.icon}</span>
              </span>
              <span className="secondaryText">{hero.stats[2].title}</span>
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
