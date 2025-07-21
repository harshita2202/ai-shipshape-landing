import React, { useState } from 'react';
import './Challenges.css';
import defaultphoto from '../../assets/challengePic3.jpg'; 
import challengePic1 from '../../assets/challengePic1.png';
import challengePic2 from '../../assets/challengePic2.png';

const Challenges = () => {
  const [activeTab, setActiveTab] = useState(0);

  const images = [ challengePic1, challengePic2, defaultphoto ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="challenges-section">
      <div className="section-title">
        <p className="tagline">Challenges</p>
        <h2 className="heading">Addressing Key Maritime Industry<br />Pain Points</h2>
      </div>

      <div className="tabs-container">
        {[
          {
            title: 'Rising Bunker Prices?',
            text: 'Fuel costs are skyrocketing, affecting budgets and operational strategies for fleets worldwide.',
          },
          {
            title: 'Regulatory Compliance Issues?',
            text: 'Navigating ever-changing CII and EU-ETS regulations can be daunting for ship operators.',
          },
          {
            title: 'Data Silos?',
            text: 'Critical data trapped in silos hinders decision-making and operational efficiency across maritime operations.',
          },
        ].map((tab, index) => (
          <div
            key={index}
            className={`tab-card ${activeTab === index ? 'highlight' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <h3>{tab.title}</h3>
            <p>{tab.text}</p>
          </div>
        ))}
      </div>

      <div className="tab-image">
        <img src={images[activeTab]} alt="Challenge Visual" />
      </div>
    </section>
  );
};

export default Challenges;
