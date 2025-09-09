import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Enterprise?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Join thousands of enterprises already using CloudSync to drive
          innovation and growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-4 rounded-lg border border-white text-white w-full sm:w-96 text-lg"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full sm:w-auto">
            Start Free Trial
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          No credit card required. 30-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
