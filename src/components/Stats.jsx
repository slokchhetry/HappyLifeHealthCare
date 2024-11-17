import React, { useState, useEffect, useRef } from 'react';
import { Users, Building, Heart, Clock } from 'lucide-react';

const CountUpNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: 1200,
      label: "Patients Served",
      duration: 2000
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: 379,
      label: "Healthcare Professionals",
      duration: 2000
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: 12,
      label: "Partner Networks",
      duration: 1500
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: 24,
      label: "Hours Support",
      duration: 1000
    }
  ];

  const countRef = useRef(null);

  useEffect(() => {
    let observerTarget = countRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Your counting logic here
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget) {
      observer.observe(observerTarget);
    }

    return () => {
      if (observerTarget) {
        observer.unobserve(observerTarget);
      }
    };
  }, []);

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trust the numbers that reflect our commitment to providing 
            exceptional healthcare services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <CountUpNumber end={stat.number} duration={stat.duration} />
                {stat.label === "Hours Support" && "+"}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Excellence in Home Healthcare
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Our commitment to quality care sets us apart. With rigorous training programs, 
            strict quality controls, and 24/7 support, we ensure that our patients receive 
            the highest standard of care in the comfort of their homes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats; 