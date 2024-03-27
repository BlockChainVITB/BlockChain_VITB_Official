import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/pages/HeroSection';
import { Events, Contact, Home, Profiles } from "./components/pages";
import OurMotive from './components/OurMotive';
import TeamDetails from './components/TeamDetails';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
      <OurMotive />
      <TeamDetails/>
      <Footer />
    </div>
  );
}

export default App;
