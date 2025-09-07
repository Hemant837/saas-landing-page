import {
  Users,
  BarChart3,
  Phone,
  Code,
  Database,
  Cloud,
  Monitor,
  Settings,
} from "lucide-react";

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Salesforce",
      icon: <Database className="w-8 h-8" />,
      category: "CRM",
    },
    {
      name: "Microsoft 365",
      icon: <Monitor className="w-8 h-8" />,
      category: "Productivity",
    },
    { name: "AWS", icon: <Cloud className="w-8 h-8" />, category: "Cloud" },
    {
      name: "Slack",
      icon: <Users className="w-8 h-8" />,
      category: "Communication",
    },
    {
      name: "Jira",
      icon: <Settings className="w-8 h-8" />,
      category: "Project Management",
    },
    {
      name: "Tableau",
      icon: <BarChart3 className="w-8 h-8" />,
      category: "Analytics",
    },
    {
      name: "GitHub",
      icon: <Code className="w-8 h-8" />,
      category: "Development",
    },
    { name: "Zoom", icon: <Phone className="w-8 h-8" />, category: "Video" },
  ];

  return (
    <section id="integrations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            200+ Enterprise Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with your existing tools seamlessly. Our platform integrates
            with all major enterprise software.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all text-center group"
            >
              <div className="text-gray-600 mb-3 group-hover:text-blue-600 transition-colors flex justify-center">
                {integration.icon}
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {integration.name}
              </h4>
              <p className="text-xs text-gray-500">{integration.category}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
