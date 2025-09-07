import { useState, useEffect } from "react";
import { ArrowRight, Play, Award, Download } from "lucide-react";

import TrustedLogos from "./TrustedLogos";

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    "10,000+ enterprises",
    "99.9% uptime",
    "150+ countries",
    "24/7 support",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-pulse">
            <Award className="w-4 h-4 mr-2" />
            {stats[currentStat]}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Enterprise
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              SaaS{" "}
            </span>
            Platform
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with our enterprise-grade
            platform. Secure, scalable, and designed for the modern enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 transition-all flex items-center group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
            <button className="text-blue-600 hover:text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </button>
          </div>

          <TrustedLogos />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
