import React from 'react';
import HeroSection from './components/HeroSection';
import SpeakersSection from './components/SpeakersSection';
import ActivitySection from './components/ActivitySection';
import LocationSection from './components/LocationSection';
import DiningSection from './components/DiningSection';
import HousingSection from './components/HousingSection';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <LocationSection />
      <SpeakersSection />
      <ActivitySection />
      <HousingSection />
      <DiningSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}

export default Home;
