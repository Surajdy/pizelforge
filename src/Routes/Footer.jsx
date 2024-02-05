import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../images/Logo.png'
import  './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
        <div className="logo">
        <img src={Logo} alt="Image 1" />
        <h1>@World is waiting</h1>
        </div>
        <div className="catalogue">
          <h2>CATALOGUE</h2>
          <ul>
      
            <h1>PC</h1>
            <h1>Playstation</h1>
            <h1>Xbox</h1>
            <h1>Airtorento</h1>
            <h1>Software</h1>
            
            <h1>Gift Cards</h1>
            <h1>Support</h1>
          </ul>
         
        </div>
   
        <div className="resources">
        <h2>RESOURCES</h2>
          <ul>
          <h1>About us</h1>
            <h1>Blog</h1>
            <h1>Create Ticket</h1>
            <h1>Delivery Payment</h1>
            <h1>Contact us</h1>
          </ul>
           
                
        </div>
    
        <div className="social">
          <h2>SOCIAL ATTACHMENT</h2>
      
          <ul>
          <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} />Facebook</a>
          <br></br>
          <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} />Twitter</a>
          <br></br>
          <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} />Instagram</a>   

          </ul>
          
        </div>
    </div>
  );
};

export default Footer;
