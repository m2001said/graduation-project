import React from "react";
import { useSelector } from "react-redux";

const Navbar8 = () => {
  const { navbar } = useSelector((state) => state.template8);
  console.log(navbar);
  const scrollTo = (id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 overflow-hidden x-50 w-full z-50">
      <div className="container mx-auto">
        <div className="w-full rounded-full max-w-[460px] bg-black/20 h-[96px] backdrop-blur-2xl mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
          <a onClick={() => scrollTo("home", -200)} className="cursor-pointer w-[60px] flex items-center justify-center">
            {navbar.links[0]}
          </a>
          <a onClick={() => scrollTo("about")} className="cursor-pointer w-[60px] flex items-center justify-center">
            {navbar.links[1]}
          </a>
          <a onClick={() => scrollTo("services", 2)} className="cursor-pointer w-[60px] flex items-center justify-center">
            {navbar.links[2]}
          </a>
          <a onClick={() => scrollTo("work", 2)} className="cursor-pointer w-[60px] flex items-center justify-center">
            {navbar.links[3]}
          </a>
          <a onClick={() => scrollTo("contact", 2)} className="cursor-pointer w-[60px] flex items-center justify-center">
            {navbar.links[4]}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar8;
