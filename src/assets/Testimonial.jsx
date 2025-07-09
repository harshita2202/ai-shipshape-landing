import React from 'react';
import './testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-container">
      <div className="testimonial-image">
        <img
          src="https://via.placeholder.com/400x300?text=Fleet+Photo"
          alt="Fleet Testimonial"
        />
      </div>
      <div className="testimonial-text">
        <h2>Trusted by forward-thinking fleets on five oceans.</h2>
        <p>
          Our solutions empower fleets to navigate the complexities of modern
          shipping. Experience unparalleled efficiency and safety with our
          cutting-edge technology.
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
