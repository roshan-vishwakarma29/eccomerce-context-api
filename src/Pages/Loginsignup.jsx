import React from "react";
import './Css/Loginsignup.css'
const Loginsignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup_container">
        <h1>Signup</h1>
        <div className="loginsignup_field">
          <input type="text" placeholder="Your Name" name="" id="" />
          <input type="email" placeholder="Email Addresh" name="" id="" />
          <input type="password" placeholder="Password" name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginsignup_login">Already have an account? <span>Login Hear</span></p>
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing , i agree to the terms of use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
