import React from "react";
import { useSelector } from "react-redux";

const Project15 = ({ template }) => {
  const ownProjects = useSelector((state) => state.ownTemplate.projects);
  const projects = template ? template.projects : ownProjects;
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const Card = ({ imgUrl, title, subtitle, description }) => {
    return (
      <div className="hoverBtn ">
        <div className="proj15_5 rounded-[20px] py-[30px] px-[35px] relative overflow-hidden ">
          <img src={imgUrl} alt="" className="rounded-[18px] h-60 w-full object-cover proj15_5" />
          <p className="text-[13px] font-bold pt-[30px] m-0 pb-[5px] proj15_7">{title}</p>
          <h1 className="text-2xl font-bold m-0 proj15_8">{subtitle}</h1>
          <p className=" opacity-80 my-[30px] leading-[1.7rem] proj15_9">{description}</p>
          <a
            href="#project"
            className="font-bold flex items-center gap-x-2 no-underline text-[var(--website-15-color-2)] hover:text-[var(--website-15-color-5)] "
          >
            {projects.buttonText} <img alt="" src={projects.imgUrl} style={{ width: "30px", height: "30px" }} />
          </a>
          <div className="absolute -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-5 pt-16 px-3 proj15 " id={projects.sectionId}>
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 proj15_1">{projects.title}</h1>
        <p className="font-bold text-sm proj15_2 flex items-center text-center gap-x-4">{projects.subtitle}</p>
        <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 text-lg md:text-xl lg:text-1xl mb-2 mt-10 cursor-pointer proj15_4 font-bold py-2 px-4 rounded">
          {projects.categories.map((category, index) => (
            <li key={index} onClick={() => setSelectedCategory(category.toLowerCase())}>
              {category}
            </li>
          ))}
        </ul>

        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {projects.projects.map((card, index) => {
            if (selectedCategory === "all" || selectedCategory === card.title.toLowerCase()) {
              return <Card key={index} title={card.title} subtitle={card.subtitle} imgUrl={card.imgUrl} description={card.description} />;
            }
            return null;
          })}
        </section>
        <span className="block rounded-full mt-[70px] h-14 border-black border-solid shadowbtn">
          <button className="bg-transparent h-full font-bold px-10 rounded-full border-2 border-solid bg-[var(--website-15-color-3)] text-[var(--website-15-color-5)] ">
            {projects.linkText}
          </button>
        </span>
      </div>
    </main>
  );
};

export default Project15;
