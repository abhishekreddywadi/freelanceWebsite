import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterSection = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="w-full"
  >
    <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
    {children}
  </motion.div>
);

const Footer = () => {
  const [expandedDay, setExpandedDay] = useState(null);

  const businessHours = [
    { day: 'Sunday', hours: ['9:30 am - 4:30 pm'], status: 'Limited Hours' },
    { day: 'Monday', hours: ['7:30 am - 11:30 am'], status: 'Morning Only' },
    { day: 'Tuesday', hours: ['7:30 am - 11:30 am', '4:30 pm - 9:00 pm'], status: 'Full Day' },
    { day: 'Wednesday', hours: ['7:30 am - 11:30 am', '4:30 pm - 9:00 pm'], status: 'Full Day' },
    { day: 'Thursday', hours: ['7:30 am - 11:30 am', '4:30 pm - 9:00 pm'], status: 'Full Day' },
    { day: 'Friday', hours: ['7:30 am - 11:30 am', '4:30 pm - 9:00 pm'], status: 'Full Day' },
    { day: 'Saturday', hours: ['9:30 am - 4:30 pm'], status: 'Limited Hours' },
  ];

  const quickLinks = [
    { name: 'Gallery', path: '/gallery', icon: '🖼️' },
    { name: 'Events', path: '/events', icon: '📅' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
    { name: 'Classes', path: '/classes', icon: '📚' },
  ];

  const usefulLinks = [
    { name: 'FAQs', path: '/faqs', icon: '❓' },
    { name: 'Privacy Policy', path: '/privacy', icon: '🔒' },
    { name: 'Terms of Service', path: '/terms', icon: '📜' },
    { name: 'Contact Support', path: '/support', icon: '💬' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '👥', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Business Hours Section */}
        <div className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Business Hours</h2>
            <p className="text-gray-600 mb-6">Visit us during these hours to experience the art of dance</p>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {businessHours.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-h-[160px]"
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              >
                <div className="p-4 cursor-pointer h-full flex flex-col items-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      day.status === 'Full Day' ? 'bg-green-100 text-green-600' :
                      day.status === 'Limited Hours' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-pink-100 text-pink-600'
                    }`}>
                      🕒
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm">{day.day}</h3>
                  <AnimatePresence>
                    {(expandedDay === day.day || day.hours.length === 1) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1 text-center"
                      >
                        {day.hours.map((hour, idx) => (
                          <p key={idx} className="text-xs text-gray-600 whitespace-nowrap">{hour}</p>
                        ))}
                        <p className="text-[10px] text-gray-500 mt-2">{day.status}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!expandedDay && day.hours.length > 1 && (
                    <p className="text-xs text-gray-600 mt-auto">Click to view hours</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Section */}
            <FooterSection title="About Us">
              <div className="space-y-4">
                <img src="/logo.png" alt="NrityamRuchi Logo" className="h-16 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Welcome to Nrityam Ruchi Academy, where we blend tradition with innovation in Indian classical dance. 
                  Join us in our journey of artistic excellence and cultural preservation.
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
                    >
                      <span className="text-lg" title={social.name}>{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </FooterSection>

            {/* Quick Links Section */}
            <FooterSection title="Quick Links" delay={0.1}>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-pink-500">{link.icon}</span>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </FooterSection>

            {/* Useful Links Section */}
            <FooterSection title="Useful Links" delay={0.2}>
              <ul className="space-y-2">
                {usefulLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-pink-500">{link.icon}</span>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </FooterSection>

            {/* Contact Section */}
            <FooterSection title="Contact Us" delay={0.3}>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-pink-500 mt-1">📍</span>
                  <div>
                    <p className="text-gray-800 font-medium">Our Location</p>
                    <p className="text-gray-600 text-sm">Bangalore, Karnataka, India</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-pink-500 mt-1">📧</span>
                  <div>
                    <p className="text-gray-800 font-medium">Email Us</p>
                    <a href="mailto:info@NrityamRuchi.com" className="text-gray-600 text-sm hover:text-pink-500 transition-colors">
                      info@NrityamRuchi.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-pink-500 mt-1">📱</span>
                  <div>
                    <p className="text-gray-800 font-medium">Call Us</p>
                    <a href="tel:+911234567890" className="text-gray-600 text-sm hover:text-pink-500 transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </li>
              </ul>
            </FooterSection>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm"
            >
              &copy; 2024 NrityamRuchi. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-4 text-sm"
            >
              <Link to="/privacy" className="text-gray-600 hover:text-pink-500 transition-colors">Privacy Policy</Link>
              <span className="text-gray-300">|</span>
              <Link to="/terms" className="text-gray-600 hover:text-pink-500 transition-colors">Terms of Service</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
