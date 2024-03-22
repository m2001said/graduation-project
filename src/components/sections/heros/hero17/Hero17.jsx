import { useSelector } from "react-redux";
import PrimaryButton17 from "../../shared/shared17/PrimaryButton17";

const Hero17 = () => {
  const hero = useSelector((state) => state.template17.hero);
  const BgStyle = {
    backgroundImage: `url(${hero.HeroBg})`, // corrected syntax
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div style={BgStyle} className="container17 relative z-[-1]">
        <div className=" py-16 sm:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text-content section */}
            <div className="space-y-7 text-[var(--color17-dark)] order-2 sm:order-1">
              <h1 data-aos="fade-up" className="text-5xl ">
                {" "}
                <span className="text-[var(--color17-secondary)]  text-7xl ephesis">{hero.coloredHeading1}</span> {hero.headingPart1}{" "}
                <span className="text-[var(--color17-secondary)]  text-7xl ephesis">{hero.coloredHeading2}</span>
                {hero.headingPart2}
              </h1>
              <p className="lg:pr-64" data-aos="fade-up" data-aos-delay="300">
                {hero.paragraphs}
              </p>

              {/* button section */}
              <div data-aos="fade-up" data-aos-delay="500">
                <PrimaryButton17 />
              </div>
            </div>
            {/* image section */}

            <div data-aos="zoom-in" data-aos-delay="500" className="relative z-30 order-1 sm:order-2">
              <img src={hero.photos} alt="" className="w-full sm:scale-125 sm:translate-y-16" /> {/* corrected property name */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero17;
