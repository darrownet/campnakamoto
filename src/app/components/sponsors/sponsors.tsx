"use client";
import React, {FC} from 'react';
import Image from 'next/image'
import SectionWrapper from '../section-wrapper';
//
interface Sponsor {
  name: string;
  imageUrl: string;
  twitterUrl: string;
  websiteUrl: string;
}
//
const sponsors: Sponsor[] = [
  {
    name: 'Unchained',
    imageUrl: '/images/sponsors/logo-unchained.png',
    twitterUrl: 'https://x.com/unchainedcom',
    websiteUrl: 'https://unchained.com/'
  },
  {
    name: 'The Beef Initiative',
    imageUrl: '/images/sponsors/logo-the_beef_initiative.png',
    twitterUrl: 'https://x.com/beefinitiative',
    websiteUrl: 'https://beefinitiative.com/'
  },
  {
    name: 'Satoshi%apos;s Journal',
    imageUrl: '/images/sponsors/logo-satoshis_journal.png',
    twitterUrl: 'https://x.com/SatoshisJournal',
    websiteUrl: 'https://satoshisjournal.com/'
  },
  {
    name: 'Proof of Ink',
    imageUrl: '/images/sponsors/logo-proof_of_ink.png',
    twitterUrl: 'https://x.com/ProofofInk',
    websiteUrl: 'https://proofofink.com/'
  },
  {
    name: 'Panties For Bitcoin',
    imageUrl: '/images/sponsors/logo-panties_for_bitcoin.png',
    twitterUrl: 'https://x.com/PantiesBitcoin',
    websiteUrl: 'https://www.pantiesforbitcoin.com/'
  },
  {
    name: 'Market Disruptors',
    imageUrl: '/images/sponsors/logo-market_disruptors.png',
    twitterUrl: 'https://x.com/MDisruptors',
    websiteUrl: 'https://www.1markmoss.com/optin-615411121709722339494'
  },
  {
    name: 'Bitcoin Well',
    imageUrl: '/images/sponsors/logo-bitcoin_well.png',
    twitterUrl: 'https://x.com/TheBitcoinWell',
    websiteUrl: 'https://bitcoinwell.com/'
  },
  {
    name: 'Bitcoin Opportunity Fund',
    imageUrl: '/images/sponsors/logo-bitcoin_opportunity_fund.png',
    twitterUrl: 'https://x.com/BTCOppFund',
    websiteUrl: 'https://www.bitcoinopportunity.fund/'
  },
  {
    name: 'Bitcoin News',
    imageUrl: '/images/sponsors/logo-bitcoin_news.png',
    twitterUrl: 'https://x.com/BitcoinNewsCom',
    websiteUrl: 'https://bitcoinnews.com/'
  }
];

const TwitterX = () => <Image src="/images/twitterx.png" width={64} height={64} alt="Twitter X Logo" />;

const Sponsor: FC<{sponsor:Sponsor}> = ({sponsor}) => {
  const onSponsorClick = () => {
    window.open(sponsor.websiteUrl, '_blank');
  }
  return (
      <div className="sponsor" >
        <Image src={sponsor.imageUrl} alt={sponsor.name} onClick={onSponsorClick} width={514} height={190}  />
        <a href={sponsor.twitterUrl} target="_blank"><TwitterX/></a>
      </div>
  );
}

const Sponsors: FC = () => {
  return (
      <SectionWrapper id="sponsors" title="Sponsors / Partners">
        <ul className="sponsors">
          {sponsors.map((sponsor, index) => <li key={index}>
            <Sponsor sponsor={sponsor} />
          </li>)}
        </ul>
      </SectionWrapper>
  );
};

export default Sponsors;