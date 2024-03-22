// import React from "react";
// import "./feature3.css";
// import { useSelector } from "react-redux";

// const Feature3 = () => {
//   const { feature } = useSelector((state) => state.template3);

//   return (
//     <div className="Reasons3" id="Why us">
//       <div className="left-r3">
//         <img src={feature.imgUrl[0]} alt="" />
//         <img src={feature.imgUrl[1]} alt="" />
//         <img src={feature.imgUrl[2]} alt="" />
//         <img src={feature.imgUrl[3]} alt="" />
//       </div>
//       <div className="right-r3">
//         <span>{feature.Subtitle}</span>
//         <div>
//           <span className="stroke-text">{feature.title} </span>
//         </div>
//         <div className="details-r3">
//           <div>
//             <img src={feature.imgUrl[5]} alt="" />
//             <span>{feature.description.description1}</span>
//           </div>
//           <div>
//             <img src={feature.imgUrl[5]} alt="" />
//             <span>{feature.description.description2}</span>
//           </div>
//           <div>
//             <img src={feature.imgUrl[5]} alt="" />
//             <span>{feature.description.description3}</span>
//           </div>
//           <div>
//             <img src={feature.imgUrl[5]} alt="" />
//             <span>{feature.description.description4}</span>
//           </div>
//         </div>
//         <span style={{ color: "#808080", fontWeight: "normal" }}>{feature.description.description5}</span>
//         <div className="partners3">
//           <img src={feature.imgUrl[4]} alt="" />
//           <img src={feature.imgUrl[7]} alt="" />
//           <img src={feature.imgUrl[6]} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feature3;
// import React from "react";
// import "./feature3.css";
// import { useSelector } from "react-redux";

// const Feature3 = () => {
//   const { feature } = useSelector((state) => state.template3);

//   return (
//     <div className="Reasons3" id="Why us">
//       <div className="left-r3">
//         {feature.imgUrl.slice(0, 4).map((url, index) => (
//           <img key={index} src={url} alt="" />
//         ))}
//       </div>
//       <div className="right-r3">
//         <span>{feature.Subtitle}</span>
//         <div>
//           <span className="stroke-text">{feature.title}</span>
//         </div>
//         <div className="details-r3">
//           {feature.description.map((item, index) => (
//             <div key={index}>
//               <img src={feature.imgUrl[5]} alt="" />
//               <span>{item.description}</span>
//             </div>
//           ))}
//         </div>
//         <span style={{ color: "#808080", fontWeight: "normal" }}>{feature.description[4].description}</span>
//         <div className="partners3">
//           <img src={feature.imgUrl[4]} alt="" />
//           <img src={feature.imgUrl[7]} alt="" />
//           <img src={feature.imgUrl[6]} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feature3;
import React from "react";
import "./feature3.css";
import { useSelector } from "react-redux";

const Feature3 = () => {
  const { feature } = useSelector((state) => state.template3);

  return (
    <div className="Reasons3" id="Why us">
      <div className="left-r3">
        {feature.imgUrl.slice(0, 4).map((url, index) => (
          <img key={index} src={url} alt="" />
        ))}
      </div>
      <div className="right-r3">
        <span>{feature.Subtitle}</span>
        <div>
          <span className="stroke-text">{feature.title}</span>
        </div>
        <div className="details-r3">
          {feature.statistics.map((item, index) => (
            <div key={index}>
              <img src={feature.imgUrl[5]} alt="" />
              <span>{item.description}</span>
            </div>
          ))}
        </div>
        <span style={{ color: "#808080", fontWeight: "normal" }}>{feature.statistics[4].description}</span>
        <div className="partners3">
          <img src={feature.imgUrl[4]} alt="" />
          <img src={feature.imgUrl[7]} alt="" />
          <img src={feature.imgUrl[6]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature3;
