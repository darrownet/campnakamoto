"use client";
import React, {FC} from 'react';
import SectionWrapper from './SectionWrapper';
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

const TwitterX = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9
          389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
  </svg>);
};

const WebLink = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4
          44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5
          31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6
          7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5
          148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6
          1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9
          31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377
          132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
  </svg>);
};

const Sponsor: FC<{sponsor:Sponsor}> = ({sponsor}) => {
  const onSponsorClick = () => {
    window.open(sponsor.websiteUrl, '_blank');
  }
  return (
      <div className="sponsor" >
        <img src={sponsor.imageUrl} alt={sponsor.name} onClick={onSponsorClick} />
        <a href={sponsor.twitterUrl} target="_blank"><TwitterX/></a>
      </div>
  );
}

const SponsorsSection: FC = () => {
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

export default SponsorsSection;