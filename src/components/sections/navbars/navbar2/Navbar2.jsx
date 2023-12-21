import React, { useState } from "react";
import "./navbar2.css";
import { useSelector } from "react-redux";

const Navbar2 = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { navbar } = useSelector((state) => state.template2);
  return (
    <nav>
      {navbar.map((item) => (
        <a key={item.link} href={`#${item.link}`} onClick={() => setActiveNav(`#${item.url}`)} className={activeNav === `#${item.url}` ? "active" : ""}>
          <img src={item.imgUrl} alt="" />

          {item.url === "home"}
          {item.url === "services2"}
          {item.url === "projects2"}
          {item.url === "testimonials2"}
          {item.url === "contactUs2"}
        </a>
      ))}
    </nav>
  );
};

export default Navbar2;

// import React from "react";
// import "./navbar2.css";

// import { useState } from "react";

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#");

//   return (
//     <nav>
//       <a onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} href="#">
//         <FaHome />
//       </a>
//       <a href="#services2" onClick={() => setActiveNav("#services2")} className={activeNav === "#services2" ? "active" : "#services2"}>
//         <FaInfoCircle />
//       </a>
//       <a href="#projects2" onClick={() => setActiveNav("#projects2")} className={activeNav === "#projects2" ? "active" : "#projects2"}>
//         <FaBook />
//       </a>
//       <a href="#testimonials2" onClick={() => setActiveNav("#testimonials2")} className={activeNav === "#testimonials2" ? "active" : "testimonials2"}>
//         <FaHandsHelping />
//       </a>
//       <a href="#contactUs2" onClick={() => setActiveNav("#contactUs2")} className={activeNav === "#contactUs2" ? "active" : "#contactUs2"}>
//         <MdMessage />
//       </a>
//     </nav>
//   );
// };

// export default Nav;
