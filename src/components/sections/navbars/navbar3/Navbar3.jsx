import React, { useState, useEffect } from "react";
import "./navbar3.css";

const Navbar3 = ({ template }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkWindowSize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="navbar3">
      <img src={template.navbar.imgUrl} alt="" className="logo3" />
      <div className="navbar3-menu">
        {mobile ? (
          <div className="closed-mobile-menu" onClick={toggleMenu}>
            <img src={"https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg"} alt="" className="menu-icon" />
          </div>
        ) : (
          template.navbar.links &&
          template.navbar.links.map((link, index) => (
            <a className="hoverlink3" key={index} href={`#${link.url}`} onClick={() => setMenuOpened(false)}>
              {link.title}
            </a>
          ))
        )}
      </div>
      {menuOpened && mobile && (
        <div className="navbar3-menu">
          {template.navbar.links &&
            template.navbar.links.map((link, index) => (
              <a className="hoverlink3" key={index} href={`#${link.url}`} onClick={() => setMenuOpened(false)}>
                {link.title}
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

export default Navbar3;
