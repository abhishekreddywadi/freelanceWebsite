import React from 'react';
import TeachingTechnique from './TeachingTechnique';
import StudentPerformances from './StudentPerformances';
import Events from './Events';
import Sponsors from './Sponsors';
import KathakClasses from './KathakClasses';
import Locations from './Locations';
import ClassSchedule from './ClassSchedule';
import ImageGallery from './ImageGallery';
import Contact from './Contact';
import Footer from './Footer';
import HeroSlider from './HeroSlider';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSlider />

      {/* Teaching Technique Section */}
      <TeachingTechnique />

      {/* Student Performances Section */}
      <StudentPerformances />
      
   

      {/* Events Section */}
      <Events />
         {/* Sponsors Section */}
         <Sponsors />

      {/* Kathak Classes Section */}
      <KathakClasses />

      {/* Class Schedule Section */}
      <ClassSchedule />

      {/* Image Gallery Section */}
      <ImageGallery />

      {/* Locations Section */}
      {/* <Locations /> */}

      {/* Contact Section */}
      <Contact />


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
