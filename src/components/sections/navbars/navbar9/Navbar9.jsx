import React, { useState } from 'react';

const Navbar9 = ({ template }) => {
  const { navbar } = template;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-16  bg-gradient-to-r from-[var(--website-9-color-3)] to-[var(--website-9-color-5)] shadow-lg py-4 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-[var(--website-9-color-6)] text-xl font-bold">
          {navbar.title}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[var(--website-9-color-6)] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex space-x-6 text-[var(--website-9-color-6)] text-lg font-medium ${isOpen ? 'block' : 'hidden'} md:block`}>
          {navbar.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="block py-2 md:py-0 hover:text-[var(--website-9-color-3)] transition-colors duration-300">
                {link.title.charAt(0).toUpperCase() + link.title.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar9;
