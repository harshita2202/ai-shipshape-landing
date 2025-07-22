import React from "react";
import "./Hero.css";
import ship from "../../assets/ship2.png"; 
import { useNavigate } from 'react-router-dom';


function Hero() {
      const navigate = useNavigate();
  
   const handleClick = () => {
      navigate('/contact');
    };
      const handleLearnMore = () => {
    const element = document.getElementById('testimonial');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div className="hero-wrapper">
      <div className="ellipse-bg"></div>
    <div className="hero-container">
      <div className="hero-text">
        <h1>
          Operate Smarter Seas —<br />
          Weather-Aware, AI-First.
        </h1>
        <p>
          Experience real-time vessel telemetry and predictive weather-routing.
          Unlock voyage optimization insights all within a unified maritime
          cloud.
        </p>
        <div className="hero-buttons">
          <button className="btn-demo" onClick={handleClick}>Demo</button>
          <button className="btn-learn" onClick={handleLearnMore}>Learn More</button>
        </div>
      </div>

      <img src={ship} alt="Ship" className="hero-ship" />
    </div>
    </div>
  );
}

export default Hero;