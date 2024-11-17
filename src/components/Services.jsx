import React from 'react';
import { 
  Heart, // For nursing care
  UserCog, // For patient attendants
  Activity, // For physiotherapy
  Brain, // For elderly care
  Syringe, // For injection services
  Clipboard, // For medical documentation
  Clock, // For 24/7 care
  Stethoscope // For health monitoring
} from 'lucide-react';

const services = [
  {
    icon: <Heart className="w-12 h-12 text-blue-400" />,
    title: "Nursing Care",
    description: "Experienced nurses providing professional medical care, medication management, and wound dressing at home."
  },
  {
    icon: <UserCog className="w-12 h-12 text-blue-400" />,
    title: "Patient Attendants",
    description: "Trained caregivers for personal care, hygiene maintenance, and daily living assistance."
  },
  {
    icon: <Activity className="w-12 h-12 text-blue-400" />,
    title: "Physiotherapy",
    description: "Expert physiotherapists for rehabilitation, exercise therapy, and mobility improvement."
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-400" />,
    title: "Elderly Care",
    description: "Specialized care for seniors including dementia care, companionship, and daily assistance."
  },
  {
    icon: <Syringe className="w-12 h-12 text-blue-400" />,
    title: "Injection & Medication",
    description: "Professional administration of injections and medication management at your convenience."
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-400" />,
    title: "24/7 Care Services",
    description: "Round-the-clock care with dedicated staff for continuous patient monitoring."
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-blue-400" />,
    title: "Health Monitoring",
    description: "Regular vital checks, health assessment, and progress monitoring by healthcare professionals."
  },
  {
    icon: <Clipboard className="w-12 h-12 text-blue-400" />,
    title: "Medical Documentation",
    description: "Detailed maintenance of patient records, prescriptions, and progress reports."
  }
];

const Services = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Comprehensive home healthcare services tailored to your needs, 
            delivered by experienced professionals at your doorstep
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <div className="mb-4 text-blue-400">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 