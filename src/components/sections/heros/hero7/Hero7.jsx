// import React from "react";
// import styles from "../../heros/hero7/styles7/style";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";

// const Hero7 = () => {
//   const { pathname } = useLocation();
//   const hero = useSelector((state) => {
//     if (pathname.includes("own-page")) {
//       return state.ownTemplate.hero;
//     } else {
//       return state.template7.hero;
//     }
//   });
//   return (
//     <div className={`bg-primary ${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ئ`}>
//           <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//             <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px]  ${styles.primary}`} style={{ backgroundColor: "var(--color4)" }}>
//               <img src={hero.images[0]} alt="discount" className="w-[32px] h-[32px]" />
//               <p className={`${styles.paragraph} ml-2 text-white`}>{hero.subtitle}</p>
//             </div>
//             <h1
//               className={`font-poppins font-semibold ss:text-[72px] text-[50px] text-white ss:leading-[90.8px] leading-[75px] pt-[50px] text-gradient7 ${styles.textGradient}`}
//             >
//               {hero.title}
//             </h1>

//             <div className="ss:flex hidden md:mr-4 mr-0">
//               <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-black-gradient p-[2px] cursor-pointer`}>
//                 <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}>
//                   <div className={`${styles.flexStart} flex-row`}>
//                     <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
//                       <span className="text-gradient7">{hero.buttonText}</span>
//                     </p>
//                     <img src={hero.images[2]} alt="arrow-up" className="w-[23px] h-[23px] object-contain " />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--website-7-color-3)" }}>
//               {hero.description}
//             </p>
//           </div>
//           <div className={`ss:hidden ${styles.flexCenter} md:flex`}>
//             <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-black-gradient p-[2px] cursor-pointer`}>
//               <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}>
//                 <div className={`${styles.flexStart} flex-row`}>
//                   <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
//                     <span className="text-gradient7">{hero.buttonText}</span>
//                   </p>
//                   <img src={hero.images[2]} alt="arrow-up" className="w-[23px] h-[23px] object-contain " />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//             <img src={hero.images[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
//             <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//             <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//             <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Hero7;
import React from "react";
import styles from "../../heros/hero7/styles7/style";
import { useSelector } from "react-redux";

const Hero7 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id={hero.sectionId} className={`flex md:flex-row flex-col ${styles.paddingY} ئ`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div
              className={`flex flex-row items-center py-[6px] px-4 rounded-[10px]  ${styles.primary}`}
              style={{ backgroundColor: "var(--website-7-color-6)" }}
            >
              <img src={hero.imgs[0]} alt="discount" className="w-[32px] h-[32px]" />
              <p className={`${styles.paragraph} ml-2 text-white`}>{hero.subtitle}</p>
            </div>
            <h1
              className={`font-poppins font-semibold ss:text-[72px] text-[50px] text-white ss:leading-[90.8px] leading-[75px] pt-[50px] text-gradient7 ${styles.textGradient}`}
            >
              {hero.title}
            </h1>

            <div className="ss:flex hidden md:mr-4 mr-0">
              <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-black-gradient p-[2px] cursor-pointer`}>
                <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}>
                  <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                      <span className="text-gradient7">{hero.buttonText}</span>
                    </p>
                    <img src={hero.imgs[2]} alt="arrow-up" className="w-[23px] h-[23px] object-contain " />
                  </div>
                </div>
              </div>
            </div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--website-7-color-3)" }}>
              {hero.description}
            </p>
          </div>
          <div className={`ss:hidden ${styles.flexCenter} md:flex`}>
            <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-black-gradient p-[2px] cursor-pointer`}>
              <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                  <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient7">{hero.buttonText}</span>
                  </p>
                  <img src={hero.imgs[2]} alt="arrow-up" className="w-[23px] h-[23px] object-contain " />
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={hero.imgs[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero7;
