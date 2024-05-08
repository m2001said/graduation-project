import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Contact8 = () => {
  const { pathname } = useLocation();
  const Contact = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.contact;
    } else {
      return state.template8.contact;
    }
  });

  useEffect(() => {
    // AOS initialization and refresh removed
    return () => {};
  }, []);

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1 flex justify-center items-center">
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">{Contact.sub_title}</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">{Contact.title}</h2>
            </div>
          </div>
          {/* form */}
          <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your name.."
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email.."
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">{Contact.buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact8;
