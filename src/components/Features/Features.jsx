import React, { useState } from 'react';
import './Features.css';
import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.png';
import feature3 from '../../assets/feature3.png';

const featuresData = [
  {
    img: feature1,
    title: 'AI Weather Routing & Voyage Optimisation',
    shortText: 'Automatically generate the safest and most cost-effective routes for your vessels.',
    fullText: 'Automatically generate the safest and most cost-effective routes using real-time data, weather forecasts, and vessel parameters for optimal performance and minimal fuel consumption.'
  },
  {
    img: feature2,
    title: 'Shipshape Live — Real-Time Monitoring',
    shortText: 'Monitor engine performance, fuel usage, and GPS data live to ensure optimal operations.',
    fullText: 'Get a centralized view of engine diagnostics, route efficiency, and real-time alerts to reduce downtime and improve maintenance scheduling.'
  },
  {
    img: feature3,
    title: 'Shipshape Chat Suite — Maritime AI Assistant',
    shortText: 'Engage with our AI assistant for instant answers to your maritime queries.',
    fullText: 'Instantly access ship data, safety alerts, and operations insights via natural language commands and conversation-based queries.'
  }
];

const Features = () => {
  const [expanded, setExpanded] = useState([false, false, false]);

  const toggleExpand = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  const expandAll = () => {
    setExpanded([true, true, true]);
  };

  return (
    <section className="features-section">
      <div className="features-heading-wrapper">
        <p className="features-tag">Features</p>
        <h2 className="features-title">Revolutionize Your Maritime Operations Today</h2>
      </div>

      <div className="features-cards-wrapper">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.img} alt={feature.title} className="feature-image" />
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">
                {expanded[index] ? feature.fullText : feature.shortText}
              </p>
              <button className="card-learn-more" onClick={() => toggleExpand(index)}>
                Learn More <span className="chevron">{'>'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="expand-all-button-wrapper">
        <button className="expand-all-button" onClick={expandAll}>
          Learn More
          <span className="chevron">{'>'}</span>
        </button>
      </div>
    </section>
  );
};

export default Features;
