import React from "react";
import "./Login.css";

const Login= () => {
  return (
    <div className="login-container">
      <h2>What's your phone number or email?</h2>
      <input
        type="text"
        placeholder="Enter phone number or email"
        className="input-field"
      />
      <button className="continue-button">Continue</button>
      <div className="divider">
        <span>or</span>
      </div>
      <button className="oauth-button google-button">Continue with Google</button>
      <button className="oauth-button apple-button">Continue with Apple</button>
      <button className="oauth-button qr-button">Log in with QR code</button>
      <p className="disclaimer">
        By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
        including by automated means, from SwitGo and its affiliates to the number
        provided.
      </p>
    </div>
  );
};

export default Login;
