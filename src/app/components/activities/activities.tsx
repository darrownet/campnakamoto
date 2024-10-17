import React from 'react';
import Accordion from "@/app/components/ui/accordion-menu/accordion-menu";
import SectionWrapper from '../section-wrapper';

const sportsAndRec = [
  {
    title: 'Boating',
    content: <ul>
      <li><b>Set Sail:</b>Experience the thrill of being captain of your own vessel, even if it&apos;s just for the afternoon.</li>
      <li><b>Row, Row, Row Your Boat:</b>Learn the art of navigation without GPS. Just you, the water, and hopefully, not a mermaid.</li>
      <li><b>Team Building:</b>Nothing says teamwork like synchronized rowing to avoid becoming a buoy.</li>
    </ul>
  },
  {
    title: 'Kayaking',
    content: <ul>
      <li><b>Paddle Power:</b>Glide through water like a hot knife through butter, but with more splashing.</li>
      <li><b>Nature&apos;s Close-Up:</b>Get up close and personal with water wildlife. Remember, if it&apos;s bigger than your kayak, paddle away!</li>
      <li><b>Core Workout:</b>Who needs a gym when each paddle stroke carves your abs?</li>
    </ul>
  },
  {
    title: 'Canoeing',
    content: <ul>
      <li><b>Serenity Now:</b>Find peace in the gentle rocking of the canoe, unless you&apos;re racing, then it&apos;s all about that splash warfare.</li>
      <li><b>Partner Paddling:</b>A true test of coordination and communication, or how long before someone gets wet on purpose.</li>
      <li><b>Explore Hidden Spots:</b>Access areas only reachable by the slimmest of crafts. Adventure awaits around every bend!</li>
    </ul>
  },
  {
    title: 'Basketball',
    content: <ul>
      <li><b>Dunk or Die Tryin&apos;:</b>Whether you&apos;re shooting hoops or aiming for a slam dunk, it&apos;s all about that sweet arc.</li>
      <li><b>Team Play:</b>Learn the art of the pass, the block, and the occasional accidental elbow.</li>
      <li><b>Cardio King:</b>Run, jump, shoot, score! Your Fitbit will thank you, even if your knees don&apos;t.</li>
    </ul>
  },
  {
    title: 'Parkour',
    content: <ul>
      <li><b>Urban Jungle Gym:</b>Turn Sandy Island&apos;s camp buildings into your playground. Every wall and rail is just another obstacle to conquer.</li>
      <li><b>Leap of Faith:</b>From small jumps to big vaults, it&apos;s about overcoming fears and physical barriers. And looking cool doing it.</li>
      <li><b>Free Running:</b>Because who needs elevators when you can scale the Dining Hall?</li>
    </ul>
  },
  {
    title: 'Tennis',
    content: <ul>
      <li><b>Serve & Volley:</b>Feel the satisfaction of a perfectly timed serve that your opponent can only dream of returning.</li>
      <li><b>Singles or Doubles:</b>Play one-on-one or bring friends for a doubles match where camaraderie meets competition.</li>
      <li><b>Fashionable Fitness:</b>Sport the latest in tennis wear while getting a workout that doesn&apos;t feel like work... until the next day.</li>
    </ul>
  }
];

const Activities: React.FC = () => {
  return (
      <SectionWrapper id="activities" title="Activities">
        <h3>Forge Your Path at Camp Nakamoto</h3>
        <h4>Formal Presentations</h4>
        <ul className="list-tight">
          <li><i>🎤</i><strong>Speakers Series</strong>: Engage with the luminaries of the bitcoin community. Learn,
            question, and be inspired by industry leaders who&apos;ve been continuing down the rabbit hole longer than
            most of us.
          </li>
        </ul>
        <h3>Informal Activities</h3>
        <ul>
          <li>
            <i>🛥️</i><strong>Twilight Foliage Cocktail Hour Cruise</strong>: This isn&apos;t just a cruise; it&apos;s a
            voyage into the essence of fall and the future of finance, a toast to the artistry of nature and the
            ingenuity of Satoshi.
          </li>
          <li><i>🛣</i><strong>Bitcoin Road</strong>: Walk through &apos;Living CandyLand&apos;, but with a twist -
            it&apos;s all about Bitcoins! Get to hyperbitcoinization first!, win treats, and maybe even some sats!
          </li>
          <li><i>✂️</i><strong>Arts & Crafts</strong>: Get hands-on with leather crafting or tie-dyeing. Make something
            tangible in this digital world. Your wallet&apos;s not just for storing sats anymore!
          </li>
          <li><i>🎤</i><strong>Lightning Karaoke Event Night</strong>: Belt out bitcion-themed tunes or your favorite
            hits at lightning speed. Will your voice be the next big thing on the inscribed on the blockchain?
          </li>
          <li><i>🔥</i><strong>Bonfire Event Night</strong>: Gather &apos;round the fire for stories, s&apos;mores, and
            perhaps a spontaneous debate on the future of currency. The only thing burning here is passion for
            Satoshi&apos;s gift.
          </li>
          <li><i>🍸</i><strong>Cocktail Hour Nightly</strong>: Unwind, network, or discuss the day&apos;s gains over
            crafted cocktails. Here, &apos;mixing&apos; isn&apos;t just for <s>sats</s> drinks but for ideas
            too.
          </li>
          <li><i>💪</i><strong>Morning Cross-Fit with Larry Lepard</strong>: Start your day with a workout that&apos;s as
            intense as the Bitcoin&apos;s market moves. Larry Lepard leads the charge, ensuring your body is as fit as
            your hodling strategy.
          </li>
        </ul>
        <h3>Sports & Recreation</h3>
        <p>Each of these activities at Camp Nakamoto not only promises fun but also a chance to learn new skills, make
          friends, and perhaps discover a new passion!</p>
        <Accordion items={sportsAndRec} />
        <p>At <strong>Camp Nakamoto</strong>, every activity is a node in the network of your camp experience, linking
          you to new friends, skills, and maybe even your next big investment idea. This is your chance to dive into activities that are as
          diverse as the bitcoin&apos;s ecosystem.</p>
      </SectionWrapper>
  );
};

export default Activities;
