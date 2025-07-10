import React from "react";
import "./testimonial.css";
import defaultphoto from '../assets/defaultphoto.png'

function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-image">
        <img src={defaultphoto} alt="Testimonial" />
      </div>

      <div className="testimonial-text">
        <h2>“Trusted by forward-thinking fleets on five oceans.”</h2>
        <p>
          Our solutions empower fleets to navigate the complexities of modern
          shipping. Experience unparalleled efficiency and safety with our
          cutting-edge technology.
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
