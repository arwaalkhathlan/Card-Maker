// src/pages/Landing.js
import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import WhatWeOffer from "../components/Services";
import ContactUs from "../components/ContactUs";

const Landing = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <ContactUs />
    </div>
  );
};

export default Landing;
