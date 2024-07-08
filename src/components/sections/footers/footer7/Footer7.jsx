// import styles from "../../heros/hero7/styles7/style";

// const Footer7 = ({ template }) => {
//   const footer = template.footer;

//   const socialMediaIcons = footer.medias;

//   return (
//     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`} style={{ color: "var(--website-7-color-5)" }}>
//           <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//             <div className="flex-[1] flex flex-col justify-start mr-10">
//               <img src={footer.imgUrl} alt="hoobank" className="w-[266px] h-[72.14px] object-contain" />
//               <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>{footer.subtitle}</p>
//             </div>
//             <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
//               {footer.footer.map((section, index) => (
//                 <div key={index} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
//                   <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-[var(--website-7-color-5)]">{section.title}</h4>
//                   <ul className="list-none mt-4">
//                     {section.links.map((link, index) => (
//                       <li
//                         key={link.title}
//                         className={`font-poppins font-normal text-[16px] leading-[24px] cursor-pointer ${index !== section.links.length - 1 ? "mb-4" : "mb-0"}`}
//                       >
//                         <a className="footerhover7" href={link.url} target="_blank" rel="noopener noreferrer">
//                           {link.title}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
//             <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-[var(--website-7-color-6)]">{footer.title}</p>
//             <div className="flex flex-row md:mt-0 mt-6">
//               {socialMediaIcons.map((social, index) => (
//                 <img
//                   key={index}
//                   src={social.icon}
//                   alt={social.id}
//                   className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMediaIcons.length - 1 ? "mr-6" : "mr-0"}`}
//                   onClick={() => window.open(social.url)}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Footer7;
import React from "react";
import styles from "../../heros/hero7/styles7/style";
import { useSelector } from "react-redux";

const Footer7 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.footer);
  const footer = template ? template.footer : ownFooter;

  const socialMediaIcons = footer.medias;

  return (
    <div id={footer.sectionId} className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`} style={{ color: "var(--website-7-color-6)" }}>
          <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-[1] flex flex-col justify-start mr-10">
              <img src={footer.imgUrl} alt="hoobank" className="w-[266px] h-[72.14px] object-contain" />
              <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>{footer.subtitle}</p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              {footer.footerSections.map((section, index) => (
                <div key={index} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                  <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-[var(--website-7-color-5)]">{section.title}</h4>
                  <ul className="list-none mt-4">
                    {section.links.map((link, index) => (
                      <li
                        key={index}
                        className={`font-poppins font-normal text-[16px] leading-[24px] cursor-pointer ${index !== section.links.length - 1 ? "mb-4" : "mb-0"}`}
                      >
                        <a className="footerhover7" href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-[var(--website-7-color-6)]">{footer.title}</p>
            <div className="flex flex-row gap-4 md:mt-0 mt-6">
              {socialMediaIcons.map((social, index) => (
                <img
                  key={index}
                  src={social.icon}
                  alt={`Social Icon ${index}`}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer `}
                  onClick={() => window.open(social.url)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer7;
