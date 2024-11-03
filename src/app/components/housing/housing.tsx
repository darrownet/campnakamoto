import React from 'react';
import SectionWrapper from '../section-wrapper';

const Housing: React.FC = () => {
  return (
      <SectionWrapper id="housing" title="Housing">
        <h3>Welcome to Camp Nakamoto: Where a Honey Badger can find peace</h3>
        <ul>
          <li><i>🏕️</i><strong>Your Cabin Awaits</strong>: Arrive to find your assigned cabin ready, with your luggage waiting for you like a blockchain waiting for its next block. Your home away from home, already set up for your adventure!</li>
          <li><i>❄️🔥</i><strong>Nature&apos;s Climate Control</strong>: Experience weather as Satoshi intended – unfiltered. Our cabins come with natural AC (that&apos;s Air Conditioning or Actual Cold, depending on the night). No thermostat, just the sweet, unpredictable whims of Mother Nature.</li>
          <li><i>🔌</i><strong>Unfinished, Yet Electrifying</strong>: Our cabins might be rustic, but they&apos;ve got electricity – perfect for charging your devices or lighting up those late-night power law vs. stock-to-flow discussions. Think of it as &apos;unfinished luxury&apos;.</li>
          <li><i>💧</i><strong>Waterfront Living</strong>: Just steps from your cabin, you&apos;ll find yourself at the water&apos;s edge. Here, the only thing more refreshing than a dip in the lake is the genuine summer camp vibe.</li>
          <li><i>🚻</i><strong>Communal Commodes</strong>: Embrace the community spirit with our common lavatories. Here, you&apos;ll share more than just tips on Bitcoin; you&apos;ll share the true camp experience.</li>
        </ul>
        <h3>Accommodation Tiers:</h3>
        <ul>
          <li><i>🔑</i><strong>Public Keys Tier – Embrace the Communal Spirit:</strong>:
            <ul>
              <li><i>Shared Cabins:</i> Experience life in a bustling six-person cabin, complete with 2 bunk beds and 2 single beds.
                It’s not just a place to sleep; it&apos;s where friendships are minted daily.
                Think of it as a public ledger, where every interaction is a transaction of camaraderie.</li>
            </ul>
          </li>
          <li><i>🔐</i><strong>Private Keys Tier – Your Personal Retreat:</strong>:
            <ul>
              <li><i>Customized Comfort:</i> Craving a bit more solitude or arriving with your own group?
                The Private Keys Tier is where your stay becomes as unique as your crypto strategy.
                Our housing desk will reach out to discuss your preferences, offering tailored accommodations to suit your quest for privacy or space.</li>
              <li><i>Upgrade Your Experience:</i> Be prepared for a personal consultation once you purchase your ticket.
                When we reach out, you can discuss options to enhance your stay, ensuring that your private space is as secure and secluded as your private keys security protocol.</li>
            </ul>
          </li>
        </ul>
        <p><strong>Dive into the rustic charm of Camp Nakamoto</strong> where every cabin is a node in our network, and every camper, a potential partner in the next big Bitcoin venture. Book your spot in this blockchain of life experiences. Remember, in the world of Camp Nakamoto, your comfort zone might be off the grid, but your experience will be fully connected.</p>
      </SectionWrapper>
  );
};

export default Housing;
