import React from "react";
import "./Heros.css";
import hand_icon from "../../Components/Assets/hand_icon.png";
import arrow_icon from "../../Components/Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
const Heros = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero_hand_icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero_latest_btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Heros;
