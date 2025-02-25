import React from 'react';
import './foodnav.css';
//import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon from react-icons

const foodnav = ({ cartCount }) => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <h1>Special Page</h1>
      </div>
      <div className="navbar-cart">
        
        <span className="cart-count">{cartCount}</span>
      </div>
    </div>
  );
};

export default foodnav;
