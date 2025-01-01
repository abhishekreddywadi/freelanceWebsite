import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import log3 from '../assets/log3.png';
import logo4 from '../assets/logo4.png';

const SponsorCard = ({ sponsor, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
  >
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center text-center space-y-4 group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full max-w-[200px] aspect-square flex items-center justify-center p-6 bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300"
      >
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all"
        />
      </motion.div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900">{sponsor.name}</h3>
        {sponsor.subtext && (
          <p className="text-sm text-gray-600">{sponsor.subtext}</p>
        )}
        {sponsor.description && (
          <p className="text-sm text-gray-500 mt-2">{sponsor.description}</p>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "Strong Nation",
      subtext: "by Masterfit",
      description: "Official Fitness Partner",
      logo: logo1
    },
    {
      id: 2,
      name: "Latibo",
      description: "Dance Apparel Partner",
      logo: logo2
    },
    {
      id: 3,
      name: "Master Zone",
      description: "Technical Partner",
      logo: log3
    },
    {
      id: 4,
      name: "Bolly Fit",
      description: "Event Partner",
      logo: logo4
    },
   
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     
    

        {/* Auto-scrolling Sponsor Section */}
        <div className="relative mt-16">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                }
              }}
            >
              {duplicatedSponsors.map((sponsor, index) => (
                <div
                  key={`${sponsor.id}-${index}`}
                  className="flex-shrink-0 w-48 flex flex-col items-center gap-3"
                >
                  <div className="h-24 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter hover:brightness-75 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs font-medium text-gray-800">{sponsor.name}</h3>
                    {sponsor.subtext && (
                      <p className="text-xs text-gray-600">{sponsor.subtext}</p>
                    )}
                    <p className="text-xs text-pink-500">{sponsor.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        
        
      </div>
    </section>
  );
};

export default Sponsors;
