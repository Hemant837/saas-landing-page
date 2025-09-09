import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Professional",
      price: "$49",
      period: "per user/month",
      description: "Perfect for growing teams",
      features: [
        "Up to 100 users",
        "Advanced analytics",
        "24/7 support",
        "API access",
        "Custom integrations",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per user/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Advanced security",
        "Dedicated support",
        "Custom deployment",
        "SLA guarantee",
        "Advanced compliance",
      ],
      popular: true,
    },
    {
      name: "Enterprise Plus",
      price: "Custom",
      period: "contact sales",
      description: "Tailored for your needs",
      features: [
        "Everything in Enterprise",
        "White-label solution",
        "On-premise deployment",
        "Custom development",
        "Dedicated CSM",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing that scales with your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 p-8 relative ${
                plan.popular
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-lg text-gray-600">/month</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
