import React from 'react';
import './Ride.css';
import image from './../../assets/bg.jpeg';
import ui from './../../assets/ui.webp';


function Ride() {
  return (
    <div className="drive-with-SwiftGo">
      {/* Main Section */}
      <div className="main-section">
        {/* Left Content */}
        <div className="left-content">
          <img
            src={image}
            alt="Driver in car"
            className="driver-image"
          />
          <div className="opportunities">
            <h2>Opportunities are Endless with SwiftGo</h2>
            <p>
            If you own a Bike, Tuk, Car, Van, or Truck, 
            there’s an opportunity waiting for you!
             Join the country’s largest driver network and
              enjoy earning while making driving exciting.
            </p>
            <ul>
              <li>Earn 100,000+ Rupees Monthly!</li>
              <li>Life Insurance Coverage of 4,000,000 Rupees  (COVID inclusive)</li>
              <li>Attractive Daily and Weekly Incentives</li>
              <li>Keep More with Low Commission Rates</li>
              <li>Get Paid Instantly, No Matter the Payment Method</li>
            </ul>
            <h3>Take the wheel of your success today!</h3>
          </div>
        </div>

        {/* Right Content (Signup Form) */}
        <div className="right-content">
          <h2>Signup to drive with SwiftGo</h2>
          <form className="signup-form">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Mobile No" />
            <input type="text" placeholder="Vehicle Type" />
            <input type="text" placeholder="Vehicle Make" />
            <input type="text" placeholder="Vehicle Model" />
            <select>
              <option value="">Full time or Part Time</option>
              <option value="full">Full Time</option>
              <option value="part">Part Time</option>
            </select>
            <select>
              <option value="">Working District</option>
              <option value="colombo">Colombo</option>
              <option value="galle">Galle</option>
              <option value="kandy">Kandy</option>
            </select>
            <button type="submit">REGISTER</button>
          </form>
        </div>
        <img
          src={ui}
          alt="App Promo"
          className="app-promo-image"
        />
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <div className="app-info">
          <h3>Download The App</h3>
          <div className="app-buttons">
            <button className="app-store">App Store</button>
            <button className="play-store">Google Play</button>
            <button className="huawei-store">AppGallery</button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Ride;
