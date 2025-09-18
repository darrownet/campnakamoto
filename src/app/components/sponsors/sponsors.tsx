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
    name: 'Bitcoin Opportunity Fund',
    imageUrl: '/images/sponsors/logo-bitcoin_opportunity_fund.png',
    twitterUrl: 'https://x.com/BTCOppFund',
    websiteUrl: 'https://www.bitcoinopportunity.fund/'
  },
  {
    name: 'Market Disruptors',
    imageUrl: '/images/sponsors/logo-market_disruptors.png',
    twitterUrl: 'https://x.com/MDisruptors',
    websiteUrl: 'https://www.1markmoss.com/optin-615411121709722339494'
  },
  {
    name: 'Unchained',
    imageUrl: '/images/sponsors/logo-unchained.png',
    twitterUrl: 'https://x.com/unchainedcom',
    websiteUrl: 'https://unchained.com/'
  },
  {
    name: 'Bitcoin News',
    imageUrl: '/images/sponsors/logo-bitcoin_news.png',
    twitterUrl: 'https://x.com/BitcoinNewsCom',
    websiteUrl: 'https://bitcoinnews.com/'
  },
  {
    name: 'Bitcoin Treasuries',
    imageUrl: '/images/sponsors/logo-bitcoin_treasuries.png',
    twitterUrl: 'https://x.com/TimKotzman',
    websiteUrl: 'https://www.youtube.com/@timkotzman8925'
  },
  {
    name: 'The Beef Initiative',
    imageUrl: '/images/sponsors/logo-the_beef_initiative.png',
    twitterUrl: 'https://x.com/beefinitiative',
    websiteUrl: 'https://beefinitiative.com/'
  },
  {
    name: 'Coin Stories',
    imageUrl: '/images/sponsors/logo-coin_stories.png',
    twitterUrl: 'https://x.com/natbrunell',
    websiteUrl: 'https://podcasts.apple.com/us/podcast/coin-stories/id1569130932'
  },
  {
    name: 'Orange Pill App',
    imageUrl: '/images/sponsors/logo-orange_pill_app.png',
    twitterUrl: 'https://x.com/orangepillapp',
    websiteUrl: 'https://www.orangepillapp.com/'
  },
  {
    name: 'Zaprite',
    imageUrl: '/images/sponsors/logo-zaprite.png',
    twitterUrl: 'https://x.com/ZapriteApp',
    websiteUrl: 'https://zaprite.com/'
  },
  {
    name: 'Onramp',
    imageUrl: '/images/sponsors/logo-onramp.png',
    twitterUrl: 'https://x.com/OnrampBitcoin',
    websiteUrl: 'https://onrampbitcoin.com/'
  },
  {
    name: 'Proof of Ink',
    imageUrl: '/images/sponsors/logo-proof_of_ink.png',
    twitterUrl: 'https://x.com/ProofofInk',
    websiteUrl: 'https://proofofink.com/'
  },
  {
    name: 'Peony Lane',
    imageUrl: '/images/sponsors/logo-peony_lane.png',
    twitterUrl: 'https://x.com/peonylanewine',
    websiteUrl: 'https://www.peonylanewine.com/'
  },
  {
    name: 'Born To Be Free',
    imageUrl: '/images/sponsors/logo-born_to_be_free.png',
    twitterUrl: 'https://x.com/BornTo_BeFree',
    websiteUrl: 'https://borntobefree.store/'
  },
  {
    name: 'Events By Anders',
    imageUrl: '/images/sponsors/logo-events_by_anders.png',
    twitterUrl: 'https://x.com/Anders_',
    websiteUrl: 'https://eventsbyanders.com/'
  },
  {
    name: 'Tensile',
    imageUrl: '/images/sponsors/logo-tensile.png',
    twitterUrl: 'https://x.com/TentsileUSA',
    websiteUrl: 'https://www.tentsile.com/'
  },
  {
    name: 'Bitcoin Well',
    imageUrl: '/images/sponsors/logo-bitcoin_well.png',
    twitterUrl: 'https://x.com/TheBitcoinWell',
    websiteUrl: 'https://bitcoinwell.com/'
  },
  {
    name: 'Free Market Kids',
    imageUrl: '/images/sponsors/logo-free_market_kids.png',
    twitterUrl: 'https://x.com/freemarketkids',
    websiteUrl: 'https://www.freemarketkids.com/'
  },
  {
    name: 'Theya',
    imageUrl: '/images/sponsors/logo-theya.png',
    twitterUrl: 'https://x.com/TheyaBitcoin',
    websiteUrl: 'https://www.theya.us/'
  },
  {
    name: 'Satoshi%apos;s Journal',
    imageUrl: '/images/sponsors/logo-satoshis_journal.png',
    twitterUrl: 'https://x.com/SatoshisJournal',
    websiteUrl: 'https://satoshisjournal.com/'
  },
  {
    name: 'Panties For Bitcoin',
    imageUrl: '/images/sponsors/logo-panties_for_bitcoin.png',
    twitterUrl: 'https://x.com/PantiesBitcoin',
    websiteUrl: 'https://www.pantiesforbitcoin.com/'
  },
  {
    name: 'Bitcoin Only Events',
    imageUrl: '/images/sponsors/logo-bitcoin_only_events.png',
    twitterUrl: 'https://x.com/BitcoinEventsHQ',
    websiteUrl: 'https://bitcoinonly.events/'
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
