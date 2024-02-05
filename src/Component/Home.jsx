import React from "react";
import  './Home.css';
import {useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Home = ({ setCartItems, cartItems }) => {
  const  [trendingItems, setTrendingItems]=useState([]);
  const navigate = useNavigate();
  const handleseemore =()=>{
    navigate('/products');

  }

  useEffect(() => {
    fetch('http://localhost:8000/api/trending')
      .then(response => response.json())
      .then(data => setTrendingItems(data))
      .catch(error => console.error('Error fetching trending items:', error));
  }, []);
  const addToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:8000/api/addToCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          title: product.title,
          price: product.price,
          // Add other product details as needed
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Product successfully added to the cart, navigate to the cart page
        setCartItems([...cartItems, product]);
       
      } else {
        console.error('Error adding product to cart:', data.message);
        // Handle error as needed
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      // Handle error as needed
    }
  };
  
 
  return (
    <div id="homepage">
  <div className="slider">
  <div className="slider-one">
  <div className="slider-one-image">
    <div className="slider-text">
      <h1>Ride Fast or Stay Home</h1>
      {/* <p>I try to get away and take my motorcycle on a ride whenever I can. I'll take my bike out before the
        show and just cruise.
      </p> */}
    </div>
  </div>
</div>
<div className="slider-two">
  <div className="slider-two-image">
    <div className="slider-text">
      <h1>Pirates of the Carribians</h1>
      {/* <p>People are like stained glass windows, they sparkle and shine when the sun is out, but when darkness sets in their true beauty is revealed only if there is a light from within.
      </p> */}
    </div>
  </div>
</div>
<div className="slider-three">
  <div className="slider-three-image">
    <div className="slider-text">
      <h1>Call Of Duty Season:06</h1>
      {/* <p>driving is not my hobby it's my feeling. I only love FAST CARS because I don't believe slow and
        steady wins the race.</p> */}
    </div>
  </div>
</div>
<div className="slider-four">
  <div className="slider-four-image">
    <div className="slider-text">
      <h1>Call Of Duty Sesson:05</h1>
      {/* <p>If you can make a woman laugh, you can make her do anything.” “All little girls should be told they
        are pretty, even if they aren't.” “A girl should be two things: classNamey and fabulous</p>
    */}
    </div> 
  </div>
</div>
  </div>
  <br></br>
  <br></br>
   <div className="trending">
        <div  className="trending-heading">
            <h1>Trending</h1>
            <button onClick={handleseemore}>See More</button>
        </div>
        <div className="trending-data">
          {trendingItems.map((product) => (
             product.category === "PS5" && (
              <div key={product.id} className="data" >
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <div className="button">
                  <p>${product.price}</p>
                  <button  onClick={() => addToCart(product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
     
   </div>
  
    <div className="bestseller">
    <div  className="trending-heading">
            <h1>Bestseller</h1>
            <button onClick={handleseemore}>See More</button>
        </div>
        <div className="trending-data">
          {trendingItems.map(product => (
              product.category === "PS4" && (
                <div key={product._id} className="data" >
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                  <div className="button">
                    <p>${product.price}</p>
                    <button>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </div>
              )
            ))}
        </div>
    </div>
    <div className="trending">
        <div  className="trending-heading">
            <h1>XBOX</h1>
            <button onClick={handleseemore}>See More</button>
        </div>
        <div className="trending-data">
          {trendingItems.map(product => (
             product.category === "XBOX" && (
              <div key={product._id} className="data" >
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <div className="button">
                  <p>${product.price}</p>
                  <button>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      <div className="trending">
        <div  className="trending-heading">
            <h1>NINTENDO</h1>
            <button onClick={handleseemore}>See More</button>
        </div>
        <div className="trending-data">
          {trendingItems.map(product => (
             product.category === "PC" && (
              <div key={product._id} className="data" >
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <div className="button">
                  <p>${product.price}</p>
                  <button>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
