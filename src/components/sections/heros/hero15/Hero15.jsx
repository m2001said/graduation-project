import React from "react";
import { useSelector } from "react-redux";

const Hero15 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  return (
    <main className="min-h-screen flex xl:pt-0 pt-36 hero15" id="home">
      <div className="xl:flex items-center container max-w-[1300px] mx-auto lg:px-3">
        <section className="xl:w-1/2 xl:text-left text-center">
          <p className="text-[25px] font-bold darkModeTextColor15">
            {hero.text} <span className="btnHoverColor15">{hero.name}</span>
          </p>
          <h1 className="xl:text-[65px] text-[74px] mt-10 mb-5 sm:py-0 py-4 btnHoverColor15 textShadow">{hero.subtitle}</h1>
          <p className="text-[15px] mb-5 font-bold darkModeTextColor15">{hero.description}</p>
          <div className="xl:block hidden">
            <div className="flex items-center gap-x-8 pb-6 text-[22px]">
              {hero.medias.map((icon, index) => (
                <a key={icon.url} href={icon.url} target="_blank" rel="noopener noreferrer">
                  <img src={icon.icon} alt={`Icon ${index + 1}`} style={{ width: "40px", height: "40px" }} />
                </a>
              ))}
            </div>
            <div className="flex items-center w-fit text-[13px] font-bold pt-4">
              <span className="block rounded-full h-14 border border-black border-solid shadowbtn">
                <button className="bg-transparenent darkModeTextColor15 h-full font-bold px-10 rounded-full hover:border-2 border-solid bg-[var(--website-15-color-5)]">
                  {hero.buttonText}
                </button>
              </span>
              <hr className="w-10 h-[3px] bg-black mr-6 btnHoverColor15" />
              <p className="btnHoverColor15">{hero.linkText}</p>
            </div>
          </div>
        </section>
        <section className="xl:w-1/2">
          <div className="w-full sm:h-[680px] h-96 relative xl:block flex justify-center xl:mt-0 mt-16 ">
            <img src={hero.imgUrl[0]} alt="" className="absolute z-10 lg:w-auto w-full sm:w-[200px] lg:h-[500px] object-cover ml-[60px] w-[350px] mr-[45px]" />
            <div className="absolute z-10 lg:bottom-24 bottom-20 xl:-left-10 lg:left-40 left-0">
              <div className="block rounded-full sm:h-20 h-14 w-fit shadowbtn relative z-10">
                <button className="h-full sm:px-6 px-3 border border-black border-solid rounded-full lg:text-[31px] text-[13px] font-bold flex items-center darkModeTextColor15">
                  {hero.title}
                </button>
                <button className="h-full sm:px-6 px-3 border border-black border-solid rounded-full lg:text-[31px] text-[13px] font-bold flex items-center btnHoverColor15 ml-20">
                  {hero.jop}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero15;
