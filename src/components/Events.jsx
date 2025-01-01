import React from 'react';
import { motion } from 'framer-motion';
import eventImage from '../assets/namaste.jpg';

const Events = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Events</h2>
            <p className="text-gray-600 leading-relaxed mt-4">
              On November 9, 2024, NrityamRuchi Academy of Performing Arts proudly presented the first edition of Kalpatattva, a captivating evening that celebrated the fusion of tradition and innovation in classical KATHAK dance.
            </p>
          </motion.div>

          {/* Content Area with Overlap */}
          <div className="relative mt-20">
            {/* Gray Background Container */}
            <div className="bg-gray-200 p-8 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Image */}
                <div className="relative">
                  <img
                    src={eventImage}
                    alt="Kalpatattva Dance Performance"
                    className="w-full h-[400px] object-cover "
                  />
                </div>
                {/* Right Side - Empty space for overlap */}
                <div></div>
              </div>
            </div>

            {/* Overlapping Pink Content Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -top-12 right-4 lg:w-[45%] bg-pink-500  p-8 text-white shadow-xl flex flex-col min-h-[500px]"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4">Kalpatattva: The Essence of Creation</h3>
                <p className="mb-6 leading-relaxed">
                  On November 9, 2024, NrityamRuchi Academy of Performing Arts proudly presented the inaugural edition of Kalpatattva, an evening that captivated the senses and brought to life a fusion of classical dance and contemporary creativity. Held at JSS Educational Complex in Bengaluru, the event was a journey through rhythm, expression, and storytelling, leaving an indelible mark on all who attended.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Event Highlights</h4>
                  <p className="leading-relaxed">
                    Step into the magic of Kalpatattva through our exclusive photo gallery, where each image captures the elegance, grace, and energy that defined the evening.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-purple-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-800 transition-colors shadow-lg"
                >
                  Click Here For More Information
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
