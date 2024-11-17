import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    "Experienced & Certified Healthcare Professionals",
    "24/7 Care & Support Available",
    "Personalized Care Plans",
    "Regular Health Monitoring & Reports"
  ];

  return (
    <div className="bg-gray-900 py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Trusted Home Healthcare Services in Bangalore
              </h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full mb-6"></div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                At HappyLife HealthCare, we understand that each patient&apos;s needs are unique. 
                Our mission is to provide exceptional healthcare services that enhance the 
                quality of life for our patients in the comfort of their homes.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                With years of experience in home healthcare, our team of dedicated 
                professionals ensures the highest standards of medical care, personal 
                attention, and emotional support for our patients and their families.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 bg-gray-800 rounded-xl p-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-gray-400">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare Professional"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              
              {/* Overlay Card */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-blue-600/90 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Need Healthcare Support?
                  </h3>
                  <p className="text-white/90 mb-4">
                    Our team is available 24/7 to assist you with any healthcare needs.
                  </p>
                  <a 
                    href="tel:+917547936505"
                    className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                  >
                    Call us now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 