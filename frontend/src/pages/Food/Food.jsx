
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Food.css"; // Example for your CSS file if applicable

import food from '../../assets/food.webp'; // Import your image

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
          
          <Link to="/item" className="find-food">Find Food</Link>
        </div>
        
         
    
      </div>
    </div>
  );
};

export default Food;
