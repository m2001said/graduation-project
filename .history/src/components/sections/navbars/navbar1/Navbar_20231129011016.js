import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../../images/Logo.jpg';

const Navbar = () => {
  return (
    <div> 
      <header>
        <div className="container">
          <a href="#" className="logo">
            <img src={Logo} alt="Logo" />
          </a>
          <nav>
            <FontAwesomeIcon icon={faBars} className="toggle-menu" />
            <ul>
              <li><a className="active" href="#">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Project</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="form">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
