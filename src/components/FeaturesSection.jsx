import { Shield, Zap, Users, BarChart3, Globe, Lock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption, SSO, and compliance with SOC2, GDPR, and HIPAA standards.",
      highlight: "Zero-trust architecture",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      description:
        "99.9% uptime with sub-50ms response times powered by global CDN infrastructure.",
      highlight: "Global edge network",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Collaboration",
      description:
        "Real-time collaboration tools with advanced permissions and workflow automation.",
      highlight: "Unlimited team members",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Advanced Analytics",
      description:
        "Deep insights with custom dashboards, predictive analytics, and automated reporting.",
      highlight: "AI-powered insights",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Scale",
      description:
        "Deploy across 15+ regions with auto-scaling infrastructure that grows with you.",
      highlight: "Multi-region deployment",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Data Privacy",
      description:
        "Your data stays yours. Zero-knowledge architecture with end-to-end encryption.",
      highlight: "GDPR compliant",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Enterprise Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature designed with enterprise requirements in mind -
            security, compliance, and scalability at the core.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {feature.description}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
