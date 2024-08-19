import React from 'react';
import SectionWrapper from './SectionWrapper';

const ActivitySection: React.FC = () => {
  return (
    <SectionWrapper id="activities" title="Activities">
      <p className="text-lg">
        Join a variety of exciting activities including hiking, boating, and coding workshops.
        <br />
        Make smores with Mark Moss
        <br />
        Arts & Crafts with Luke Broyles
        <br />
        Canoe with Larry Lepard
      </p>
    </SectionWrapper>
  );
};

export default ActivitySection;