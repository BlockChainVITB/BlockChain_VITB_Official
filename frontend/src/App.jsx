import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import { Events, Contact, Home, Profiles } from "./components/pages";

function App() {
  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </div>
  );
}

export default App;
