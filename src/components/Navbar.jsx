import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, LogIn, LogOut, User, Settings, Bell, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsProfileOpen(false);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="HappyLife HomeCare Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl sm:text-2xl font-bold text-white">
                HappyLife HomeCare
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 hover:text-blue-400"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-blue-400"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-blue-400"
            >
              Contact
            </button>
            <a 
              href="tel:+917547936505"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <div className="hidden md:flex items-center ml-6">
              {user ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white focus:outline-none"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      {user.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt={user.displayName || user.email} 
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <span className="text-white text-lg font-semibold">
                          {(user.displayName || user.email || '?')[0].toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium">
                        {user.displayName || user.email.split('@')[0]}
                      </div>
                      <div className="text-xs text-gray-400">View Profile</div>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 shadow-lg py-1 border border-gray-700">
                      <div className="px-4 py-3 border-b border-gray-700">
                        <p className="text-sm text-white">Signed in as</p>
                        <p className="text-sm font-medium text-gray-300 truncate">
                          {user.email}
                        </p>
                      </div>

                      <div className="py-1">
                        <a
                          href="#profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Your Profile
                        </a>
                        <a
                          href="#settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </a>
                        <a
                          href="#notifications"
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          <Bell className="w-4 h-4 mr-3" />
                          Notifications
                        </a>
                      </div>

                      <div className="border-t border-gray-700">
                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-2 border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400/10"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white"
            >
              {!isOpen ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400"
              >
                Contact
              </button>
              <a href="tel:+917547936505" className="block px-3 py-2 text-blue-400">
                Call Now
              </a>
              <button className="w-full text-left px-3 py-2 text-blue-400">
                Sign In
              </button>
            </div>
          </div>
        )}

        {/* Mobile Profile Menu */}
        {user && (
          <div className="md:hidden border-t border-gray-700 pt-4 pb-3">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName || user.email} 
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {(user.displayName || user.email || '?')[0].toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">
                  {user.displayName || user.email.split('@')[0]}
                </div>
                <div className="text-sm font-medium text-gray-400">{user.email}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a
                href="#profile"
                className="block px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Your Profile
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </a>
              <a
                href="#notifications"
                className="block px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Notifications
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-red-400 hover:bg-gray-700 hover:text-red-300"
              >
                Sign out
              </button>
            </div>
          </div>
        )}

        {/* Auth Modal */}
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </nav>
  );
};

export default Navbar; 