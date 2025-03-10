import React from 'react';
import './footer.css';
import app from '../../assets/app.webp';
import google from '../../assets/google.webp';
import appga from '../../assets/appga.webp';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our offerings</a></li>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><a href="#">Ride</a></li>
            <li><a href="#">Drive</a></li>
            <li><a href="#">Deliver</a></li>
            <li><a href="#">Eat</a></li>
            <li><a href="#">Uber for Business</a></li>
            <li><a href="#">Freight</a></li>
            <li><a href="#">Gift cards</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Global Citizenship</h4>
          <ul>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Diversity & Inclusion</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Travel</h4>
          <ul>
            <li><a href="#">Reserve</a></li>
            <li><a href="#">Airports</a></li>
            <li><a href="#">Cities</a></li>
          </ul>
        </div>
      </div>

      
        <div className="footer-apps">
          <img src={google} alt="Google Play" className="store-button" />
          <img src={app} alt="App Store" className="store-button" />
          <img src={appga} alt="App Gallery" className="store-button" />
        </div>

        <div className="footer-info">
          <span>© 2025 Swift Go Technologies Inc.</span>
          <div>
            <a href="#">Privacy</a> | <a href="#">Accessibility</a> | <a href="#">Terms</a>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
