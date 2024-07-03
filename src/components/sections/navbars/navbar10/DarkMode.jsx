import React, { useState, useEffect } from "react";


const DarkMode = ({template}) => {
 const navbar = template.navbar;

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="relative ">
        <img
          src={navbar.icons[2]}
          alt=""
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10
          ${theme === "dark" ? "opacity-0" : "opacity-100"} `}
        />

        <img
          src={navbar.icons[1]}
          alt=""
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
        />
      </div>
    </>
  );
};

export default DarkMode;
