import React from 'react';
import './WhySection.css';
import whyImage from '../../assets/whyImage.png'; 

const WhySection = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-left">
          <h3 className="section-subtitle">Why AiShipShape?</h3>
          <h2 className="section-title">
            Big data ≠ better decisions — unless it’s ship-smart.
          </h2>
          <p className="section-description">
            Our maritime-native ML models fuse sensor feeds, AIS, met-ocean grids and commercial KPIs,
            delivering bridge-to-boardroom clarity. Built on an event-driven ASGI micro-services stack,
            we stream updates in milliseconds and guarantee 99.95 % uptime.
          </p>
        </div>
        <div className="why-right">
          <img src={whyImage} alt="Why AiShipShape Visual" className="why-image" />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
