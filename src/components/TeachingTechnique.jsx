import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import kathak3 from '../assets/kathak3.png';

const TeachingTechnique = () => {
  const [activeStep, setActiveStep] = useState(3);

  const steps = [
    {
      id: 1,
      title: "Foundation and Basics",
      description: "Begin your journey with foundational elements of classical dance. Learn essential postures, hand gestures (mudras), and basic footwork patterns that form the building blocks of Indian classical dance.",
      features: ["Dance Practice", "Dance Growth", "Dance Training", "Dance Improvement"]
    },
    {
      id: 2,
      title: "Rhythm and Coordination",
      description: "In this step, students focus on learning core choreography. This includes traditional compositions and sequences specific to the style of dance being taught. Emphasis is placed on mastering these routines to build technical proficiency and performance skills.",
      features: ["Dance Practice", "Dance Growth", "Dance Training", "Dance Improvement"]
    },
    {
      id: 3,
      title: "Expression and Refinement",
      description: " Expression and Refinement In the final step, students focus on refining their techniques and enhancing their expressive abilities. This involves practicing emotional expression, intricate footwork, and advanced choreography. Students are encouraged to interpret and convey the stories and emotions behind the dance.",
      features: ["Dance Practice", "Dance Training", "Dance Growth", "Dance Improvement"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-pink-500 text-lg md:text-xl font-medium mb-2">Our Teaching Technique</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">A Journey Through Dance</h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Step Buttons */}
              <div className="flex flex-wrap gap-4">
                {steps.map((step) => (
                  <motion.button
                    key={step.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveStep(step.id)}
                    className={`px-12 py-4 rounded-full text-base md:text-lg transition-all duration-300 w-full sm:w-auto min-w-[180px] ${
                      activeStep === step.id
                        ? "bg-pink-500 text-white shadow-lg"
                        : "bg-white text-gray-600 border-2 border-gray-200 hover:border-pink-200"
                    }`}
                  >
                    Step {step.id}
                  </motion.button>
                ))}
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="prose prose-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {steps[activeStep - 1].description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {steps[activeStep - 1].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl lg:mt-0 mt-8"
            >
              <img
                src={kathak3}
                alt="Classical Dance Performance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-900 mix-blend-multiply rounded-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingTechnique;
