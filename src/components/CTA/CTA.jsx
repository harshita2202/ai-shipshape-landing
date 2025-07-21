import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <div className="cta-container">
          <h2 className="cta-heading">
            Ready to chart the smartest course?
          </h2>
          <p className="cta-text">
            Unlock the potential of AI-driven maritime solutions for smarter, safer voyages today.
          </p>
          <div className="cta-actions">
  <button className="cta-btn primary">
    <span className="desktop-text">Start Your FREE Trial</span>
    <span className="mobile-text">Start</span>
  </button>
  <button className="cta-btn secondary">
    <span className="desktop-text">Talk to Expert</span>
    <span className="mobile-text">Talk</span>
  </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
