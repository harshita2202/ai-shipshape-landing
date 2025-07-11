import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Challenges from "./components/Challenges";
import Features from "./components/Features";
import WhySection from "./components/WhySection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial/>
      <Challenges/>
      <Features/>
      <WhySection/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
