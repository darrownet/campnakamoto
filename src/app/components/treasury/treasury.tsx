"use client";
import React, {FC} from 'react';
import Image from 'next/image'
import SectionWrapper from '../section-wrapper';

const Treasury: FC = () => {
  return (
      <SectionWrapper id="treasury" title="" hideTitle={true}>
        <div className="flex justify-between items-center">
          <span className="font-bold">Camp Nakamoto is a proud supporter of the Bitcoin Treasury Companies.</span>
          <span>
           <Image
               src="/images/bitcoin_treasury_logo.png"
               width={120}
               height={120}
               alt="Bitcoin Treasury Logo"
           />
        </span>
        </div>
      </SectionWrapper>
  );
};

export default Treasury;
