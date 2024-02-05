
import React, { useEffect, useState } from 'react';
import {AllRoutes} from './Routes/AllRoutes';
import {Navbar} from './Routes/Navbar';
import Footer from './Routes/Footer';
import { Navbar2 } from './Routes/Navbar2';
import Signup from './Component/Signup';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const isSignupPage = location.pathname === '/Signup';
  return (
    <div>
     
      {!isSignupPage && <Navbar/>}
      {!isSignupPage && windowWidth > 1150 && <Navbar2 />}
      
      {!isSignupPage &&<AllRoutes/>}
      {isSignupPage && <Signup/>}
      {!isSignupPage && <Footer />}
    </div>
  );
}

export default App;