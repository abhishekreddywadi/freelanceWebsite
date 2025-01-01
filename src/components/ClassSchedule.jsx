import React, { useState } from 'react';
import { motion } from 'framer-motion';
import kioskGif from '../assets/nr kiosk.gif';

const DayButton = ({ day, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive 
        ? 'bg-pink-500 text-white' 
        : 'border border-gray-200 text-gray-600 hover:border-pink-500'
    }`}
  >
    {day}
  </button>
);

const ClassSchedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  const scheduleDataByDay = {
    Monday: [
      {
        time: '7:00 am To 08:30 am',
        class: 'Yoga Class',
        instructor: '🔒'
      },
      {
        time: '09:00 am To 10:00 am',
        class: 'Yoga Class',
        instructor: '🔒'
      },
      {
        time: '4:30 pm To 5:30 pm',
        class: 'Kids Bollywood free style dance',
        instructor: '🔒'
      }
      ,
      {
        time: '7:30 pm To 8:30 pm',
        class: 'Bollywood freestyle for teenagers and adults',
        instructor: '🔒'
      }
    ],
    Tuesday: [
      {
        time: '5:30 pm To 6:30 pm',
        class: 'Bharatnatyam',
        instructor: 'By Miss Manasa Ji'
      },
      {
        time: '6:30 pm To 7:30 pm',
        class: 'kathak',
        instructor: 'By Ruchi Doshi ji'
      }
      ,
      {
        time: '4:30 pm To 5:30 pm',
        class: 'Kids Bollywood free style dance',
        instructor: '🔒'
      }
      ,
      {
        time: '7:30 pm To 8:30 pm',
        class: 'Bollywood freestyle for teenagers and adults',
        instructor: '🔒'
      }
    ],
    Wednesday: [
      {
        time: '7:30 am To 8:30 am',
        class: 'Yoga',
        instructor: '🔒'
      },
      {
        time: '9:00 am To 10:00 am',
        class: 'Yoga',
        instructor: '🔒'
      },
      {
        time: '4:30 pm To 5:30 pm',
        class: 'Kids Bollywood free style dance',
        instructor: '🔒'
      }
    ],
    Thursday: [
      {
        time: '5:30 pm To 6:30 pm',
        class: 'Bharatnatyam',
        instructor: 'By Miss Manasa Ji'
      },
      {
        time: '6:30 pm To 7:30 pm',
        class: 'kathak',
        instructor: 'By Ruchi Doshi ji'
      },
      {
        time: '4:30 pm To 5:30 pm',
        class: 'Kids Bollywood free style dance',
        instructor: '🔒'
      },
      {
        time: '7:30 pm To 8:30 pm',
        class: 'Bollywood freestyle for teenagers and adults',
        instructor: '🔒'
      },
    ],
    Friday: [
      {
        time: '7:30 am To 8:30 am',
        class: 'Yoga',
        instructor: '🔒'
      },
      {
        time: '9:00 am To 10:00am',
        class: 'Yoga',
        instructor: '🔒'
      },
      {
        time: '4:30 pm To 5:30 pm',
        class: 'Kids Bollywood free style dance',
        instructor: '🔒'
      },
      {
        time: '7:30 pm To 8:30 pm',
        class: 'Bollywood freestyle for teenagers and adults',
        instructor: '🔒'
      },
    ],
    // Saturday: [
    //   {
    //     time: '10:00 am To 11:30am',
    //     class: 'Weekend Special',
    //     instructor: 'Team'
    //   }
    // ]
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-pink-500 font-medium mb-4">Class Schedule</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Click Our Class Schedule and Join With Us
            </h2>
          </motion.div>

          {/* Schedule Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Days Column */}
            <div className="lg:col-span-3">
              <div className="space-y-3 border-2 border-pink-300 p-4 rounded-lg">
                {Object.keys(scheduleDataByDay).map((day) => (
                  <DayButton
                    key={day}
                    day={day}
                    isActive={activeDay === day}
                    onClick={() => setActiveDay(day)}
                  />
                ))}
              </div>
            </div>

            {/* Schedule Details */}
            <div className="lg:col-span-9">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-pink-200 rounded-lg">
                  <thead>
                    <tr className="bg-pink-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-pink-600">Time</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-pink-600">Class</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-pink-600">Instructor</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-pink-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-pink-100">
                    {scheduleDataByDay[activeDay].map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="hover:bg-pink-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="text-gray-600 text-sm">{item.time}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">{item.class}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">{item.instructor}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-pink-500 px-6 py-2 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 text-sm"
                          >
                            Join Now
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-12 flex justify-center mt-8">
              <motion.img 
                src={kioskGif} 
                alt="NR Kiosk Animation" 
                className="w-[80vw] h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
