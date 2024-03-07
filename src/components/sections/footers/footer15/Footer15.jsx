// import React from "react";
// import { useSelector } from "react-redux";
// import "./footer15.css";

// const Footer15 = () => {
//   const { footer } = useSelector((state) => state.template15);

//   return (
//     <footer className="footer15">
//       <div className="container mx-auto py-[60px] footer15-container">
//         <p className="footer15-text">
//           <span className="footer15-icons">
//             <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
//               <img src={footer.imgimgUrl[0]} alt="Twitter" className="footer15-img" />
//             </a>
//             <a href="https://dribbble.com/session/new" target="_blank" rel="noopener noreferrer">
//               <img src={footer.imgUrl[1]} alt="Dribbble" className="footer15-img" />
//             </a>
//             <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
//               <img src={footer.imgUrl[2]} alt="Behance" className="footer15-img" />
//             </a>
//           </span>
//           <span className="footer15-titles">
//             <span className="footer15-title foot15_1">{footer.title.title1}</span>
//             <span className="footer15-title foot15_2">{footer.title.title2}</span>
//             <span className="footer15-title foot15_3">{footer.title.title3}</span>
//           </span>
//         </p>
//         <p className="footer15-title-4 foot15_4">
//           {footer.title.title4} <span className="footer15-title-5 foot15_5">{footer.title.title5}</span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer15;
import React from "react";
import { useSelector } from "react-redux";
import "./footer15.css";

const Footer15 = () => {
  const { footer } = useSelector((state) => state.template15);

  return (
    <footer className="footer15 ">
      <div className="container mx-auto py-[60px] footer15-container">
        <div className="footer15-text">
          <span className="footer15-icons">
            {footer.icons.map((icon, index) => (
              <a href="#" key={index} target="_blank" rel="noopener noreferrer">
                <img src={icon.imgUrl} alt={`Icon ${index}`} className="footer15-img" />
              </a>
            ))}
          </span>
          <div className="footer15-titles">
            <div className="footer15-title foot15_1">{footer.titles.title}</div>
            <div className="footer15-subtitle foot15_2">{footer.titles.subtitle}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer15;
