import React from "react";
import { useSelector } from "react-redux";

const Contact15 = () => {
  const { contact15 } = useSelector((state) => state.template15);
  const Contact15_info = ({ icon, title, sub_title }) => {
    return (
      <div className="flex lg:gap-x-10 pb-10">
        <span className="flex items-center w-fit">
          <button className="bg-transparent h-14 w-14 font-bold rounded-full border-solid shadowbtn">
            <img src={icon} alt="icon" className="text-2xl flex justify-center text-[#262626] dark:text-white" />
          </button>
          <hr className="w-10 h-[2px] bg-black mx-6" />
        </span>
        <span>
          <p className="caveat cont15_7 text-[30px] font-bold m-0 py-[10px]">{title}</p>
          <p className="cont15_8 m-0 ">{sub_title}</p>
        </span>
      </div>
    );
  };

  return (
    <main className="pb-5 lg:py-52 py-16 px-3 " id="contact">
      <div className="lg:flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 cont15_1">{contact15[0].title.title1}</h1>
        <p className="font-bold text-sm cont15_2 flex items-center justify-center text-center gap-x-4">
          L{contact15[0].title.title2} <span className="caveat text-3xl cont15_3">{contact15[0].title.title3}</span>
        </p>
        <div className="lg:flex xl:w-4/5 w-full xl:justify-normal justify-between mx-auto lg:pt-24">
          <section className="lg:pt-[60px] pt-8 xl:w-2/5">
            <div className="lg:block flex flex-wrap gap-x-4">
              <Contact15_info
                title={contact15[0].Contact15_info1.title}
                sub_title={contact15[0].Contact15_info1.sub_title}
                icon={contact15[0].Contact15_info1.icon}
              />
              <Contact15_info
                title={contact15[0].Contact15_info2.title}
                sub_title={contact15[0].Contact15_info2.sub_title}
                icon={contact15[0].Contact15_info2.icon}
              />
              <Contact15_info
                title={contact15[0].Contact15_info3.title}
                sub_title={contact15[0].Contact15_info3.sub_title}
                icon={contact15[0].Contact15_info3.icon}
              />
              <Contact15_info
                title={contact15[0].Contact15_info4.title}
                sub_title={contact15[0].Contact15_info4.sub_title}
                icon={contact15[0].Contact15_info4.icon}
              />
            </div>
          </section>
          <section className="xl:w-1/2">
            <form className="w-full">
              <div className="sm:flex gap-x-8 w-full mb-8">
                <label className="flex flex-col w-full gap-4">
                  <p className="pl-12  font-bold text-sm cont15_4">{contact15[0].labels.label1}</p>
                  <input type="text" className="rounded-full h-[60px] px-8 border border-black border-solid outline-none" />
                </label>

                <label className="flex flex-col w-full gap-4">
                  <p className="pl-12  font-bold text-sm cont15_4">{contact15[0].labels.label2}</p>
                  <input type="email" className="rounded-full h-[60px] px-8 border border-black border-solid outline-none" />
                </label>
              </div>
              <label className="flex flex-col w-full gap-4">
                <p className="pl-12 font-bold text-sm cont15_4">{contact15[0].labels.label3}</p>
                <input type="text" className="rounded-full h-[60px] px-8 border border-black border-solid outline-none" />
              </label>
              <label className="flex flex-col w-full gap-4">
                <p className="pl-12  font-bold text-sm cont15_4">{contact15[0].labels.label4}</p>
                <textarea className="rounded-[30px] p-8 h-[140px] resize-none border-black border-solid outline-none" />
              </label>
              <div className="flex sm:flex-row flex-col sm:items-center items-end justify-end gap-8">
                <span className="block rounded-full h-14 border border-black border-solid shadowbtn ">
                  <button className="  h-full font-bold px-10 rounded-full border-2 border-solid border-transparent cont15_5 cont15_6 hover:text-white">
                    {contact15[0].btn_text.btn1}
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
