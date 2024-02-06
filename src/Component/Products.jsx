import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import "./Products.css";

const Products = ({ setCartItems, cartItems }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch('https://tiny-blue-ray-gear.cyclic.app/api/trending');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await fetch('https://tiny-blue-ray-gear.cyclic.app/api/addToCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          title: product.title,
          price: product.price,
          image:product.image,
          // Add other product details as needed
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Product successfully added to the cart, navigate to the cart page
        setCartItems([...cartItems, product]);
        navigate('/cart');
      } else {
        console.error('Error adding product to cart:', data.message);
        // Handle error as needed
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      // Handle error as needed
    }
  };

  const filterProductsByCategory = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className='productPage'>
      <div className='headingContainer'>
        <br></br>
        <h1 style={{ color: "white", marginBottom: "50px", fontSize: "40px" }}>Best Games For PC</h1>
        <div>
          <h1>HOT GAMES</h1>
          <button onClick={() => filterProductsByCategory('All')}>View All</button>
        </div>
      </div>
      <div className='mainContainer'>
        <div className='filterContainer'>
          <h1>FILTER HERE</h1>
          <div className='filter'>
           
              <div className='filter1'>
                  <div className='filtername'>
                  <h1>GAMES</h1>
                  </div>
                  <div className='filter1_1'>
                    <div className='a' >
                      <h1>PS 4</h1>
                      <button  onClick={() => filterProductsByCategory('PS4')}>+</button>
                    </div>  
                    <div className='a' >
                      <h1>PS 5</h1>
                      <button  onClick={() => filterProductsByCategory('PS5')}>+</button>
                    </div> 
                    <div className='a' >
                      <h1>Xbox One</h1>
                      <button  onClick={() => filterProductsByCategory('XBOX')}>+</button>
                    </div> 
                    <div className='a' >
                      <h1>Nintendo Switch</h1>
                      <button  onClick={() => filterProductsByCategory('NINTENDO')}>+</button>
                    </div> 
                    <div className='a' >
                      <h1>PC</h1>
                      <button  onClick={() => filterProductsByCategory('PC')}>+</button>
                    </div> 
                  </div>
               
              </div>
              <div className='filter2'>
                  <div className='filtername'>
                  <h1>ACCESSORIES</h1>
                  </div>
                  <div className='filter2_1'>
                  <div className='a' >
                      <h1>Playstation</h1>
                      <button  onClick={() => filterProductsByCategory('PLAYSTATION')}>+</button>
                    </div>  
                    <div className='a' >
                      <h1>Xbox</h1>
                      <button  onClick={() => filterProductsByCategory('XBOX')}>+</button>
                    </div> 
                    <div className='a' >
                      <h1>Switch</h1>
                      <button  onClick={() => filterProductsByCategory('SWITCH')}>+</button>
                    </div>      
                    <div className='a' >
                      <h1>PC</h1>
                      <button  onClick={() => filterProductsByCategory('PC')}>+</button>
                    </div>                   
                  </div>               
              </div>
            </div>
          </div>
        <div className='productContainer'>
          {filteredProducts.map((product) => (
            <div className='product' key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <div className="button">
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}> <FontAwesomeIcon icon={faShoppingCart} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
