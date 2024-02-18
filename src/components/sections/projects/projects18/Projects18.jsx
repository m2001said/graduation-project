import React from "react";
import { useSelector } from "react-redux";




const Projects = () => {

  const { projects18 } = useSelector((state) => state.template18);
  return (
    <div className="pb-24">
      <div className="container18">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">{projects18.title}</h1>
        <p className="text-sm pb-10">{projects18.description}</p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {projects18.cards.map((data) => (
              <div className="space-y-3 border-2 border-gray-300 hover:border-[--primary18-color] p-3 rounded-xl relative group">
                <div className="w-full h-[120px]">
                  <img src={data.image} alt="" className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-[--primary18-color] font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>{data.price}</p>
                    <a href="/#">{data.Details}</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">{data.space}</p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button className="button-outline">{projects18.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
