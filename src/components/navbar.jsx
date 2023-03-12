import './navbar.css'
import React from 'react';

function Navbar() {
   
  

    return (
     <>
       <nav>
     <div class="logo">
    <a href="#">Restaurant Name</a>
    </div>
  <ul class="nav-links">
    <li><a href="#">Menu</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</nav>

  
  

     
     </>
    );
  }

  export default Navbar;
