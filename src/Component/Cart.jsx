import React, { useEffect, useState } from "react";
import './Cart.css';
import useRazorpay from 'react-razorpay';
import { useCallback} from 'react';
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [Razorpay, isLoaded] = useRazorpay();
 const navigate=useNavigate();



   useEffect(() => {
    fetch('http://localhost:8000/api/getcart')
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const removeItem = (itemId) => {
    // Make a request to remove item from the database
    fetch(`http://localhost:8000/api/removeitem/${itemId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        // Update the cart state after successful removal
        setCart(cart.filter(item => item._id !== itemId));
      })
      .catch(error => console.error('Error removing item:', error));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_yswl3N40ETtM35", // Replace with your actual API Key
      amount: calculateTotal()*1000,
      currency: "INR",
      name: "PixelForge",
      description: "Test Transaction",
      // image: logo,
      // order_id: 1, // Pass the order ID obtained from createOrder
      handler: (res) => {
        // setShowThankYou(true);

        setTimeout(() => {
          // setShowThankYou(false);
          navigate("/");
        }, 2000);
      },
      prefill: {
        name: "Suraj Yengalwar",
        email: "suraj.yengalwar111@gmail.com",
        contact: "8080305745",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#1C1826",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div id="cart">
      <div className="cart">
        <div className="shoppingcart">
          <h1>Shopping Cart</h1>
          <div className="cartitem">
            {cart.map(item => (
              <div key={item._id} className="item">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button onClick={() => removeItem(item._id)}>REMOVE</button>
              </div>
            ))}
          </div>
        </div>
        <div className="ordersummary">
          <h1>Order Summary</h1>
          <div>
            <div className="grandtotal">
              <h1>Grand Total</h1>
              
              <h1>₹{calculateTotal()}</h1>
              
            </div>
            <hr/>
            <br></br>
            <button onClick={()=>handlePayment()}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
