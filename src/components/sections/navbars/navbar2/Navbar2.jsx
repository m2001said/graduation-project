import React, { useState } from "react";
import "./navbar2.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Navbar2 = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { pathname } = useLocation();
  const navbar = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.navbar;
    } else {
      return state.template2.navbar;
    }
  });

  return (
    <nav className="nav2">
      {navbar.links.map((item) => (
        <a key={item.url} href={item.url} onClick={() => setActiveNav(item.url)} className={activeNav === item.url ? "active" : ""}>
          <img src={item.imgUrl} alt="" />
        </a>
      ))}
    </nav>
  );
};

export default Navbar2;

// import React, { useState } from "react";
// import "./navbar2.css";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";

// const Navbar2 = () => {
//   const [activeNav, setActiveNav] = useState("#");
//   const { pathname } = useLocation();
//   const navbar = useSelector((state) => {
//     if (pathname.includes("own-page")) {
//       return state.ownTemplate.navbar;
//     } else {
//       return state.template2.navbar;
//     }
//   });
//   return (
//     <nav className="nav2">
//       {navbar.map((item) => (
//         <a key={item.url} href={`#${item.url}`} onClick={() => setActiveNav(`#${item.url}`)} className={activeNav === `#${item.url}` ? "active" : ""}>
//           <img src={item.imgUrl} alt="" />

//           {item.url === "home"}
//           {item.url === "services2"}
//           {item.url === "projects2"}
//           {item.url === "testimonials2"}
//           {item.url === "contactUs2"}
//         </a>
//       ))}
//     </nav>
//   );
// };

// export default Navbar2;
