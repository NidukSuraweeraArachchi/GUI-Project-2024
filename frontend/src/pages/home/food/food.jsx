import React from 'react';
import './food.css';
import food from '../../../assets/food.webp'; // Import your image

const Food = () => {
  return (
    <div
      className="delivery-page"
      style={{ backgroundImage: `url(${food})` }} // Add the image as a background
    >
      <div className="content">
        <h1>Order delivery near you</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter delivery address"
            className="input-box"
          />
          <select className="delivery-time">
            <option value="now">Deliver now</option>
            <option value="later">Deliver later</option>
          </select>
          <button className="find-food">Find Food</button>
        </div>
        <a href="/signin" className="signin-link">
          Or Sign In
        </a>
      </div>
    </div>
  );
};

export default Food;
