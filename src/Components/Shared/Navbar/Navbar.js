import React from 'react';
import'./Navbar.css'
import Logo from "../../../resources/logo2.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Navbar = () => {
    return (
        <div className='nav-main' >
            <nav class="navbar navbar-expand-lg navbar-light">
        <img className='navLogo' src={Logo} alt=""/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
     
      <li className="ms-2">
          <ShoppingCartIcon/>
      </li>
      <li class=" ms-2">
        <a class="nav-link" href="#">login</a>
      </li>
     <li class=" ms-2">
     <button className="btn btn-danger">sign up</button>
     </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;