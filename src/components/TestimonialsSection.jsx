import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      avatar: "SC",
      content:
        "CloudSync transformed our workflow efficiency by 300%. The enterprise features are exactly what we needed.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "VP Engineering",
      company: "DataFlow Inc",
      avatar: "MR",
      content:
        "Implementation was seamless. Our team was up and running in under 24 hours with full enterprise controls.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Head of Operations",
      company: "ScaleUp Co",
      avatar: "EW",
      content:
        "The ROI was immediate. We've saved over $2M annually while improving our security posture significantly.",
      rating: 5,
    },
  ];

  return (
    <section id="customers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what enterprise customers say about CloudSync
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
