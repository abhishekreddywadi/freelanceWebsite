import React from 'react';
import { motion } from 'framer-motion';
import eventDetailsImg from '../../assets/eventDetails.jpg';
import eventLogo from '../../assets/logoEvent.png';
import Footer from '../Footer';

const EventDetails = () => {
  const galleryImages = [
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
    eventDetailsImg,
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={eventDetailsImg}
            alt="Kalpatattva Dance Performance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full relative top-[40px] right-[100px] ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Title */}
              {/* <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-pink-500 mb-4">
                <span>KALPA</span> <span className='text-[yellow]'>TATTVA</span>
              </h1> */}

<img src={eventLogo} alt="Kalpatattva Logo" className="w-auto h-[400px]" />
              {/* Subtitle */}
              {/* <h2 className="text-xl sm:text-xl lg:text-2xl text-white font-light mb-8">
                THE ESSENCE OF CREATION
              </h2> */}

              {/* CTA Buttons */}
             
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Event Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 mt-1 text-pink-500">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Date & Time</h4>
                    <p className="text-gray-600">January 15, 2024 | 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 mt-1 text-pink-500">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Venue</h4>
                    <p className="text-gray-600">Cultural Center Auditorium</p>
                    <p className="text-gray-600">123 Arts Street, City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Classical Dance Performances</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Live Musical Accompaniment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Interactive Session with Artists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Event Overview Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#ff6b00] mb-4">Kalpatattva</h2>
            <h3 className="text-2xl text-gray-800 mb-6">The Essence of Creation</h3>
            <p className="text-gray-700 leading-relaxed">
              On November 9, 2024, NrityamRuchi Academy of Performing Arts proudly presented the inaugural edition of Kalpatattva, an evening that captivated the senses and brought to life a fusion of classical dance and contemporary creativity. Held at JSS Educational Complex in Bengaluru, the event was a journey through rhythm, expression, and storytelling, leaving an indelible mark on all who attended.
            </p>
          </div>

          {/* Event Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start bg-[#ff6b00] rounded-lg p-6">
            {/* Left Column - Text Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Event Highlights
                </h2>
                <p className="text-white mb-4 text-sm">
                  Step into the magic of Kalpatattva through our exclusive photo gallery, where each image captures the elegance, grace, and energy that defined the evening. Here's a glimpse into some of the highlights:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-white"></div>
                    <p className="flex-1 text-white text-sm">
                      Unforgettable Moments: Relive the artistic expressions and cultural celebrations that illuminated the stage, showcasing the depth and beauty of classical dance with a modern twist.
                    </p>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-white"></div>
                    <p className="flex-1 text-white text-sm">
                      Diverse Performances: Explore the rich variety of performances, from the timeless grace of Kathak to vibrant contemporary adaptations, each piece inviting the audience into a unique world of movement and rhythm.
                    </p>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-white"></div>
                    <p className="flex-1 text-white text-sm">
                      Behind the Scenes: Peek behind the curtain to see the dedication and passion of our performers, choreographers, and support team who brought Kalpatattva to life with meticulous preparation and heartfelt artistry.
                    </p>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-white"></div>
                    <p className="flex-1 text-white text-sm">
                      Behind the Scenes: Peek behind the curtain to see the dedication and passion of our performers, choreographers, and support team who brought Kalpatattva to life with meticulous preparation and heartfelt artistry.
                    </p>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-white"></div>
                    <p className="flex-1 text-white text-sm">
                      Behind the Scenes: Peek behind the curtain to see the dedication and passion of our performers, choreographers, and support team who brought Kalpatattva to life with meticulous preparation and heartfelt artistry.
                    </p>
                  </li>
                </ul>
              </div>
             
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={eventDetailsImg}
                alt="Event Performance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Gallery Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#ff6b00] mb-4">Event Highlight</h2>
          <p className="text-gray-700 mb-8">
            Step into the magic of Kalpatattva through our exclusive photo gallery, where each image captures the elegance, grace, and energy that defined the evening.
          </p>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

    </div>
  );
};

export default EventDetails;