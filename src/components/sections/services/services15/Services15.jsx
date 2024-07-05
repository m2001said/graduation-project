import React from "react";

const Services15 = ({ template }) => {
  const services = template.services;

  const Card = ({ title, subtitle, description }) => (
    <div className="w-full hoverBtn">
      <div className="title15_4 rounded-[18px] py-[20px] px-10 relative overflow-hidden">
        <p className="text-[13px] title15_5 font-bold pb-12">{title}</p>
        <h1 className="text-2xl font-bold title15_5">{subtitle}</h1>
        <p className="opacity-80 min-h-[125px] leading-[1.7rem] title15_6">{description}</p>
        <a href="#pricing" className="font-bold flex items-center gap-x-2 no-underline ml-20 title15_7 hover:text-[var(--website-15-color-2)]">
          {services.buttonText}
          <img src={services.imgUrl} alt="" style={{ width: "30px", height: "30px" }} />
        </a>
        <div className="absolute -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 backgroundcolor15 darkModeColor15 px-3 serve15" id="services">
      <div className="container max-w-[1300px] w-full mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 title15_1">{services.title}</h1>
        <p className="font-bold text-sm textColor flex items-center text-center justify-center gap-x-4 title15_2">{services.subtitle}</p>

        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-8 w-full ">
          {services.services.map((card, index) => (
            <Card key={index} title={card.title} subtitle={card.subtitle} description={card.description} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services15;
