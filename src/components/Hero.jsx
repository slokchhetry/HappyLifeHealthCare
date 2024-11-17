import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Professional Healthcare <br className="hidden sm:block" />
                <span className="text-blue-400">At Your Doorstep</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                Providing quality home healthcare services with experienced professionals. 
                From nursing care to therapy, we&apos;re here to support your health journey.
              </p>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Now
              </button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Healthcare Professional"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Hero; 