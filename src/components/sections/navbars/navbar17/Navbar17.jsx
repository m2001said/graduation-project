import React from "react";
import PropTypes from "prop-types"; // Import for prop type validation
import { useSelector } from "react-redux";

const Navbar17 = ({ HandlePopup }) => {
  const navbarIcons = useSelector((state) => state.template17.navbarIcons);
  const navbar = useSelector((state) => state.template17.navbar);
  const dropDownLinks = useSelector((state) => state.template17.dropDownLinks);

  return (
    <>
      <div data-aos="fade" className="container17 bg-[var(--color17-white)]  shadow-sm">
        <div
          className=" flex 
        justify-between py-4 sm:py-3"
        >
          {/* logo section */}
          <div className="font-bold text-3xl text-[var(--color17-dark)]">Logo</div>
          {/* navlinks */}
          <div className="font-bold">
            <ul className="flex items-center gap-10">
              {navbar.map(({ id, name, link }) => (
                <li key={id}>
                  {/*  */}
                  <a
                    href={link}
                    className="hidden sm:inline-block text-[var(--color17-dark)] hover:text-[var(--color17-primary)]
                   text-xl font-semibold"
                  >
                    {name}
                  </a>{" "}
                </li>
              ))}

              {/* simple dropdown and links */}

              <li className="hidden md:block cursor-pointer group ">
                <a
                  href="/#"
                  className="inline-block text-[var(--color17-dark)] hover:text-[var(--color17-primary)]
                   text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown
                    <span>
                      <img src={navbarIcons.dropIcon} className="group-hover:rotate-180 duration-300 icon-17" />
                    </span>
                  </div>
                </a>{" "}
                {/* dropdown section */}
                <div
                  className="absolute z-[9999] hidden
                 group-hover:block w-[200px]
                bg-[var(--color17-white)] text-[var(--color17-dark)] shadow-md p-2"
                >
                  <ul>
                    {dropDownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-xl 
                          inline-block w-full
                           rounded-md p-2  hover:bg-[var(--color17-primary)]"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* login button section */}
              <li>
                <button
                  onClick={HandlePopup}
                  className="flex justify-center items-center gap-2
                 bg-[var(--color17-secondary)] text-xl h-[40px] text-[var(--color17-white)] px-2 md:px-5 
                 py-2 hover:scale-105 duration-300"
                >
                  <img src={navbarIcons.userIcon} className="icon-177" />
                {navbarIcons.myAccount}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
Navbar17.propTypes = {
  HandlePopup: PropTypes.func.isRequired, // Ensure `HandlePopup` is a function and required
};

export default Navbar17;
