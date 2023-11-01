import React from "react";
import "./Login.css";
import Navbar from "../../components/NavbarComp/Navbar";

import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";

function Login() {
  return (
    <div className="login-page">
      <Navbar></Navbar>
      <div className="container">
        <div className="header">
          <div className="text">Sign in</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password ? <span>Click Here</span>
        </div>
        <div className="submit-container">
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
