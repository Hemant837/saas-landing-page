import { useState } from "react";
import { CheckCircle, Calendar } from "lucide-react";

const DemoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demo request:", formData);
  };

  return (
    <section
      id="demo"
      className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">See CloudSync in Action</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a personalized demo tailored to your business needs. Our
              experts will show you how CloudSync can transform your operations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span>Personalized 45-minute demo</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span>Custom implementation roadmap</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span>ROI calculator and pricing estimate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span>30-day extended trial access</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Request a Demo
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Work Email *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <select
                  value={formData.employees}
                  onChange={(e) =>
                    setFormData({ ...formData, employees: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                >
                  <option value="">Company Size *</option>
                  <option value="50-200">50-200 employees</option>
                  <option value="200-1000">200-1,000 employees</option>
                  <option value="1000-5000">1,000-5,000 employees</option>
                  <option value="5000+">5,000+ employees</option>
                </select>
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
