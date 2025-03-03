import React from "react";
import { Link } from "react-router-dom"; 
import "./Food.css"; 
import Abc from '../../assets/FOOD background video.mp4'; 

const Food = () => {
  return (
    <div className="food-container">
      <video className="background-video" autoPlay muted loop playsInline>
        <source src={Abc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Order delivery near you</h1>
        <div className="search-bar">
          <input type="text" placeholder="Enter delivery address" className="input-box" />
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
