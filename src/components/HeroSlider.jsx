import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import video1 from '../assets/banner-bg-CNgRaoFO.mp4';
import video2 from '../assets/banner-bg3-Daswx-sP.mp4';
import video3 from '../assets/banner-bg4-B88kzjkX.mp4';

const sliderData = [
  {
    id: 1,
    title: "Welcome to",
    subtitle: "NrityamRuchi Academy of Performing Arts",
    description: "Discover the Richness of Indian Culture and Art",
    additionalContent: "We are excited to announce the upcoming launch of NrityamRuchi Academy of Performing Arts, where tradition meets excellence in the world of Indian classical arts. Our academy is dedicated to preserving and promoting the rich heritage of Indian culture through a comprehensive range of art forms.",
    video: video3,
    link: "/classes",
    textAlignment: "right"
  },
  {
    id: 2,
    title: "What We Offer:",
    subtitle: "",
    description: "",
    bulletPoints: [
      "Classical Dance: Immerse yourself in the elegance of Bharatanatyam, Kathak, Odissi, and more. Our expert instructors will guide you through every step, from basic techniques to advanced choreography.",
      "Music: Explore the depth of Indian classical music, including vocal and instrumental training. Learn from seasoned musicians and master traditional compositions",
      "Visual Arts: Dive into the world of traditional Indian painting, sculpture, and craft. Our courses offer hands-on experience and insights into age-old artistic techniques",
      "Cultural Workshops: Participate in workshops and seminars that delve into the history, philosophy, and contemporary relevance of Indian art and culture"
    ],
    video: video2,
    link: "/classes",
    textAlignment: "left"
  },
  {
    id: 3,
    title: "What We Offer:",
    subtitle: "",
    description: "",
    bulletPoints: [
      "Classical Dance: Immerse yourself in the elegance of Bharatanatyam, Kathak, Odissi, and more. Our expert instructors will guide you through every step, from basic techniques to advanced choreography.",
      "Music: Explore the depth of Indian classical music, including vocal and instrumental training. Learn from seasoned musicians and master traditional compositions",
      "Visual Arts: Dive into the world of traditional Indian painting, sculpture, and craft. Our courses offer hands-on experience and insights into age-old artistic techniques",
      "Cultural Workshops: Participate in workshops and seminars that delve into the history, philosophy, and contemporary relevance of Indian art and culture"
    ],
    video: video1 ,
    link: "/classes",
    textAlignment: "right"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [videoRefs] = useState(Array(sliderData.length).fill(null).map(() => React.createRef()));

  useEffect(() => {
    // Start playing the current video
    if (videoRefs[currentSlide].current) {
      videoRefs[currentSlide].current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 20000); // Changed to 20 seconds

    return () => clearInterval(timer);
  }, [currentSlide, videoRefs]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 1.5, ease: "easeInOut" }
          }}
          className="absolute inset-0"
        >
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              ref={videoRefs[currentSlide]}
              key={currentSlide}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={sliderData[currentSlide].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
              <div className={`flex h-full items-center ${sliderData[currentSlide].textAlignment === "right" ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xl ${sliderData[currentSlide].textAlignment === "right" ? 'text-right' : 'text-left'}`}>
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                  >
                    {sliderData[currentSlide].title}
                  </motion.h1>
                  {sliderData[currentSlide].subtitle && (
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-xl sm:text-2xl text-pink-400 mb-6"
                    >
                      {sliderData[currentSlide].subtitle}
                    </motion.h2>
                  )}
                  {sliderData[currentSlide].description && (
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="text-lg text-gray-200 mb-8"
                    >
                      {sliderData[currentSlide].description}
                    </motion.p>
                  )}
                  {sliderData[currentSlide].additionalContent && (
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                      className="text-lg text-gray-200 mb-8"
                    >
                      {sliderData[currentSlide].additionalContent}
                    </motion.p>
                  )}
                  {sliderData[currentSlide].bulletPoints && (
                    <motion.ul
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                      className="text-sm sm:text-base text-gray-200 mb-8 space-y-3"
                    >
                      {sliderData[currentSlide].bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-white mt-1">•</span>
                          <span className="flex-1 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className={`flex ${sliderData[currentSlide].textAlignment === "right" ? 'justify-end' : 'justify-start'}`}
                  >
                    <Link
                      to={sliderData[currentSlide].link}
                      className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-20 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-pink-500 bg-opacity-80 text-white flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg ml-4 cursor-pointer pointer-events-auto focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-pink-500 bg-opacity-80 text-white flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg mr-4 cursor-pointer pointer-events-auto focus:outline-none"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all transform hover:scale-110 cursor-pointer ${
              index === currentSlide ? 'bg-pink-500 w-6' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
