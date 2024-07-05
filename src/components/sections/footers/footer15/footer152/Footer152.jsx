import React from "react";
import { useSelector } from "react-redux";

const Blog15 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.blogs);
  const blog = template ? template.blogs : ownFooter;
  

  const Card = ({ date, title, imgUrl, description }) => {
    return (
      <div className="hoverBtn">
        <div className="blog15_4 rounded-[20px] py-[30px] px-[35px] relative overflow-hidden">
          <p className="text-[13px] font-medium blog15_7">{date}</p>
          <p className="text-2xl blog15_6 font-bold hover:text-[#29a587] my-[15px]">{title}</p>
          <p className="blog15_5 opacity-80 leading-[1.7rem]">{description} </p>
          <span className="pt-[10px]">
            <a href="#" className="font-bold flex items-center gap-x-2 no-underline text-[var(--website-15-color-5)] hover:text-[var(--website-15-color-2)]">
              {blog.buttonText}
              <img src={blog.imgUrl} style={{ width: "30px", height: "30px" }} alt="icon" />
            </a>
          </span>
          <img src={imgUrl} alt={title} className="rounded-[18px] h-[180px] w-full object-cover mt-[30px]" />
        </div>
      </div>
    );
  };

  return (
    <main className="pb-5 pt-16 px-3 blog15" id="blog">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 blog15_1">{blog.title} </h1>
        <p className="font-bold text-sm blog15_2 flex items-center text-center gap-x-4">{blog.subtitle}</p>
        <section className="grid lg:grid-cols-3 grid-cols-2 grid-col-1 gap-10 mt-[60px]">
          {blog.blogs.map((card, index) => (
            <div key={index} className="lg:col-span-1 col-span-2">
              <Card date={card.date} title={card.title} imgUrl={card.imgUrl} description={card.description} />
            </div>
          ))}
        </section>
        <span className="block rounded-full mt-[90px] h-14 border border-black border-solid shadowbtn">
          <button className="h-full font-bold px-10 rounded-full border-2 border-solid border-transparent blog15_8 blog15_9 " tabIndex="0" role="button">
            {blog.linkText}
          </button>
        </span>
      </div>
    </main>
  );
};

export default Blog15;
