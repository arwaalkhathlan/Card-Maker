// src/pages/Landing.js
import React from "react";
import Hero from "../components/landing/Hero";
import AboutUs from "../components/landing/AboutUs";
import Services from "../components/landing/Services";
import ContactUs from "../components/landing/ContactUs";
import OrderSteps from '../components/landing/OrderSteps';
import Prices from '../components/landing/Prices';
import WhatWeOffer from '../components/landing/WhatWeOffer';

const Landing = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <ContactUs />
      <OrderSteps/>
      <Prices/>
      <Services/>

    </div>
  );
};

export default Landing;
