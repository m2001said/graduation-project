import { useSelector } from "react-redux";
import PrimaryButton17 from "../../shared/shared17/PrimaryButton17";

const Hero17 = () => {
  const hero = useSelector((state) => state.template17.hero);
  const BgStyle = {
    backgroundImage: `url(${hero.backgroundImg})`, 
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div style={BgStyle} className="container17 relative px-4 z-[-1]">
        <div className=" py-16 sm:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text-content section */}
            <div className="space-y-7  order-2 sm:order-1">
              <h1 className="text-5xl sm:text-wrap ">
                <span className="text-[var(--website-17-color-2)]  text-7xl  ephesis">
                  {hero.title}
                  <br></br>
                </span>
                <span className="text-[var(--website-17-color-3)]  lg:text-5xl sm:text-xl sm:text-wrap  ephesis">{hero.subtitle}</span>
              </h1>
              <p className="lg:pr-64">{hero.description}</p>

              {/* button section */}
              <div>
                <PrimaryButton17 className="order-3" />
              </div>
            </div>
            {/* image section */}
            <div className="relative z-30 order-2 sm:order-1">
              <img src={hero.imgUrl} alt="" className="w-full sm:scale-125 sm:translate-y-16" /> {/* corrected property name */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero17;
