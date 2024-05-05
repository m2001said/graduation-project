import React from "react";
import { useSelector } from "react-redux";

const Contact13 = () => {
  const contact = useSelector((state) => state.template13.contact);

  return (
    <div id="contact13" className="relative overflow-hidden bg-[var(--website-13-color-5)] lg:py-20 py-8 px-4 contact13">
      <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
        <div className="lg:w-1/2">
          <p className="text-[var(--website-13-color-4)]">{contact.title}</p>
          <h1 className="text-[var(--website-13-color-2)] primary-font lg:text-4xl text-xl font-semibold pt-4 pb-6">
            {contact.subtitle}
            <span className="underline decoration-[var(--website-13-color-4)]"> {contact.description}</span>{" "}
          </h1>
          <div className="relative flex items-center pt-8">
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-[var(--website-13-color-1)] rounded-full w-full md:px-6 px-2 h-16 outline-none"
            />
            <button className="absolute md:right-4 right-1 rounded-full md:px-8 flex items-center md:text-sm text-xs bg-[var(--website-13-color-4)] text-[var(--website-13-color-1)] gap-2 transition ease-out duration-300 transform hover:scale-110">
              <p className="text-[var(--website-13-color-1)]">{contact.button[0].title}</p>
              {contact.button[0].icon && (
                <img src={contact.button[0].icon} alt="right arrow" className="text-xl h-12" />
              )}
            </button>
          </div>
        </div>
        <div className="lg:py-0 py-8 flex justify-center">
          {contact.imgUrl && (
            <img src={contact.imgUrl} alt="subscribe image" className="lg:w-100 w-80 " />
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact13;
