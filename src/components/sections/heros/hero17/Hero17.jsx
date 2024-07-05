import { useSelector } from "react-redux";


const Hero17 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
    const [imageLoaded, setImageLoaded] = useState(false);

  const BgStyle = {
    backgroundImage: `url(${hero.imgUrl})`, 
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div style={BgStyle} className="container17 relative px-4">
        <div className="py-16 sm:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            <div className="space-y-7 order-2 sm:order-1">
              <h1 className="text-5xl sm:text-wrap">
                <span className="text-[var(--website-17-color-2)] text-8xl ephesis">
                  {hero.title}
                  <br />
                </span>
                <span className="text-[var(--website-17-color-5)] lg:text-5xl sm:text-xl sm:text-wrap ephesis">
                  {hero.subtitle}
                </span>
              </h1>
              <p className="lg:pr-64 text-2xl text-[var(--website-17-color-2)]">{hero.description}</p>
            </div>
            <div className={`relative order-2 sm:order-1 ${imageLoaded ? 'fadeIn17' : ''}`}>
              <img
                src={hero.imageUrl}
                alt=""
                className="w-2/3 sm:scale-125 sm:translate-y-16"
                onLoad={handleImageLoad}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero17;
