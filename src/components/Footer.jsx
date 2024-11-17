import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Overview with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="HappyLife HealthCare Facility" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-6">
              <svg 
                className="h-10 w-10 text-blue-400" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.5 12H9v-1.5H7.5V12h1.5v-1.5H10V12h1.5v1.5H10V15zm3.5-4h-1.5V9.5H11V8h1.5v1.5H14V8h1.5v1.5H14V11zm-5-4h4V5h-4v2z"/>
              </svg>
              <span className="text-2xl font-bold text-white">HappyLife HealthCare</span>
            </div>
            <p className="text-gray-400 mb-6">
              Bringing professional healthcare services to your doorstep with compassion and care.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-blue-400 mr-2" />
                <span>Award Winning Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 7547936505</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@happylifehealthcare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Location</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-400 mt-1" />
              <span>
                #28, Jay Bhuvaneswari Layout,<br />
                Cambridge institute of technology road,<br />
                KR Puram, Bangalore - 560036
              </span>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Find Us</h3>
            <div className="h-48 rounded-lg overflow-hidden">
            <iframe
  title="Office Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3551157242267!2d77.6951!3d13.0151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f3d5c89613%3A0x6e7fc4aa7e87f585!2s2P83%2B9F6%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1629789876543!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} HappyLife HealthCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 