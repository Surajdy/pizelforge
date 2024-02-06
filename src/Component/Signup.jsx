import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isSignUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  const switchPanel = () => {
    setSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');

    if (!nameInput || !emailInput || !passwordInput) {
      console.error('Error: Input fields not found!');
      return;
    }

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const payload = { name, email, password };

    try {
      const response = await fetch('https://tiny-blue-ray-gear.cyclic.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('data:', data);

      // Show signup success alert
      alert(data.message);

      // If you want to do something after successful signup, you can do it here
      // For example, you might want to redirect the user to another page
      // navigate('/success');
    } catch (error) {
      console.error('Error:', error);
      // Show signup error alert
      alert('Signup failed!');
    }
  };

  const handlesingin = async () => {
    const form = document.getElementById('form2');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');

    if (!emailInput || !passwordInput) {
      console.error('Error: Input fields not found!');
      // Show invalid credentials alert
      alert('Invalid credentials!');
      return;
    }

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const response = await fetch('https://tiny-blue-ray-gear.cyclic.app/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('data:', data);

      // Show login success alert
      alert(data.message);

      const token = data.token;

      localStorage.setItem('token', token);

      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      // Show login error alert
      alert('Invalid credientials!');
    }
  };
  return (
    <div id='Signupcontainer'>
<div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      {/* Sign Up */}
      <div className="container__form container--signup">
        <form action="#" className="form" id="form1"onSubmit={handleSubmit}>
          <h2 className="form__title">Sign Up</h2>
          <input type="text" name="name" placeholder="Name" className="input" />
          <input type="email" name="email" placeholder="Email" className="input" />
          <input type="password" name="password" placeholder="Password" className="input" />
          <button className="btn" type='submit'>Sign Up</button>
        </form>
      </div>

      {/* Sign In */}
      <div className="container__form container--signin">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <a href="#" className="link">
              Forgot your password?
            </a>
            <button className="btn" onClick={handlesingin}>Sign In</button>
          </form>
        </div>

      {/* Overlay */}
      <div className="container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="btn" onClick={switchPanel}>
              Sign In
            </button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="btn" onClick={switchPanel}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Signup;
