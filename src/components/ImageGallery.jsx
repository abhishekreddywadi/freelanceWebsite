import React from 'react';
import { motion } from 'framer-motion';
import kathak1 from '../assets/kathak1.jpg';
import kathak2 from '../assets/kathak2.jpg';
import kathak3 from '../assets/kathak3.png';
import kathak4 from '../assets/kathak4.png';

const galleryImages = {
  leftSection: [
    {
      id: 1,
      src: kathak1,
      date: '21 July 2024'
    },
    {
      id: 2,
      src: kathak2,
      date: '21 July 2024'
    },
    {
      id: 3,
      src: kathak3,
      date: '21 July 2024'
    },
    {
      id: 4,
      src: kathak4,
      date: '21 July 2024'
    }
  ],
  rightSection: [
    {
      id: 5,
      src: kathak1,
      date: '21 July 2024'
    },
    {
      id: 6,
      src: kathak2,
      date: '21 July 2024'
    },
    {
      id: 7,
      src: kathak3,
      date: '21 July 2024'
    },
    {
      id: 8,
      src: kathak4,
      date: '21 July 2024'
    }
  ]
};

const ImageGallery = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 pb-8"
          >
            Image Gallery
          </motion.h2>

          <div className="relative flex flex-col lg:flex-row gap-8">
            {/* Left Section */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {galleryImages.leftSection.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={`Gallery image ${image.id}`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30">
                      <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
                        {image.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 lg:-mt-16">
              <div className="grid grid-cols-2 gap-6">
                {galleryImages.rightSection.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={`Gallery image ${image.id}`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-10" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
