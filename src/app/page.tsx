import React from 'react';
import HeroSection from './components/HeroSection';
import SpeakersSection from './components/SpeakersSection';
import ActivitySection from './components/ActivitySection';
import LocationSection from './components/LocationSection';
import DiningSection from './components/DiningSection';
import HousingSection from './components/HousingSection';
import SponsorsSection from './components/SponsorsSection';

const Home: React.FC = () => {
  return (
    <div className="camp-nakamoto-bg">
      <HeroSection />
      <LocationSection />
      <SpeakersSection />
      <ActivitySection />
      <HousingSection />
      <DiningSection />
      <SponsorsSection />
    </div>
  );
}

export default Home;
