import { useState } from "react";

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import StatsSection from "../components/StatsSection";
import IntegrationsSection from "../components/IntegrationsSection";
import DemoSection from "../components/DemoSection";
import TestimonialsSection  from "../components/TestimonialsSection ";

const EnterpriseSaaSLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <IntegrationsSection />
      <DemoSection />
      <TestimonialsSection  />
    </div>
  );
};

export default EnterpriseSaaSLanding;
