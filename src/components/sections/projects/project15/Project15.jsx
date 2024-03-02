import React from "react";
import { useSelector } from "react-redux";

const Project15 = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const { projects } = useSelector((state) => state.template15);
  const Card = ({ imgUrl, title, sub_title, text }) => {
    return (
      <div className="hoverBtn">
        <div className="proj15_5 rounded-[20px] py-[30px] px-[35px] relative overflow-hidden">
          <img src={imgUrl} alt="" className="rounded-[18px] h-60 w-full object-cover proj15_5" />
          <p className="text-[13px] font-bold pt-[30px] m-0 pb-[5px] proj15_7">{title}</p>
          <h1 className="text-2xl font-bold m-0 proj15_8">{sub_title}</h1>
          <p className=" opacity-80 my-[30px] leading-[1.7rem] proj15_9">{text}</p>
          <a href="#project" className="font-bold flex items-center gap-x-2 no-underline text-[var(--color2)] hover:text-[var(--color3)] ">
            {projects.title.title4} <img src={projects.imgUrl} style={{ width: "30px", height: "30px" }} />
          </a>
          <div className="absolute -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-5 pt-52 px-3 " id="works">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 proj15_1">{projects.title.title1}</h1>
        <p className="font-bold text-sm proj15_2 flex items-center text-center gap-x-4">
          {projects.title.title2} <span className="caveat text-3xl proj15_3 m-0">{projects.title.title3}</span>
        </p>
        <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 text-lg md:text-xl lg:text-1xl mb-2 mt-10 cursor-pointer proj15_4 font-bold py-2 px-4 rounded">
          <li onClick={() => setSelectedCategory("all")}>{projects.links.link1}</li>
          <li onClick={() => setSelectedCategory("video")}>{projects.links.link2}</li>
          <li onClick={() => setSelectedCategory("photography")}>{projects.links.link3}</li>
          <li onClick={() => setSelectedCategory("branding")}>{projects.links.link4}</li>
        </ul>

        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {selectedCategory === "all" && (
            <>
              <Card title={projects.Card1.title} sub_title={projects.Card1.sub_title} imgUrl={projects.Card1.imgUrl} text={projects.Card1.text} />
              <Card title={projects.Card2.title} sub_title={projects.Card2.sub_title} imgUrl={projects.Card2.imgUrl} text={projects.Card2.text} />
              <Card title={projects.Card3.title} sub_title={projects.Card3.sub_title} imgUrl={projects.Card3.imgUrl} text={projects.Card3.text} />
              <Card title={projects.Card4.title} sub_title={projects.Card4.sub_title} imgUrl={projects.Card4.imgUrl} text={projects.Card4.text} />
              <Card title={projects.Card5.title} sub_title={projects.Card5.sub_title} imgUrl={projects.Card5.imgUrl} text={projects.Card5.text} />
              <Card title={projects.Card6.title} sub_title={projects.Card6.sub_title} imgUrl={projects.Card6.imgUrl} text={projects.Card6.text} />
            </>
          )}
          {selectedCategory === "video" && (
            <>
              <Card title={projects.Card1.title} sub_title={projects.Card1.sub_title} imgUrl={projects.Card1.imgUrl} text={projects.Card1.text} />
              <Card title={projects.Card2.title} sub_title={projects.Card2.sub_title} imgUrl={projects.Card2.imgUrl} text={projects.Card2.text} />
            </>
          )}
          {selectedCategory === "photography" && (
            <>
              <Card title={projects.Card3.title} sub_title={projects.Card3.sub_title} imgUrl={projects.Card3.imgUrl} text={projects.Card3.text} />
              <Card title={projects.Card4.title} sub_title={projects.Card4.sub_title} imgUrl={projects.Card4.imgUrl} text={projects.Card4.text} />
            </>
          )}
          {selectedCategory === "branding" && (
            <>
              <Card title={projects.Card5.title} sub_title={projects.Card5.sub_title} imgUrl={projects.Card5.imgUrl} text={projects.Card5.text} />
              <Card title={projects.Card6.title} sub_title={projects.Card6.sub_title} imgUrl={projects.Card6.imgUrl} text={projects.Card6.text} />
            </>
          )}
        </section>
        <span className="block rounded-full mt-[70px] h-14 border-black border-solid shadowbtn">
          <button className="bg-transparent  h-full font-bold px-10 rounded-full hover:border-2 border-solid bg-[var(--color3)] text-[var(--color5)] hover:border-white proj15_10">
            {projects.btn15.btn_text}
          </button>
        </span>
      </div>
    </main>
  );
};

export default Project15;
