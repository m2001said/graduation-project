// // // import React from "react";
// // // import styles from "../../heros/hero7/styles7/style";
// // // import Services7 from "../../services/services7/Services7";
// // // import { useSelector } from "react-redux";
// // // const Hero7 = () => {
// // //   const { hero } = useSelector((state) => state.template7);
// // //   console.log(hero);
// // //   return (
// // //     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} TrialDesign7`}>
// // //       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
// // //         <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 ${styles.primary}`} style={{ backgroundColor: "var(--color4)" }}>
// // //           <img src={hero.imgUrl[0]} alt="discount" className="w-[32px] h-[32px]" />
// // //           <p className={`${styles.paragraph} ml-2`}>
// // //             <span className="text-white">{hero.Subtitle}</span>
// // //           </p>
// // //         </div>
// // //         <div className="flex flex-row justify-between items-center w-full">
// // //           <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ${styles.textGradient}`}>
// // //             {hero.title.} <br className="sm:block hidden" /> <span className="text-gradient7">{hero.title.} </span>
// // //           </h1>
// // //           <div className="ss:flex hidden md:mr-4 mr-0">
// // //             <Services7 />
// // //           </div>
// // //         </div>

// // //         <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full ${styles.textGradient}`}>
// // //           {hero.title.}
// // //         </h1>

// // //         <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
// // //           {hero.paragrafA}
// // //         </p>
// // //       </div>

// // //       <div className={`ss:hidden ${styles.flexCenter}`}>
// // //         <Services7 />
// // //       </div>

// // //       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
// // //         <img src={hero.imgUrl[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
// // //         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
// // //         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
// // //         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero7;
// // // import React from "react";
// // // import styles from "../../heros/hero7/styles7/style";
// // // import Services7 from "../../services/services7/Services7";
// // // import { useSelector } from "react-redux";

// // // const Hero7 = () => {
// // //   const { hero } = useSelector((state) => state.template7);

// // //   return (
// // //     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} TrialDesign7`}>
// // //       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
// // //         <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 ${styles.primary}`} style={{ backgroundColor: "var(--color4)" }}>
// // //           <img src={hero.imgUrl[0]} alt="discount" className="w-[32px] h-[32px]" />
// // //           <p className={`${styles.paragraph} ml-2 text-white`}>{hero.Subtitle}</p>
// // //         </div>
// // //         <h1 className={`font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]  ${styles.textGradient}`}>
// // //           {hero.title.map((subtitle, index) => (
// // //             <React.Fragment key={index}>
// // //               {subtitle.Subtitle}
// // //               <br className="sm:block hidden" />
// // //             </React.Fragment>
// // //           ))}
// // //         </h1>

// // //         <div className="ss:flex hidden md:mr-4 mr-0">
// // //           <Services7 />
// // //         </div>
// // //         <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
// // //           {hero.paragraf}
// // //         </p>
// // //       </div>
// // //       <div className={`ss:hidden ${styles.flexCenter}`}>
// // //         <Services7 />
// // //       </div>
// // //       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
// // //         <img src={hero.imgUrl[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
// // //         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
// // //         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
// // //         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero7;
// // import React from "react";
// // import styles from "../../heros/hero7/styles7/style";
// // import Services7 from "../../services/services7/Services7";
// // import { useSelector } from "react-redux";

// // const Hero7 = () => {
// //   const { hero } = useSelector((state) => state.template7);

// //   return (
// //     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} TrialDesign7`}>
// //       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
// //         <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 ${styles.primary}`} style={{ backgroundColor: "var(--color4)" }}>
// //           <img src={hero.imgUrl[0]} alt="discount" className="w-[32px] h-[32px]" />
// //           <p className={`${styles.paragraph} ml-2 text-white`}>{hero.Subtitle}</p>
// //         </div>
// //         <h1
// //           className={`font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[100.8px] leading-[75px] text-gradient7 ${styles.textGradient}`}
// //         >
// //           {hero.title.map((subtitle, index) => (
// //             <React.Fragment key={index}>
// //               {subtitle.Subtitle}
// //               <br className="sm:block hidden" />
// //             </React.Fragment>
// //           ))}
// //         </h1>

// //         <div className="ss:flex hidden md:mr-4 mr-0">
// //           <Services7 />
// //         </div>
// //         <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
// //           {hero.paragraf}
// //         </p>
// //       </div>
// //       <div className={`ss:hidden ${styles.flexCenter}`}>
// //         <Services7 />
// //       </div>
// //       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
// //         <img src={hero.imgUrl[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
// //         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
// //         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
// //         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero7;
// // import React from "react";
// // import styles from "../../heros/hero7/styles7/style";
// // import Services7 from "../../services/services7/Services7";
// // import { useSelector } from "react-redux";

