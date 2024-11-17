import React from 'react';
import { Heart, Clock, DollarSign, Users, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: "Personalized Matching",
    description: "We take time to understand your needs and preferences to find the perfect placement."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Quick Placement",
    description: "Our extensive network allows us to find opportunities quickly and efficiently."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Competitive Pay",
    description: "We ensure our healthcare professionals receive excellent compensation packages."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Support Network",
    description: "Join a community of healthcare professionals who support each other."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Verified Opportunities",
    description: "All our partner facilities are thoroughly vetted for quality and safety."
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: "24/7 Support",
    description: "Our team is always available to assist you whenever you need help."
  }
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best experience for both healthcare professionals 
            and facilities through our comprehensive support and services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 