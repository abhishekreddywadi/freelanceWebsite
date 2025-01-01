import React from 'react';
import { motion } from 'framer-motion';
import kathak1 from '../assets/kathak1.jpg';
import kathak2 from '../assets/kathak2.jpg';
import kathak3 from '../assets/kathak3.png';
import kathak4 from '../assets/kathak4.png';

const classLocations = [
  {
    id: 1,
    title: "Kathak Kids Class",
    location: "Sattva Senorita, Bengaluru, Karnataka 560035",
    image: kathak1,
    type: "Kids"
  },
  {
    id: 2,
    title: "Kathak Advanced Class",
    location: "Sattva Senorita, Bengaluru, Karnataka 560035",
    image: kathak2,
    type: "Advanced"
  },
  {
    id: 3,
    title: "Kathak Beginner Class",
    location: "Sattva Senorita, Bengaluru, Karnataka 560035",
    image: kathak3,
    type: "Beginner"
  },
  {
    id: 4,
    title: "Kathak Weekend Class",
    location: "Sattva Senorita, Bengaluru, Karnataka 560035",
    image: kathak4,
    type: "Weekend"
  }
];

const KathakClasses = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Kathak Classes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the perfect Kathak class for your skill level and schedule.
            </p>
          </div>

          {/* Class Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classLocations.map((classItem) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-[#E8E8E8] rounded-[2rem] overflow-hidden h-[400px]"
              >
                {/* Image Container */}
                <div className="relative">
                  <div className="rounded-[2rem] overflow-hidden flex justify-between items-center  ">
                    <img
                      src={classItem.image}
                      alt={classItem.title}
                      className="w-[60%] h-[300px] object-cover rounded-[2rem] ml-[20px] mt-[50px]"
                    />
                  </div>
                </div>

                {/* Info Box */}
                
                {/* <img src="./assets/download.png" alt="" className="w-12 h-12 mb-2  absolute bottom-0 right-0 w-[70%] " /> */}
                <div className="absolute bottom-[5rem] right-6 bg-white rounded-2xl p-6 shadow-lg max-w-[70%]">
                 
                  <h3 className="text-xl font-bold mb-1">
                    {classItem.title}
                  </h3>
                  {classItem.type === "Kids" && (
                    <p className="text-red-600 font-semibold mb-2">only for Society Members</p>
                  )}
                  <p className="text-gray-600 text-sm mb-4">{classItem.location}</p>
                  <button className="bg-purple-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-purple-800 transition-colors">
                    Get Location
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KathakClasses;
