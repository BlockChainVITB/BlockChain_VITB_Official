import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { Events, Contact, Home, Profiles } from "./components/pages";
import OurMotive from "./components/OurMotive";
import RecentEvents from "./components/RecentEvents";
import TeamDetails from "./components/TeamDetails";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Divider/>
      <OurMotive />
      <Divider/>
      <RecentEvents />
      <Divider/>
      <TeamDetails />

      <Footer />
    </div>
  );
}

export default App;
