import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar9 = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { words, images } = useSelector((state) => state.template9.navbar);

  return (
    <nav className="unique-navbar sm:hidden sticky top-0 z-50 bg-white shadow-md flex justify-center w-full">
      <div className="bg-[#0ca39a] text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center gap-x-4">
            <button className="lg:hidden text-xl" onClick={() => setNavbarOpen(!navbarOpen)}>
              {navbarOpen ? (
                <img src={images.closeIcon} alt="close-icon" style={{ width: "20px", height: "20px" }} />
              ) : (
                <img src={images.menuIcon} alt="menu-icon" style={{ width: "20px", height: "20px" }} />
              )}
            </button>

            <img src={images.homeIcon} alt="home-icon" className="w-10 h-10" style={{ width: "40px", height: "40px" }} />
            <p className="font-medium text-xl">{words.title}</p>
          </div>

          <ul className={`lg:flex items-center gap-x-4 list-none ${navbarOpen ? "flex" : "hidden"}`}>
            {words.menuItems.map((item, index) => (
              <li key={index} className="py-2">
                <button className="bg-white text-[#0ca39a] rounded-full px-4 py-1 hoverBtn">{item}</button>
              </li>
            ))}
            <li className="py-2">
              <button className="py-4 flex items-center gap-2 text-white hover:text-gray-300">
                <img src={images.personIcon} alt="person-icon" style={{ width: "20px", height: "20px" }} />
                <p>Login/Register</p>
              </button>
            </li>
            <li className="py-2">
              <button className="bg-white text-[#0ca39a] rounded-full px-6 py-2 flex items-center hoverBtn">
                <img src={images.homeIcon} className="text-sm" alt="home-icon" style={{ width: "14px", height: "14px" }} />
                <p>Add Listings</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar9;
