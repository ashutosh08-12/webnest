// Home.jsx

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CompaniesStrip from "./CompaniesStrip";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import TemplatesSection from "./TemplatesSection";
import AdvantageSection from "./AdvantageSection";
import FeaturesSection from "./FeaturesSection";

const Home = () => {
  return (
    <div className="bg-[#ECEAE6] min-h-screen">
      <Navbar />
      <HeroSection />
      <CompaniesStrip />
      <FeaturesSection/>
      <AdvantageSection/>
      <TemplatesSection/>
      <TestimonialSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
};

export default Home;