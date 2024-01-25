// // // import React, { useState } from "react";
// // // import "./navbar3.css";
// // // import { useSelector } from "react-redux";

// // // const Navbar3 = () => {
// // //   const { navbar3 } = useSelector((state) => state.template3);
// // //   const mobile = window.innerWidth <= 768 ? true : false;
// // //   const [menuOpend, setMenuOpend] = useState(false);

// // //   return (
// // //     <div className="navbar3">
// // //       <img src={navbar3.imgUrl[0].imgUrlA} alt="" className="logo" />
// // //       {menuOpend === false && mobile === true ? (
// // //         <div style={{ backgroundColor: "gray", padding: "0.5rem", borderRadius: "5px", cursor: "pointer" }} onClick={() => setMenuOpend(true)}>
// // //           <img src={navbar3.imgUrl[0].imgUrlB} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
// // //         </div>
// // //       ) : (
// // //         <ul className="navbar3-mnu">
// // //           {navbar3.links.map((link, index) => (
// // //             <li key={index}>
// // //               <a href={`#${link}`} onClick={() => setOpenMenu(false)}>
// // //                 {link}
// // //               </a>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Navbar3;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar3.css";
import { useSelector } from "react-redux";

const Navbar3 = () => {
  const { navbar3 } = useSelector((state) => state.template3);
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setMenuOpend] = useState(false);

  return (
    <div className="navbar3">
      <img src={navbar3.imgUrl[0].imgUrlA} alt="" className="logo" />
      {menuOpend === false && mobile === true ? (
        <div style={{ backgroundColor: "gray", padding: "0.5rem", borderRadius: "5px", cursor: "pointer" }} onClick={() => setMenuOpend(true)}>
          <img src={navbar3.imgUrl[0].imgUrlB} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="navbar3-menu">
          {navbar3.links.map((link, index) => (
            <li key={index} className="navbar3-menu-item">
              <Link to={`/${link}`} onClick={() => setMenuOpend(false)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar3;
