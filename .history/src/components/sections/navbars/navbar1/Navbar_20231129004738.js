import React from 'react'

const Navbar = () => {
  return (
    <div> 
        <header>
      <div class="container">
        <a href="#" class="logo">
          <img src="images/Logo.jpg" alt="Logo" />
        </a>
        <nav>
          <i class="fas fa-bars toggle-menu"></i>
          <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div class="form">
            <i class="fas fa-search"></i>
          </div>
        </nav>
      </div>
    </header>
    </div>
    
  )
}

export default Navbar