// // const Hero7 = () => {
// //   const { hero } = useSelector((state) => state.template7);

// //   return (
// //     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} TrialDesign7`}>
// //       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
// //         <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 ${styles.primary}`} style={{ backgroundColor: "var(--color4)" }}>
// //           <img src={hero.imgUrl[0]} alt="discount" className="w-[32px] h-[32px]" />
// //           <p className={`${styles.paragraph} ml-2 text-white`}>{hero.Subtitle}</p>
// //         </div>
// //         <h1
// //           className={`font-poppins font-semibold ss:text-[72px] text-[18px] text-white ss:leading-[90.8px] leading-[75px] text-gradient7 ${styles.textGradient}`}
// //         >
// //           {hero.title.map((subtitle, index) => (
// //             <React.Fragment key={index}>
// //               {subtitle.Subtitle}
// //               <br className="sm:block hidden" />
// //             </React.Fragment>
// //           ))}
// //         </h1>

// //         <div className="ss:flex hidden md:mr-4 mr-0">
// //           <Services7 />
// //         </div>
// //         <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
// //           {hero.paragraf}
// //         </p>
// //       </div>
// //       <div className={`ss:hidden ${styles.flexCenter}`}>
// //         <Services7 />
// //       </div>
// //       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
// //         <img src={hero.imgUrl[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
// //         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
// //         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
// //         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero7;
// import React from "react";
// import styles from "../../heros/hero7/styles7/style";
// import Services7 from "../../services/services7/Services7";
// import { useSelector } from "react-redux";

// const Hero7 = () => {
//   const { hero } = useSelector((state) => state.template7);

//   return (
//     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} TrialDesign7`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//         <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 ${styles.primary}`} style={{ backgroundColor: "var(--color4)" }}>
//           <img src={hero.imgUrl[0]} alt="discount" className="w-[32px] h-[32px]" />
//           <p className={`${styles.paragraph} ml-2 text-white`}>{hero.Subtitle}</p>
//         </div>
//         <h1 className={`font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[90.8px] leading-[75px] ${styles.textGradient}`}>
//           The Next Generation Payment Method.
//         </h1>

//         <div className="ss:flex hidden md:mr-4 mr-0">
//           <Services7 />
//         </div>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
//           {hero.paragraf}
//         </p>
//       </div>
//       <div className={`ss:hidden ${styles.flexCenter}`}>
//         <Services7 />
//       </div>
//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img src={hero.imgUrl[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//       </div>
//     </section>
//   );
// };

// export default Hero7;
// import React from "react";
// import styles from "../../heros/hero7/styles7/style";
// import Services7 from "../../services/services7/Services7";
// import { useSelector } from "react-redux";

// const Hero7 = () => {
//   const { hero } = useSelector((state) => state.template7);

//   return (
//     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} TrialDesign7`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//         <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 ${styles.primary}`} style={{ backgroundColor: "var(--color4)" }}>
//           <img src={hero.imgUrl[0]} alt="discount" className="w-[32px] h-[32px]" />
//           <p className={`${styles.paragraph} ml-2 text-white`}>{hero.Subtitle}</p>
//         </div>
//         <h1
//           className={`font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[90.8px] leading-[75px] text-gradient7 ${styles.textGradient}`}
//         >
//         </h1>

//         <div className="ss:flex hidden md:mr-4 mr-0">
//           <Services7 />
//         </div>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
//           {hero.paragraf}
//         </p>
//       </div>
//       <div className={`ss:hidden ${styles.flexCenter} md:flex`}>
//         <Services7 />
//       </div>
//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img src={hero.imgUrl[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//       </div>
//     </section>
//   );
// };

// export default Hero7;
import React from "react";
import styles from "../../heros/hero7/styles7/style";
import Services7 from "../../services/services7/Services7";
import { useSelector } from "react-redux";

const Hero7 = () => {
  const { hero } = useSelector((state) => state.template7);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ئ`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px]  ${styles.primary}`} style={{ backgroundColor: "var(--color4)" }}>
          <img src={hero.imgUrl[0]} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-white`}>{hero.Subtitle}</p>
        </div>
        <h1
          className={`font-poppins font-semibold ss:text-[72px] text-[50px] text-white ss:leading-[90.8px] leading-[75px] pt-[50px] text-gradient7 ${styles.textGradient}`}
        >
          {hero.title}
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <Services7 />
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
          {hero.paragraf}
        </p>
      </div>
      <div className={`ss:hidden ${styles.flexCenter} md:flex`}>
        <Services7 />
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero.imgUrl[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero7;
