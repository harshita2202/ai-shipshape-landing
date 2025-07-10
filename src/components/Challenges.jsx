import React from 'react';
import './challenges.css';
import defaultphoto from '../assets/defaultphoto.png'; // Add any placeholder image here

const Challenges = () => {
  return (
          <section className="challenges-section">
      <div className="section-title">
        <p className="tagline">Challenges</p>
        <h2 className="heading">Addressing Key Maritime Industry<br />Pain Points</h2>
      </div>

      <div className="tabs-container">
        <div className="tab-card highlight">
          <h3>Rising Bunker Prices?</h3>
          <p>
            Fuel costs are skyrocketing, affecting budgets and operational strategies for fleets worldwide.
          </p>
        </div>

        <div className="tab-card">
          <h3>Regulatory Compliance Issues?</h3>
          <p>
            Navigating ever-changing CII and EU-ETS regulations can be daunting for ship operators.
          </p>
        </div>

        <div className="tab-card">
          <h3>Data Silos?</h3>
          <p>
            Critical data trapped in silos hinders decision-making and operational efficiency across maritime operations.
          </p>
        </div>
      </div>

      <div className="challenge-image-box">
        <img src={defaultphoto} alt="Challenges Visual" />
      </div>
    </section>
  );
};

export default Challenges;
