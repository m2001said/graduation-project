import React from "react";
import { useSelector } from "react-redux";

const Blog15 = () => {
  const { blog15 } = useSelector((state) => state.template15);

  const Card = ({ data, title, image }) => {
    return (
      <div className="hoverBtn">
        <div className="blog15_4 rounded-[20px] py-[30px] px-[35px] relative overflow-hidden">
          <p className="text-[13px] font-medium blog15_7">{data}</p>
          <p className="text-2xl blog15_6 font-bold hover:text-[#29a587] my-[15px]">{title}</p>
          <p className="blog15_5 opacity-80 leading-[1.7rem]">{blog15[0].title.paragraf} </p>
          <span className="pt-[10px]">
            <a href="#" className="font-bold flex items-center gap-x-2 no-underline text-black">
              {blog15[0].title.title4}
              <img src={blog15[0].imgUrl.FaArrowRight} style={{ width: "30px", height: "30px" }} />
            </a>
          </span>
          <img src={image} alt={title} className="rounded-[18px] h-[180px] w-full object-cover mt-[30px]" />
        </div>
      </div>
    );
  };

  return (
    <main className="pb-5 pt-52 px-3" id="blog">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 blog15_1">{blog15[0].title.title1} </h1>
        <p className="font-bold text-sm blog15_2 flex items-center text-center gap-x-4">
          {blog15[0].title.title2} <span className="caveat text-3xl blog15_3">{blog15[0].title.title3} </span>
        </p>
        <section className="grid lg:grid-cols-3 grid-cols-2 grid-col-1 gap-10 mt-[60px]">
          <div className="lg:col-span-1 col-span-2">
            <Card data={blog15[0].Card1.data} title={blog15[0].Card1.title} image={blog15[0].Card1.image} />
          </div>
          <div className="lg:col-span-1 col-span-2">
            <Card data={blog15[0].Card2.data} title={blog15[0].Card2.title} image={blog15[0].Card2.image} />
          </div>
          <div className="lg:col-span-1 col-span-2">
            <Card data={blog15[0].Card3.data} title={blog15[0].Card3.title} image={blog15[0].Card3.image} />
          </div>
        </section>
        <span className="block rounded-full mt-[90px] h-14 border border-black border-solid shadowbtn">
          <button
            className=" dark:text-white h-full font-bold px-10 rounded-full border-2 border-solid border-transparent blog15_8 blog15_9 "
            tabIndex="0"
            role="button"
          >
            {blog15[0].btn_text.btn1}
          </button>
        </span>
      </div>
    </main>
  );
};

export default Blog15;
