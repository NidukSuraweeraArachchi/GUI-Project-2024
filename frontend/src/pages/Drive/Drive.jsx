import React from 'react';
import './Drive.css';
import car from './../../assets/car1.mp4';
import rideImage from './../../assets/benefit.webp';
import Play from '../../assets/play.png';
import Appga from '../../assets/galle.png';
import Qr from '../../assets/qrcode.png';

const Drive = () => {
  return (
    <div>
      {/* Background video */}
      <div className="video-section">
        <video className="background-video" autoPlay muted loop>
          <source src={car} type="video/mp4" />
        </video>
        <div className="video-overlay">
          <div className="header">
            <h1>FASTER. SAFER. SMARTER.</h1>
            <h2>Plan Your Trip</h2>
           
            <div className="content">
            <p>We take out the hassle and bring back the joy of traveling.</p>
              
              <p>
                We are currently not taking bookings on this website. <br />
                Please use the SwifGo app or contact the call center.
              </p>
              <ul className="contact">
                <li><strong>Call center</strong> - 1331 (Local Hotline)</li>
                <li>+94 11 743 3433 (IDD - Outside Sri Lanka)</li>
                <li>+94 11 743 3430 (Colombo AirPort Hotline)</li>
              </ul>
              <h3>Download The SwiftGo App</h3>
              <div className="app-links">
                <img src={Play} alt="App Store" />
                <img src={Play} alt="Google Play" />
                <img src={Appga} alt="App Gallery" />
              </div>
              <h3>Scan the QR code</h3>
              <img src={Qr} alt="QR Code" className="qr-code" />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="text-content">
          <p>
            Where it all began! SwiftGo Ride-Hailing is a seamless transport solution that arrives 
            within minutes to wherever you are, featuring the best rates and the largest fleet of vehicles in Sri Lanka 
            including Tuk-Tuks, Flex, Minis, Cars, Minivans, and Vans offering you comfort and safety throughout the journey.
          </p>
          <h2>Benefits</h2>
          
          <ul>
            
            <li>Simultaneous multiple ride bookings</li>
            <li>Live location share</li>
            <li>In-app SOS function</li>
            <li>Schedule and book later function</li>
            <li>Multiple drops</li>
            <li>In-app feedback/complaint system</li>
            <li>24x7 customer support</li>
            <li>Earn PickMe rewards and climb up the loyalty tier for better offers</li>
          </ul>
        </div>
        <div className="image-content">
          <img src={rideImage} alt="Ride experience" />
        </div>
      </div>
    </div>
  );
};

export default Drive;
