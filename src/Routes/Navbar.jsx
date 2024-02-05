import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import  './Navbar.css';
import Logo from '../images/Logo.png'
const Navbar = () => {
  return (
    <div id='navbar'>
       <div className='logo'>
       <img src={Logo} alt="Image 1" />
       </div>
       <input className='navbar-search' type="text" placeholder='Search'/>
       <div className='navbar-right'>
        
       <Link to={"/Signup"} className='icon' >
       <FontAwesomeIcon icon={faUser} />
       </Link>
       <Link to={"/"} className='icon'>
       <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to={"/Cart"} className='icon'>
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
  
      
       </div>
       <br></br>
      
    </div>
  );
};

export { Navbar };
