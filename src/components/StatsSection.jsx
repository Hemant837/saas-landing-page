const StatsSection = () => (
  <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 text-center">
        <div className="text-white">
          <div className="text-4xl font-bold mb-2">99.9%</div>
          <div className="text-blue-100">Uptime SLA</div>
        </div>
        <div className="text-white">
          <div className="text-4xl font-bold mb-2">10K+</div>
          <div className="text-blue-100">Enterprise Customers</div>
        </div>
        <div className="text-white">
          <div className="text-4xl font-bold mb-2">50ms</div>
          <div className="text-blue-100">Average Response Time</div>
        </div>
        <div className="text-white">
          <div className="text-4xl font-bold mb-2">24/7</div>
          <div className="text-blue-100">Expert Support</div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
