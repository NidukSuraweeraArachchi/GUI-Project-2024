import React from 'react';
import './drive.css';
import Ai from '../../../assets/Ai.webp';
const Drive = () => {
  return (
    <div
      className="swift-go"
      style={{ backgroundImage: `url(${Ai})` }}
    >
      <div className="swift-go-content">
        <div className="plan-trip">
          <h2>Plan Your Trip</h2>
          <p>
            We are currently not taking bookings on this website. <br />
            Please use the Swift Go app or contact the call center.
          </p>
          <div className="contact-info">
            <p><strong>Call center – 1331 (Local Hotline)</strong></p>
            <p>+94 11 743 3433 (IDD - Outside Sri Lanka)</p>
            <p>+94 11 743 3430 (Colombo Airport Hotline)</p>
          </div>
          <div className="app-links">
            <h3>Download The Swift Go App</h3>
            <div className="buttons">
              <img src="appstore.png" alt="App Store" />
              <img src="googleplay.png" alt="Google Play" />
              <img src="appgallery.png" alt="App Gallery" />
            </div>
          </div>
          <div className="qr-code">
            <h3>Scan the QR code</h3>
            <img src="qrcode.png" alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drive;
