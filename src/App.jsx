import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Testimonial from "./components/Testimonial/Testimonial";
import Challenges from "./components/Challenges/Challenges";
import Features from "./components/Features/Features";
import WhySection from "./components/WhySection/WhySection";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

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
