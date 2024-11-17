import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Patient's Son",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "&ldquo;The care and attention provided by the team was exceptional. They treated my father with utmost respect and professionalism.&rdquo;"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "&ldquo;I am extremely grateful for the compassionate care I received. The staff is well-trained and very supportive.&rdquo;"
    },
    {
      id: 3,
      name: "Anand Verma",
      role: "Patient's Daughter",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "&ldquo;Their 24/7 availability and quick response time gave us great peace of mind. Highly recommended!&rdquo;"
    }
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with our healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p 
                className="text-gray-400 italic"
                dangerouslySetInnerHTML={{ __html: testimonial.quote }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 