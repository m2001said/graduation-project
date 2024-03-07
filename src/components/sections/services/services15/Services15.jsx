// // import React from "react";
// // import { useSelector } from "react-redux";

// // const Services15 = () => {
// //   const { services } = useSelector((state) => state.template15);
// //   const Card = ({ title, sub_title, text }) => {
// //     return (
// //       <div className="w-full hoverBtn">
// //         <div className="title15_4 rounded-[18px] py-[20px] px-10 relative overflow-hidden">
// //           <p className="text-[13px] title15_5 font-bold pb-12">{title}</p>
// //           <h1 className="text-2xl font-bold title15_5">{sub_title}</h1>
// //           <p className=" opacity-80 min-h-[125px] leading-[1.7rem] title15_6">{text}</p>
// //           <a href="#pricing" className="font-bold flex items-center gap-x-2 no-underline  ml-20 title15_7 hover:text-[var(--color3)]">
// //             {services.btn.btn15_Text}
// //             <img src={services.imgUrl} alt="" style={{ width: "30px", height: "30px" }} />
// //           </a>
// //           <div className="absolute -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="pt-52 backgroundcolor15 darkModeColor15 px-3" id="services">
// //       <div className="container max-w-[1300px] w-full mx-auto">
// //         <h1 className="sm:text-[44px] text-[26px] text-center m-0 title15_1">{services.title.t1}</h1>
// //         <p className="font-bold text-sm textColor flex items-center text-center justify-center gap-x-4 title15_2">
// //           {services.title.t2}
// //           <span className="caveat text-3xl title15_3">{services.title.t3}</span>
// //         </p>

// //         <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-8 w-full ">
// //           <Card title={services.Card1.title} sub_title={services.Card1.sub_title} text={services.Card1.text} />
// //           <Card title={services.Card2.title} sub_title={services.Card2.sub_title} text={services.Card2.text} />
// //           <Card title={services.Card3.title} sub_title={services.Card3.sub_title} text={services.Card3.text} />
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Services15;
// const Services15 = () => {
//   const { services } = useSelector((state) => state.template15);

//   const Card = ({ title, sub_title, text }) => (
//     <div className="w-full hoverBtn">
//       <div className="title15_4 rounded-[18px] py-[20px] px-10 relative overflow-hidden">
//         <p className="text-[13px] title15_5 font-bold pb-12">{title}</p>
//         <h1 className="text-2xl font-bold title15_5">{sub_title}</h1>
//         <p className="opacity-80 min-h-[125px] leading-[1.7rem] title15_6">{text}</p>
//         <a href="#pricing" className="font-bold flex items-center gap-x-2 no-underline ml-20 title15_7 hover:text-[var(--color3)]">
//           {services.actionButton}
//           <img src={services.imgUrl} alt="" style={{ width: "30px", height: "30px" }} />
//         </a>
//         <div className="absolute -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="pt-52 backgroundcolor15 darkModeColor15 px-3" id="services">
//       <div className="container max-w-[1300px] w-full mx-auto">
//         <h1 className="sm:text-[44px] text-[26px] text-center m-0 title15_1">{services.title.title}</h1>
//         <p className="font-bold text-sm textColor flex items-center text-center justify-center gap-x-4 title15_2">
//           {services.title.subtitle}
//           <span className="caveat text-3xl title15_3">{services.title.title}</span>
//         </p>

//         <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-8 w-full ">
//           {services.Cards.map((card, index) => (
//             <Card key={index} title={card.title} sub_title={card.sub_title} text={card.text} />
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Services15;
import React from "react";
import { useSelector } from "react-redux";

const Services15 = () => {
  const { services } = useSelector((state) => state.template15);

  const Card = ({ title, sub_title, text }) => (
    <div className="w-full hoverBtn">
      <div className="title15_4 rounded-[18px] py-[20px] px-10 relative overflow-hidden">
        <p className="text-[13px] title15_5 font-bold pb-12">{title}</p>
        <h1 className="text-2xl font-bold title15_5">{sub_title}</h1>
        <p className="opacity-80 min-h-[125px] leading-[1.7rem] title15_6">{text}</p>
        <a href="#pricing" className="font-bold flex items-center gap-x-2 no-underline ml-20 title15_7 hover:text-[var(--color3)]">
          {services.actionButton}
          <img src={services.imgUrl} alt="" style={{ width: "30px", height: "30px" }} />
        </a>
        <div className="absolute -right-6 -bottom-6 bg-contain bg-center w-[131px] h-[131px]"></div>
      </div>
    </div>
  );

  return (
    <div className="pt-52 backgroundcolor15 darkModeColor15 px-3 serve15" id="services">
      <div className="container max-w-[1300px] w-full mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 title15_1">{services.titles.title}</h1>
        <p className="font-bold text-sm textColor flex items-center text-center justify-center gap-x-4 title15_2">{services.titles.subtitle}</p>

        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-8 w-full ">
          {services.Cards.map((card, index) => (
            <Card key={index} title={card.title} sub_title={card.sub_title} text={card.text} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services15;
