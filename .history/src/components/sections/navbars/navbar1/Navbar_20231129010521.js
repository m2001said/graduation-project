import React from 'react'
import Logo from '../../../../images/Logo.jpg'

const Navbar = () => {
  return (
    <div> 
        <header>
      <div className="container">
        <a href="#" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav>
          <i className="fas fa-bars toggle-menu"></i>
          <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="form">
            <i className="fas fa-search"></i>
          </div>
        </nav>
      </div>
    </header>
    </div>
    
  )
}

export default Navbar