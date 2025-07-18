import React, { useState } from "react";
import "./ContactUs.css";
import contactImg from "../../assets/contactImg.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <>
      
     <section className="contact-header">
        <div className="white-box-padding-fix">
         <h1>
            Transforming Data into <br />
            Actionable Insights
          </h1>
          <p>
             We're here to provide answers and support your journey towards smarter
             maritime solutions.
          </p>
        </div>
        </section>

     
      <section className="contact-section">
        <div className="contact-container">
          
          <div className="contact-form-wrapper">
            <h5 className="small-heading">Connect</h5>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you!</p>

            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                <label>I accept the Terms</label>
              </div>

              <button type="submit" className="send-button">SEND</button>
            </form>
            
          </div>

         
          <div className="contact-image">
            <img src={contactImg} alt="Contact Illustration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;


