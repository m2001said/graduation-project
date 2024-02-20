import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Contact8 = () => {
  const { Contact } = useSelector((state) => state.template8);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });

    // Optional: Refresh AOS when the component updates
    AOS.refresh();

    // Clean up AOS when the component unmounts
    return () => AOS.refreshHard();
  }, []);

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1 flex justify-center items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300">
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">{Contact.subtitle}</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">{Contact.title}</h2>
            </div>
          </div>
          {/* form */}
          <form
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-offset="300"
          >
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
            <button className="btn btn-lg">{Contact.btnText}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact8;
