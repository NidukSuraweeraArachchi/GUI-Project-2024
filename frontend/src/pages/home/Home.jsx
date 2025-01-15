import React from 'react';
import './home.css';
import video from '../../assets/4k Busy City Night Road Timelapse Video.mp4'; // Ensure this path is correct
import dp from '../../assets/dp.webp';
import app from '../../assets/app.webp';
import google from '../../assets/google.webp';
import appga from '../../assets/appga.webp';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <main className="hero-section">
        {/* Background Video */}
        <video className="background-video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1>Your Journey, Simplified!</h1>
        <p className="tagline">
          Welcome to the most seamless platform for your transportation and
          logistics needs.
        </p>
        <button className="cta-button">BOOK WITH WHATSAPP</button>

        {/* Highlighted Services */}
        <div className="services">
          <div className="service">
            <h3>Drive</h3>
            <p>Manage your logistics and driving services with ease.</p>
          </div>
          <div className="service">
            <h3>Business</h3>
            <p>Efficient solutions to take your business to the next level.</p>
          </div>
          <div className="service">
            <h3>Market</h3>
            <p>Connect with local markets and grow your network.</p>
          </div>
          <div className="service">
            <h3>Flash</h3>
            <p>Fast delivery and quick access to resources.</p>
          </div>
        </div>
      </main>

      {/* Scrollable Section */}
      <section className="scrollable-section">
        <div className="app-demo">
          <img
            src={dp} // Path to your actual phone mockup image
            alt="Phone Mockup"
            className="phone-mockup"
          />
        </div>
        <div className="how-it-works">
          <h2>The SwiftGo App and how it works</h2>
          <ul>
            <li>
              <span className="step-number">1</span> <b>Book in Just 2 Taps</b>
              <p>
                Key in your pick-up and drop-off locations to get your estimated
                fare.
              </p>
            </li>
            <li>
              <span className="step-number">2</span> <b>Get a Driver</b>
              <p>SwiftGo will find you the nearest available driver.</p>
            </li>
            <li>
              <span className="step-number">3</span> <b>Track Your Driver</b>
              <p>
                Know your driver's location and estimated time of arrival in
                real-time.
              </p>
            </li>
          </ul>
          <div className="download-buttons">
            <img
              src={google} // Path to Google Play image
              alt="Google Play"
              className="store-button"
            />
            <img
              src={app} // Path to App Store image
              alt="App Store"
              className="store-button"
            />
            <img
              src={appga}// Path to AppGallery image
              alt="App Gallery"
              className="store-button"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
