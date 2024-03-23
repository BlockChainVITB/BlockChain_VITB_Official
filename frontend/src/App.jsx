import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Events, Contact, Home, Profiles } from "./components/pages";
import HeroSection from './components/pages/HeroSection';

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
      <Footer />
    </div>
  );
}

export default App;
