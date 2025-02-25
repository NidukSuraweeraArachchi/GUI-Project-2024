import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-us-container">
      <video className="background-video" autoPlay muted loop>
        <source src="your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          At SwiftGO, our mission is to revolutionize the way you experience fast and reliable travel services.
          With cutting-edge technology and a customer-first approach, we aim to connect people and places seamlessly.
        </p>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <h3>Jane Smith</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className="team-member">
              <h3>Emily Johnson</h3>
              <p>Marketing Head</p>
            </div>
            <div className="team-member">
              <h3>Michael Brown</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
