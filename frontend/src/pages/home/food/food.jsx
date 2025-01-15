import React from 'react';
import './food.css';
import backgroundImage from './path-to-your-background-image.jpg'; // Replace with actual path

const DeliveryPage = () => {
  return (
    <div className="delivery-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>Order delivery near you</h1>
        <div className="input-container">
          <div className="input-wrapper">
            <span className="icon">📍</span> {/* Replace with an icon library */}
            <input
              type="text"
              placeholder="Enter delivery address"
              className="delivery-input"
            />
          </div>
          <div className="dropdown-wrapper">
            <select className="delivery-dropdown">
              <option>Deliver now</option>
              <option>Schedule for later</option>
            </select>
          </div>
          <button className="find-food-btn">Find Food</button>
        </div>
        <p>
          Or <a href="/signin" className="signin-link">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default DeliveryPage;
