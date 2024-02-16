import React from "react";
import { useSelector } from "react-redux";

const Testimonials15 = () => {
  const { testimonials15 } = useSelector((state) => state.template15);

  const Card = ({ name, job, image }) => {
    return (
      <div className="hoverBtn">
        <div className="test15_4 rounded-[20px] py-[30px] relative overflow-hidden">
          <div className="relative">
            <img src={testimonials15[0].imgUrl.quoyes} alt="" className="absolute z-10" />
            <img src={image} className="rounded-[18px] h-[180px] w-full object-cover" />
          </div>
          <p className="test15_5 opacity-80 my-[30px] leading-[1.7rem] text-[15px] pl-[5px]">{testimonials15[0].title.pargarf} </p>
          <span className="m-0">
            <p className="text-[21px] font-bold text-center test15_6 ">{name}</p>
            <p className="text-[#262626] font-bold text-center test15_7">{job}</p>
          </span>
          <div className="absolute -right-6 -bottom-6  bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };
  return (
    <main className="pb-5 pt-52 px-3" id="testimonals">
      <div className="container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 test15_1">{testimonials15[0].title.title1}</h1>
        <p className="font-bold text-sm text-[#29a37] flex items-center text-center justify-center gap-x-4 text-4xl test15_2">
          {testimonials15[0].title.title2}
          <span className="caveat text-4xl test15_3">{testimonials15[0].title.title3}</span>
        </p>
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[60px] w-full">
          <Card
            name={testimonials15[0].Card1.name}
            job={testimonials15[0].Card1.job}
            image={testimonials15[0].Card1.image}
            text={testimonials15[0].Card1.text}
          />
          <Card
            name={testimonials15[0].Card2.name}
            job={testimonials15[0].Card2.job}
            image={testimonials15[0].Card2.image}
            text={testimonials15[0].Card2.text}
          />
          <Card
            name={testimonials15[0].Card3.name}
            job={testimonials15[0].Card3.job}
            image={testimonials15[0].Card3.image}
            text={testimonials15[0].Card3.text}
          />
          <Card
            name={testimonials15[0].Card4.name}
            job={testimonials15[0].Card4.job}
            image={testimonials15[0].Card4.image}
            text={testimonials15[0].Card4.text}
          />
          <Card
            name={testimonials15[0].Card5.name}
            job={testimonials15[0].Card5.job}
            image={testimonials15[0].Card5.image}
            text={testimonials15[0].Card5.text}
          />
        </section>
      </div>
    </main>
  );
};

export default Testimonials15;
