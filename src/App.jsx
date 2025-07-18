import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Testimonial from "./components/Testimonial/Testimonial";
import Challenges from "./components/Challenges/Challenges";
import Features from "./components/Features/Features";
import WhySection from "./components/WhySection/WhySection";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";


function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>About Us Page</h2>
      </div>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Services Page</h2>
      </div>
    </>
  );
}


function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <Challenges />
      <Features />
      <WhySection />
      <CTA />
      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<><Navbar /><ContactUs /><Footer /></>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
