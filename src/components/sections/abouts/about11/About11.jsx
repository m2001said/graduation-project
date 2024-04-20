// // // import React from "react";
// // // import "../about11/about11.css";
// // // import { useSelector } from "react-redux";

// // // const About11 = () => {
// // //   const { abouts } = useSelector((state) => state.template11);

// // //   return (
// // //     <>
// // //       <section className="about container section11" id="about">
// // //         <h2 className="section__title11">{abouts.title}</h2>
// // //         <div className="about11__container grid11">
// // //           <img src={abouts.imgUrl} alt="" className="aboutImg11" />
// // //           <div className="about__data11 grid11">
// // //             <div className="about__info11">
// // //               <p className="about__description11">{abouts.content}</p>
// // //               <a href="" className="btn11" id="btn11_1">
// // //                 {abouts.actionButton}
// // //               </a>
// // //             </div>
// // //             <div className="about__skills11 grid11">
// // //               {abouts.statistics.map((statistic, index) => (
// // //                 <div key={index} className="skills__data11">
// // //                   <div className="skills__titles11">
// // //                     <h3 className="skills__name11">{statistic.title}</h3>
// // //                     <span className="skills__number11">{statistic.value}</span>
// // //                   </div>
// // //                   <div className="skills__bar11">
// // //                     <span className={`skills__percentage11 ${statistic.title.toLowerCase().replace(/\s/g, "-")}`}></span>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default About11;
// // import React from "react";
// // import "../about11/about11.css";
// // import { useSelector } from "react-redux";

// // const About11 = () => {
// //   const { abouts } = useSelector((state) => state.template11);

// //   // Check if abouts and statistics are defined
// //   if (!abouts || !abouts.statistics) {
// //     return null; // Or you can return a loading indicator or some fallback UI
// //   }

// //   return (
// //     <>
// //       <section className="about container section11" id="about">
// //         <h2 className="section__title11">{abouts.title}</h2>
// //         <div className="about11__container grid11">
// //           <img src={abouts.imgUrl} alt="" className="aboutImg11" />
// //           <div className="about__data11 grid11">
// //             <div className="about__info11">
// //               <p className="about__description11">{abouts.content}</p>
// //               <a href="" className="btn11" id="btn11_1">
// //                 {abouts.actionButton}
// //               </a>
// //             </div>
// //             <div className="about__skills11 grid11">
// //               {abouts.statistics.map((statistic, index) => (
// //                 <div key={index} className="skills__data11">
// //                   <div className="skills__titles11">
// //                     <h3 className="skills__name11">{statistic.title}</h3>
// //                     <span className="skills__number11">{statistic.value}</span>
// //                   </div>
// //                   <div className="skills__bar11">
// //                     <span className={`skills__percentage11 ${statistic.title.toLowerCase().replace(/\s/g, "-")}`}></span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default About11;
// // import React from "react";
// // import "../about11/about11.css";
// // import { useSelector } from "react-redux";

// // const About11 = () => {
// //   const { abouts } = useSelector((state) => state.template11);

// //   return (
// //     <>
// //       <section className="about container section11" id="about">
// //         <h2 className="section__title11">{abouts.title}</h2>
// //         <div className="about11__container grid11">
// //           <img src={abouts.imgUrl} alt="" className="aboutImg11" />
// //           <div className="about__data11 grid11">
// //             <div className="about__info11">
// //               <p className="about__description11">{abouts.content}</p>
// //               <a href="" className="btn11" id="btn11_1">
// //                 {abouts.actionButton}
// //               </a>
// //             </div>
// //             <div className="about__skills11 grid11">
// //               {abouts.statistics.map((statistic, index) => (
// //                 <div key={index} className="skills__data11">
// //                   <div className="skills__titles11">
// //                     <h3 className="skills__name11">{statistic.title}</h3>
// //                     <span className="skills__number11">{statistic.value}</span>
// //                   </div>
// //                   <div className="skills__bar11">
// //                     <span className={`skills__percentage11 ${statistic.title.toLowerCase().replace(/\s/g, "-")}`}></span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default About11;
// // ///////////////////////
// import React from "react";
// import "./about11.css";
// import { useSelector } from "react-redux";

// const About11 = () => {
//   const { Abouts } = useSelector((state) => state.template11);

//   return (
//     <section className="about container section11" id="about">
//       <h2 className="section__title11">{Abouts.title}</h2>
//       <div className="about11__container grid11">
//         <img src={Abouts.imgUrl} alt="" className="aboutImg11" />
//         <div className="about__data11 grid11">
//           <div className="about__info11">
//             <p className="about__description11">{Abouts.content}</p>
//             <a href="" className="btn11" id="btn11_1">
//               {Abouts.actionButton}
//             </a>
//           </div>
//           <div className="about__skills11 grid11">
//             {Abouts.statistics.map((statistic, index) => (
//               <div key={index} className="skills__data11">
//                 <div className="skills__titles11">
//                   <h3 className="skills__name11">{statistic.title}</h3>
//                   <span className="skills__number11">{statistic.value}</span>
//                 </div>
//                 <div className="skills__bar11">
//                   <span className={`skills__percentage11 ${statistic.title.toLowerCase().replace(/\s/g, "-")}`}></span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About11;
import React from "react";
import "../about11/about11.css";
import { useSelector } from "react-redux";

const About11 = () => {
  const { abouts } = useSelector((state) => state.template11);

  // Check if abouts is defined
  if (!abouts) {
    return null; // Or you can return a loading indicator or some fallback UI
  }

  return (
    <>
      <section className="about container section11" id="about">
        <h2 className="section__title11">{abouts.title}</h2>
        <div className="about11__container grid11">
          <img src={abouts.imgUrl} alt="" className="aboutImg11" />
          <div className="about__data11 grid11">
            <div className="about__info11">
              <p className="about__description11">{abouts.content}</p>
              <a href="" className="btn11" id="btn11_1">
                {abouts.actionButton}
              </a>
            </div>
            <div className="about__skills11 grid11">
              {/* Check if statistics is defined */}
              {abouts.statistics &&
                abouts.statistics.map((statistic, index) => (
                  <div key={index} className="skills__data11">
                    <div className="skills__titles11">
                      {/* Check if statistic and title are defined */}
                      {statistic && statistic.title && (
                        <>
                          <h3 className="skills__name11">{statistic.title}</h3>
                          <span className="skills__number11">{statistic.value}</span>
                        </>
                      )}
                    </div>
                    <div className="skills__bar11">
                      {/* Render statistic bar if statistic and title are defined */}
                      {statistic && statistic.title && <span className={`skills__percentage11 ${statistic.title.toLowerCase().replace(/\s/g, "-")}`}></span>}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About11;
