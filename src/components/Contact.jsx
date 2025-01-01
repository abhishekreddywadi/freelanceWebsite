import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold  mb-16 ml-[200px] "
          >
            Contact
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Contact Info */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6 flex flex-col items-center ">
                {/* Location Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 shadow-md flex items-center space-x-4 h-[120px] max-w-[300px]"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-pink-50 text-pink-500 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Bangalore, Karnataka</div>
                    <div className="text-gray-500 text-sm">Head Office</div>
                  </div>
                </motion.div>

                {/* Email Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 shadow-md flex items-center space-x-4 h-[120px] max-w-[300px]"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-pink-50 text-pink-500 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">support@nrityamruchi.com</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 shadow-md flex items-center space-x-4 h-[120px] max-w-[300px]"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-pink-50 text-pink-500 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">info@NrityamRuchi.com</div>
                  </div>
                </motion.div>
              </div>

              {/* Social Follow */}
              <div className="mt-8 flex flex-col items-center ">
                <h3 className="text-xl font-semibold mb-4">Social Follow</h3>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-pink-50 text-pink-500 rounded-full hover:bg-pink-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Right Section - Map and Form */}
            <div className="space-y-8">
              {/* Map */}
              <div className="w-full h-[300px] shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965966411096!2d77.5800296!3d12.9277878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b196c8b8b7%3A0x6d87b56c0d55cfb!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1672491489722!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 shadow-md">
                <h3 className="text-2xl font-semibold mb-6">
                  How Can I <span className="text-pink-500">Help You</span>?
                </h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-2 border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#c95c90] text-white py-3 px-6 hover:bg-[#c95c90]/90 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
