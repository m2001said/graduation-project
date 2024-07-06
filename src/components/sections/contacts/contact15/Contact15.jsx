
import React from "react";
import { useSelector } from "react-redux";

const Contact15 = ({ template }) => {
  const ownContact= useSelector((state) => state.ownTemplate.contact);
  const contact = template ? template.contact : ownContact;

  const ContactInfo = ({ type, address, imgUrl }) => {
    return (
      <div className="flex lg:gap-x-10 pb-10">
        <span className="flex items-center w-fit">
          <button className="bg-transparent h-14 w-14 font-bold rounded-full border-solid shadowbtn">
            <img src={imgUrl} alt={type} className="text-2xl flex justify-center text-[#262626] dark:text-white" />
          </button>
          <hr className="w-10 h-[2px] bg-black mx-6" />
        </span>
        <span>
          <p className="caveat cont15_7 text-[30px] font-bold m-0 py-[10px]">{type}</p>
          <p className="cont15_8 m-0">{address}</p>
        </span>
      </div>
    );
  };

  return (
    <main className="pb-5 lg:py-52 py-16 px-3 cont15" id="contact">
      <div className="lg:flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 cont15_1">{contact.title}</h1>
        <p className="font-bold text-sm cont15_2 flex items-center justify-center text-center gap-x-4">
          {contact.subtitle} <span className="caveat text-3xl cont15_3">{contact.content}</span>
        </p>
        <div className="lg:flex xl:w-4/5 w-full xl:justify-normal justify-between mx-auto lg:pt-24">
          <section className="lg:pt-[60px] pt-8 xl:w-2/5">
            <div className="lg:block flex flex-wrap gap-x-4">
              {contact.contacts.map((item, index) => (
                <ContactInfo key={index} type={item.type} address={item.address} imgUrl={item.imgUrl} />
              ))}
            </div>
          </section>
          <section className="xl:w-1/2">
            <form className="w-full">
              <div className="sm:flex gap-x-8 w-full mb-8">
                <label className="flex flex-col w-full gap-4">
                  <p className="pl-12 font-bold text-sm cont15_4">{contact.name}</p>
                  <input type="text" className="rounded-full h-[60px] px-8 border border-white border-solid outline-none" />
                </label>

                <label className="flex flex-col w-full gap-4">
                  <p className="pl-12 font-bold text-sm cont15_4">{contact.address}</p>
                  <input type="email" className="rounded-full h-[60px] px-8 border border-white border-solid outline-none" />
                </label>
              </div>
              <label className="flex flex-col w-full gap-4">
                <p className="pl-12 font-bold text-sm cont15_4">{contact.subject}</p>
                <input type="text" className="rounded-full h-[60px] px-8 border border-white border-solid outline-none" />
              </label>
              <label className="flex flex-col w-full gap-4">
                <p className="pl-12 font-bold text-sm cont15_4">{contact.message}</p>
                <textarea className="rounded-[30px] p-8 h-[140px] resize-none border-white border-solid outline-none" />
              </label>
              <div className="flex sm:flex-row flex-col sm:items-center items-end justify-end gap-8">
                <span className="block rounded-full h-14 border border-black border-solid shadowbtn">
                  <button className="h-full font-bold px-10 rounded-full border-2 border-solid border-transparent cont15_5 cont15_6 hover:text-white">
                    {contact.buttonText}
                  </button>
                </span>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact15;
