import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to answer any questions you have about our services. 
            Reach out to us through any of these channels.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91 7547936505</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">contact@healthstaff.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Healthcare Ave, NY 10001</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Hours</h3>
            <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 