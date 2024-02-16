import React from "react";
import { useSelector } from "react-redux";

const Project15 = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const { project15 } = useSelector((state) => state.template15);

  const Card = ({ image, title, sub_title, text }) => {
    return (
      <div className="hoverBtn">
        <div className="proj15_5 rounded-[20px] py-[30px] px-[35px] relative overflow-hidden">
          <img src={image} alt="" className="rounded-[18px] h-60 w-full object-cover proj15_5" />
          <p className="text-[13px] font-bold pt-[30px] m-0 pb-[5px] proj15_7">{title}</p>
          <h1 className="text-2xl font-bold m-0 proj15_8">{sub_title}</h1>
          <p className=" opacity-80 my-[30px] leading-[1.7rem] proj15_9">{text}</p>
          <a href="#project" className="font-bold flex items-center gap-x-2 no-underline text-black">
            {project15[0].title.title4} <img src={project15[0].imgUrl.input} style={{ width: "30px", height: "30px" }} />
          </a>
          <div className="absolute -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-5 pt-52 px-3 " id="works">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 proj15_1">{project15[0].title.title1}</h1>
        <p className="font-bold text-sm proj15_2 flex items-center text-center gap-x-4">
          {project15[0].title.title2} <span className="caveat text-3xl proj15_3 m-0">{project15[0].title.title3}</span>
        </p>
        <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 text-lg md:text-xl lg:text-1xl mb-2 mt-10 cursor-pointer proj15_4 font-bold py-2 px-4 rounded">
          <li onClick={() => setSelectedCategory("all")}>{project15[0].links.link1}</li>
          <li onClick={() => setSelectedCategory("video")}>{project15[0].links.link2}</li>
          <li onClick={() => setSelectedCategory("photography")}>{project15[0].links.link3}</li>
          <li onClick={() => setSelectedCategory("branding")}>{project15[0].links.link4}</li>
        </ul>

        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {selectedCategory === "all" && (
            <>
              <Card title={project15[0].Card1.title} sub_title={project15[0].Card1.sub_title} image={project15[0].Card1.image} text={project15[0].Card1.text} />
              <Card title={project15[0].Card2.title} sub_title={project15[0].Card2.sub_title} image={project15[0].Card2.image} text={project15[0].Card2.text} />
              <Card title={project15[0].Card3.title} sub_title={project15[0].Card3.sub_title} image={project15[0].Card3.image} text={project15[0].Card3.text} />
              <Card title={project15[0].Card4.title} sub_title={project15[0].Card4.sub_title} image={project15[0].Card4.image} text={project15[0].Card4.text} />
              <Card title={project15[0].Card5.title} sub_title={project15[0].Card5.sub_title} image={project15[0].Card5.image} text={project15[0].Card5.text} />
              <Card title={project15[0].Card6.title} sub_title={project15[0].Card6.sub_title} image={project15[0].Card6.image} text={project15[0].Card6.text} />
            </>
          )}
          {selectedCategory === "video" && (
            <>
              <Card title={project15[0].Card1.title} sub_title={project15[0].Card1.sub_title} image={project15[0].Card1.image} text={project15[0].Card1.text} />
              <Card title={project15[0].Card2.title} sub_title={project15[0].Card2.sub_title} image={project15[0].Card2.image} text={project15[0].Card2.text} />
            </>
          )}
          {selectedCategory === "photography" && (
            <>
              <Card title={project15[0].Card3.title} sub_title={project15[0].Card3.sub_title} image={project15[0].Card3.image} text={project15[0].Card3.text} />
              <Card title={project15[0].Card4.title} sub_title={project15[0].Card4.sub_title} image={project15[0].Card4.image} text={project15[0].Card4.text} />
            </>
          )}
          {selectedCategory === "branding" && (
            <>
              <Card title={project15[0].Card5.title} sub_title={project15[0].Card5.sub_title} image={project15[0].Card5.image} text={project15[0].Card5.text} />
              <Card title={project15[0].Card6.title} sub_title={project15[0].Card6.sub_title} image={project15[0].Card6.image} text={project15[0].Card6.text} />
            </>
          )}
        </section>
        <span className="block rounded-full mt-[70px] h-14 border-black border-solid shadowbtn">
          <button className="bg-transparent  h-full font-bold px-10 rounded-full hover:border-2 border-solid hover:bg-[#29a587] hover:text-white hover:border-white proj15_10">
            {project15[0].btn15.btn_text}
          </button>
        </span>
      </div>
    </main>
  );
};

export default Project15;
