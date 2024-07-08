import React from "react";
import { useSelector } from "react-redux";


const DarkMode14 = ({template}) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const element = document.documentElement;

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={navbar.icons[1]}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      />
      <img onClick={() => setTheme(theme === "dark" ? "light" : "dark")} src={navbar.icons[0]} alt="" className={`w-12 cursor-pointer `} />
    </div>
  );
};

export default DarkMode14;
