import React from 'react';
import { motion } from 'framer-motion';

const StudentPerformances = () => {
  const videos = [
    {
      id: 1,
      title: "Kathak Performance | Shiv Stuti | Natraja | Namaami Nama",
      embedId: "your-youtube-video-id-1",
    },
    {
      id: 2,
      title: "Kathak Performance",
      embedId: "your-youtube-video-id-2",
    },
    {
      id: 3,
      title: "SHIVA TANDAV",
      embedId: "your-youtube-video-id-3",
    },
    {
      id: 4,
      title: "NRITYAM RUCHI",
      embedId: "your-youtube-video-id-4",
    },
    {
      id: 5,
      title: "SHIVA STUTI",
      embedId: "your-youtube-video-id-5",
    },
    {
      id: 6,
      title: "Devi Stuti Kathak",
      embedId: "your-youtube-video-id-6",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Text and Main Video */}
            <div className="space-y-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Watch our beginners batch students performances along with intermediate students
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Explore the delightful performances of our youngest and beginner students. These videos highlight the early stages of their artistic journey and capture the joy and enthusiasm they bring to their craft. From charming dance routines to beginner-level musical pieces, each video is a testament to their hard work and creativity.
                </p>
              </motion.div>

              {/* Featured Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full rounded-2xl overflow-hidden shadow-xl h-[250px] lg:h-[300px]"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/your-youtube-video-id-1"
                  title="Kathak Performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </motion.div>
            </div>

            {/* Right Column - Scrollable Video Grid */}
            <div className="relative">
              {/* Pink Line Accent */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-pink-500"></div>
              
              {/* Scrollable Container */}
              <div className="pr-6 max-h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {videos.slice(1).map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="aspect-video w-full rounded-xl overflow-hidden shadow-lg"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.embedId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPerformances;
