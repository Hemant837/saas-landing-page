import { BarChart3, Play, Download, Code, FileText } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      type: "Whitepaper",
      title: "Enterprise Digital Transformation Guide",
      description: "Complete roadmap for digital transformation",
      icon: <FileText className="w-6 h-6" />,
      downloadCount: "12,000+",
    },
    {
      type: "Webinar",
      title: "Security Best Practices for Enterprise SaaS",
      description: "Learn from industry experts",
      icon: <Play className="w-6 h-6" />,
      downloadCount: "5,000+",
    },
    {
      type: "ROI Calculator",
      title: "Calculate Your CloudSync ROI",
      description: "See potential savings and benefits",
      icon: <BarChart3 className="w-6 h-6" />,
      downloadCount: "8,000+",
    },
    {
      type: "Documentation",
      title: "Implementation Guide",
      description: "Step-by-step setup instructions",
      icon: <Code className="w-6 h-6" />,
      downloadCount: "15,000+",
    },
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to make informed decisions and successful
            implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <div className="text-xs text-blue-600 font-semibold mb-2 uppercase">
                {resource.type}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {resource.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {resource.downloadCount} downloads
                </span>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
