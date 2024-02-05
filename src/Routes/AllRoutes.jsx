import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Component/Home';
import Cart from '../Component/Cart';
import Products from '../Component/Products'
import Signup from '../Component/Signup';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export { AllRoutes };
