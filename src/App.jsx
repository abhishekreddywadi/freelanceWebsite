import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import ClassSchedule from './components/ClassSchedule';
import Contact from './components/Contact';
import EventDetails from './components/eventsDetails/EventDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventDetails />} />
            <Route path="/schedule" element={<ClassSchedule />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
