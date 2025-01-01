import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-CRc2iQGJ.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/class-schedule', label: 'Our Class Schedule' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/events', label: 'Events' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Nrityakala Academy Logo"
              className="h-16 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-800">NrityamRuchi Academy of</h1>
              <h2 className="text-base sm:text-lg text-gray-600">Performing Arts</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center">
            <nav className="flex items-center space-x-8  text-center items-center justify-center align-center">
              <Link
                to="/"
                className={`text-base font-medium transition-colors pt-2   duration-200 ${
                  location.pathname === '/'
                    ? 'text-pink-500'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium transition-colors  pt-2 duration-200 ${
                  location.pathname === '/about'
                    ? 'text-pink-500'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                About
              </Link>
              <Link
                to="/class-schedule"
                className={`text-base font-medium transition-colors  pt-2 duration-200 ${
                  location.pathname === '/class-schedule'
                    ? 'text-pink-500'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                Our Class Schedule
              </Link>
              <Link
                to="/gallery"
                className={`text-base font-medium transition-colors  pt-2 duration-200 ${
                  location.pathname === '/gallery'
                    ? 'text-pink-500'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/events"
                className={`text-base font-medium transition-colors  pt-2 duration-200 ${
                  location.pathname === '/events'
                    ? 'text-pink-500'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-2.5 text-base font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-full transition-colors duration-200"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  className="absolute w-full h-0.5 bg-current transform transition-transform duration-300"
                  style={{ top: "0%" }}
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="absolute w-full h-0.5 bg-current"
                  style={{ top: "50%" }}
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
                  }}
                  className="absolute w-full h-0.5 bg-current transform transition-transform duration-300"
                  style={{ bottom: "0%" }}
                ></motion.span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-2 space-y-1 ">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-2px-4 rounded-md text-base font-medium text-center ${
                      location.pathname === link.path
                        ? 'text-pink-500 bg-pink-50'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-pink-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Link
                  to="/contact"
                  className="block w-full text-center py-2 px-4 rounded-md text-white bg-pink-500 hover:bg-pink-600 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
