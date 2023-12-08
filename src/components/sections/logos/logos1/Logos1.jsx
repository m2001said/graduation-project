import React from "react";
import { useSelector } from "react-redux";

const Logos1 = () => {
  const { logos } = useSelector((state) => state.template);

  return (
    <div className="logos-1">
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index + 1}`} />
      ))}
    </div>
  );
};

export default Logos1;

// import React from "react";
// import "./logos.css";
// import PhotoImage01 from "./01.svg";
// import PhotoImage02 from "./02.svg";
// import PhotoImage03 from "./03.svg";
// import PhotoImage04 from "./04.svg";
// import PhotoImage05 from "./05.svg";
// const Logos1 = () => {
//   return (

//     <div className="logos-1">
//       <img src={PhotoImage01} alt="" />
//       <img src={PhotoImage02} alt="" />
//       <img src={PhotoImage03} alt="" />
//       <img src={PhotoImage04} alt="" />
//       <img src={PhotoImage05} alt="" />
//     </div>
//   );
// };

// export default Logos1;
