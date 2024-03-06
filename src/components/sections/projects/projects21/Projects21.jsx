import React from "react";
import { useSelector } from "react-redux";


const Projects21 = () => {

  const { projects2 } = useSelector((state) => state.template14);

  return (
    <div className="my-12">
      <div className="container14">
        {/* head sec */}
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">{projects2.title}</h1>
          <p className="text-xs text-gray-400">{projects2.description}</p>
        </div>

        {/* body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* card seC */}
          {projects2.projects.map((data) => (
            <div key={data.title} className="bg-white dark:bg-gray-900">
              {/* img sec */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img src={data.image} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
              </div>
              {/* content sec */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects21;
