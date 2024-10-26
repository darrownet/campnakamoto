import React, {FC} from "react";
import SectionWrapper from "@/app/components/section-wrapper";
import Accordion from "@/app/components/ui/accordion-menu/accordion-menu";

const faqsData = [
  {
    title: 'What is Camp Nakamoto?',
    content: <p>Camp Nakamoto is where the blockchain meets the great outdoors! A unique blend of a tech conference and summer camp for Bitcoin enthusiasts, where you can hash out ideas by the campfire.</p>
  },
  {
    title: 'Can I pay for Camp Nakamoto with Bitcoin?',
    content: <p>Yes, we embrace the future of currency! You can settle your camp fees with Bitcoin, and we might even have a special workshop on how to do it securely.</p>
  },
  {
    title: 'What should I bring to Camp Nakamoto?',
    content: <p>Bring your camping gear, a laptop for coding sessions, and an open ledger... I mean, mind, for learning. Don&apos; forget your hardware wallet; it&apos;s the new Swiss Army knife here!</p>
  },
  {
    title: 'Are there any physical activities, or is it all about Bitcoin?',
    content: <p>Balance in all things! Expect hiking, canoeing, and perhaps a treasure hunt where the treasure is, of course, a puzzle leading to a Bitcoin wallet.</p>
  },
  {
    title: 'Will there be Wi-Fi at Camp Nakamoto?',
    content: <p>Yes, but we encourage digital detox sessions. However, for those critical blockchain updates or emergency trades, Wi-Fi will be available. Remember, we&apos;re connecting with nature and the network.</p>
  },
  {
    title: 'Is Camp Nakamoto suitable for Bitcoin beginners?',
    content: <p>Absolutely! Whether you&apos;ve just learned what a blockchain is or you&apos;re Satoshi&apos;s neighbor, our workshops range from &apos;Bitcoin 101&apos; to &apos;Advanced Cryptography&apos;.</p>
  },
  {
    title: 'What\'s the policy on discussing other cryptocurrencies?',
    content: <p>While our heart beats for Bitcoin, we&apos;re open to all decentralized discussions. Just remember, any altcoin talk might be met with friendly banter or a playful &apos;block&apos; from hardcore Bitcoiners.</p>
  },
  {
    title: 'How do we handle bear markets at camp?',
    content: <p>With bear-proof containers for our food and bear-proof strategies for our portfolios. Seriously, we&apos;ll have sessions on market psychology, but remember, at Camp Nakamoto, every dip is just a setup for the next campfire story.</p>
  },
  {
    title: 'Can I mine Bitcoin at the camp?',
    content: <p>While we appreciate the enthusiasm, we&apos;re more about mining minds than actual mining. However, setting up a mining rig as a demonstration might just win you the camp&apos;s innovation award.</p>
  },
  {
    title: 'What if it rains?',
    content: <p>We&apos;ll have indoor coding sessions, blockchain board games, and perhaps a workshop on &apos;The Economics of Weather and Bitcoin Volatility&apos;.</p>
  },
  {
    title: 'Is there a \'Camp Nakamoto\' token or NFT?',
    content: <p>Not yet, but suggesting it might just make you the camp&apos;s favorite. Who knows? By next season, we might have our own camp cryptocurrency, &apos;NakamotoCoin&apos;.</p>
  },
  {
    title: 'What\'s the \'Twilight Foliage Cocktail Hour Cruise\'?',
    content: <p>An elegant evening where we admire the fall colors from Lake Winnipesaukee, sipping on cocktails, discussing block sizes, and debating whether the sunset&apos;s beauty can be outdone by a well-executed smart contract.</p>
  }
];

const Faqs: FC = () => {
  return (
      <SectionWrapper id="faqs" title="FAQs">
        <Accordion items={faqsData} />
      </SectionWrapper>
  );
};

export default Faqs;