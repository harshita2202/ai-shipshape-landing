import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Challenges from "./components/Challenges";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial/>
      <Challenges/>
      <Features/>
    </>
  );
}

export default App;
