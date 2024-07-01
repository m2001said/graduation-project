import React from "react";

const Navbar17 = ({ template }) => {
  const navbar = template.navbar;

  return (
    <>
      <div className="container17 bg-[var(--website-17-color-2)] shadow-sm sticky top-0 z-50">
        <div className="flex justify-between py-4 sm:py-3">
          {/* logo section */}
          <div className="font-bold text-3xl text-[var(--website-17-color-4)]">
            {navbar.title}
          </div>
          {/* navlinks */}
          <div className="font-bold">
            <ul className="flex items-center gap-10">
              {navbar.links.map(({ index, title, url }) => (
                <li key={index}>
                  <a
                    href={url}
                    className="hidden sm:inline-block text-[var(--website-17-color-4)] hover:text-[var(--website-17-color-1)] text-xl font-semibold"
                  >
                    {title}
                  </a>{" "}
                </li>
              ))}
              {/* simple dropdown and links */}
              <li className="hidden md:block cursor-pointer group">
                <a
                  href="/#"
                  className="inline-block text-[var(--website-17-color-1)] hover:text-[var(--website-17-color-2)] text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    {navbar.description}
                    <span></span>
                  </div>
                </a>{" "}
                {/* dropdown section */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-[var(--website-17-color-3)] text-[var(--website-17-color-4)] shadow-md p-2">
                  <ul>
                    {navbar.dropDown.map(({ index, title, url }) => (
                      <li key={index}>
                        <a
                          href={url}
                          className="text-xl inline-block w-full rounded-md p-2 hover:bg-[var(--website-17-color-1)]"
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* login button section */}
              <li>
                <button className="flex justify-center items-center gap-2 bg-[var(--website-17-color-3)] text-xl h-[40px] text-[var(--website-17-color-4)] px-2 md:px-5 py-2 hover:scale-105 duration-300">
                  {navbar.subtitle}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar17;
