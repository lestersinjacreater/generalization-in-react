// src/pages/Home.tsx
import React from "react";
import NavBar from "../../components/Navbar";
import HeroSection from "./Herosection";
import AboutUs from "./AboutUs";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CaseStudies from "./CaseStudies"; // Optional
import PricingPlans from "./PricingPlans";   // Optional
import CallToAction from "./CallToAction";
import FAQ from "./FAQ";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      {/* Uncomment if needed */}
      <CaseStudies /> */
      <PricingPlans /> 
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
