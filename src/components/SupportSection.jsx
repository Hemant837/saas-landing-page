import { Users, Award, Headphones } from "lucide-react";

const SupportSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Enterprise-Grade Support
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get the support your enterprise deserves with dedicated resources and
          SLA guarantees
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            24/7 Priority Support
          </h3>
          <p className="text-gray-600 mb-6">
            Dedicated support team with 15-minute response time for critical
            issues
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Phone, chat, and email support</li>
            <li>• Escalation to engineering team</li>
            <li>• Proactive monitoring</li>
          </ul>
        </div>

        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Dedicated Success Manager
          </h3>
          <p className="text-gray-600 mb-6">
            Personal CSM to ensure your success and maximize platform value
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Quarterly business reviews</li>
            <li>• Custom training programs</li>
            <li>• Best practice guidance</li>
          </ul>
        </div>

        <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            99.9% SLA Guarantee
          </h3>
          <p className="text-gray-600 mb-6">
            Industry-leading uptime with financial penalties if we don't meet
            our SLA
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• 99.9% uptime guarantee</li>
            <li>• Automatic failover</li>
            <li>• Performance monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SupportSection;
