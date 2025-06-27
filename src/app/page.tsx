import React from 'react';
import Activities from "@/app/components/activities/activities";
import Dining from "@/app/components/dining/dining";
import Housing from "@/app/components/housing/housing";
import Location from "@/app/components/location/location";
import Speakers from "@/app/components/speakers/speakers";
import Faqs from "@/app/components/faqs/faqs";
import Sponsors from "@/app/components/sponsors/sponsors";
import Treasury from "@/app/components/treasury/treasury";

import Hero from "@/app/components/hero/hero";

const Home: React.FC = () => {
  return (
    <div className="camp-nakamoto">
      <Hero/>
      <Location/>
      <Speakers/>
      <Activities/>
      <Housing/>
      <Dining/>
      <Faqs/>
      <Sponsors/>
      <Treasury/>
    </div>
  );
}

export default Home;
