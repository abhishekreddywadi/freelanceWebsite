import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LocationCard = ({ city, state, image, status, address, phone, showPartner = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* City with Image */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-md">
              <img 
                src={image} 
                alt={city} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{city}</h3>
              <p className="text-gray-500">{state}</p>
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-white text-sm font-medium ${
              status === 'open' 
                ? 'bg-green-500' 
                : 'bg-yellow-500'
            }`}
          >
            {status === 'open' ? 'Open Now' : 'Coming Soon'}
          </motion.div>
        </div>

        {/* Expandable Content */}
        <motion.div
          className="mt-6 space-y-4"
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-3 text-gray-600">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>{address}</p>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p>{phone}</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
            <svg 
              className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 sm:flex-none px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-md"
            >
              Get Directions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 sm:flex-none px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Locations = () => {
  const locations = [
    {
      city: "Bengaluru",
      state: "Karnataka",
      image: "/bangalore.jpg",
      status: "open",
      address: "123 Dance Street, Electronic City, Bengaluru",
      phone: "+91 98765 43210"
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      image: "/mumbai.jpg",
      status: "coming",
      address: "456 Arts Avenue, Andheri West, Mumbai",
      phone: "+91 98765 43211"
    },
    {
      city: "Delhi",
      state: "Delhi",
      image: "/delhi.jpg",
      status: "coming",
      address: "789 Culture Road, Connaught Place, Delhi",
      phone: "+91 98765 43212"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h3 className="text-pink-500 font-medium mb-2 text-lg sm:text-xl">Our Locations</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Find Us Near You</h2>
          <p className="text-gray-600">
            Discover our dance academies across India and join the artistic journey.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          <AnimatePresence>
            {locations.map((location, index) => (
              <LocationCard
                key={location.city}
                {...location}
                showPartner={index === locations.length - 1}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-lg text-lg"
          >
            Become a Partner
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
