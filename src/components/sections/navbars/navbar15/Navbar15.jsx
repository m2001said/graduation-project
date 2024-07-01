import React, { useState } from "react";


const Navbar15 = ({ template }) => {
  const navbar = template.navbar;

  // const { navbar } = useSelector((state) => state.template15);
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar nav15">
      <img src={navbar.imgUrl} alt="logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navbar.links.map((nav, index) => (
          <li
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "var(--color5)" : "var(--color3)"} ${index === navbar.links.length - 1 ? "mr-10" : "mr-10"
              }`}
            onClick={() => setActive(nav.title)}
          >
            <a className="honerlink11" href={nav.url} style={{ color: active === nav.title ? "var(--color3)" : "var(--color5)" }}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={
            toggle
              ? "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799683/jammal_photos/msugi233fn6vkrra5x9f.svg"
              : "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg"
          }
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navbar.links.map((nav, index) => (
              <li
                key={nav.title}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "var(--color5)" : "var(--color2)"} ${index === navbar.links.length - 1 ? "mb-0" : "mb-4"
                  }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={nav.url} style={{ color: active === nav.title ? "var(--color2)" : "var(--color5)" }}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar15;
