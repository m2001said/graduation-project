import React from "react";
import { useSelector } from "react-redux";



const ResponsiveMenu = ({ showMenu }) => {


  const { navbar } = useSelector((state) => state.template18);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {navbar.links.map((data) => (
              <li>
                <a href={data.link} className="mb-5 inline-block hover:text-[--primary18-color]">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
