import './Navbar2.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXbox } from '@fortawesome/free-brands-svg-icons';
import {  faDesktop ,faGamepad, faGift, faShoppingCart, faLifeRing } from '@fortawesome/free-solid-svg-icons';

const Navbar2 = () => {
  return (
    <div id='navbar2'>
      <div className='navbar2'>
      <div className='navbar2_link'>
        <Link to={"/"} className='icon' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faDesktop} />
          PC
        </Link>
        <Link to={"/products"} className='icon' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faGamepad} />
          PLAYSTATION
        </Link>
        <Link to={"/products"} className='icon' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faXbox} />
          XBOX
        </Link>
        <Link to={"/products"} className='icon' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faGamepad} />
          NINTENDO
        </Link>
        <Link to={""} className='icon' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faGift} />
          GIFT CARDS
        </Link>
        <Link to={""} className='icon' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faLifeRing} />
          SUPPORT
        </Link>
        <Link to={"/cart"} className='icon' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faShoppingCart} />
          CART
        </Link>
      </div>
      <br></br>
      <br></br>
      </div>
    </div>
  );
};

export { Navbar2 };
