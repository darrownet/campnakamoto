"use client";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import SpeakerCard from "./speaker-card";
import Modal from "./modal";
import SectionWrapper from '../section-wrapper';
import BuyNow from "@/app/components/buy-now-button";

interface Speaker {
  name: string;
  title: string;
  twitterHandle: string;
  imageUrl: string;
  description: string;
  stats: string;
  active: boolean;
}

const musicians: Speaker[] = [
  {
    name: "Robbie P",
    title: "",
    twitterHandle: "@robbiep808x",
    imageUrl: "/images/speakers/robbie_p.jpg",
    description: "Robbie P is an innovative musician and speaker from Australia who seamlessly blends the worlds of Bitcoin and music. His unique performance offers an artistic perspective on Bitcoin. Catch him at camp for a one-of-a-kind rap show featuring music from his upcoming project, Dread Pirate Robbie.",
    stats: "",
    active: true
  },
  {
    name: "Chris Wenske",
    title: "",
    twitterHandle: "@JondoMedia",
    imageUrl: "/images/speakers/chris_wenske.jpg",
    description: "Chris Wenske is a Kansas City based organizer, entrepreneur, and musician with a passion for Bitcoin, community building, and creative projects. He leads local Bitcoin meetups, produces large scale events like the Kansas City Bitcoin Summit and Block Party, and develops innovative ideas that merge technology, education, and financial freedom. With experience in media production, marketing, and business strategy, Chris brings people together to collaborate, learn, and build toward the future all while keeping music as a core part of his identity and expression.",
    stats: "",
    active: true
  }
];

const remoteSpeakers: Speaker[] = [
  {
    name: "Natalie Brunell",
    title: "",
    twitterHandle: "@natbrunell",
    imageUrl: "/images/speakers/natalie_brunell.jpg",
    description: "Natalie Brunell journalist, podcast host, and Bitcoin educator who was born in Lodz, Poland, and immigrated to the U.S. at age of five. She has an extensive background in investigative journalism, having worked as a senior correspondent for Spectrum News and a national correspondent for ABC News. Natalie is also known for her work in the Bitcoin space, hosting the \"Coin Stories\" podcast where she delves into Bitcoin and economic topics.",
    stats: "",
    active: true
  },
  {
    name: "James Lavish",
    title: "",
    twitterHandle: "@jameslavish",
    imageUrl: "/images/speakers/james_lavish.jpg",
    description: "James Lavish, CFA, isn't your average financial guru; he's a reformed hedge-fund manager, an ex-Yale hockey player, and now, a beacon of financial wisdom in a world where money seems to evaporate faster than ice in a microwave. With over 25 years navigating the shark-infested waters of institutional investing, James has dodged more financial icebergs than the Titanic.",
    stats: "",
    active: true
  },
  {
    name: "Greg Foss",
    title: "",
    twitterHandle: "@FossGregfoss",
    imageUrl: "/images/speakers/greg_foss.jpg",
    description: "35+ years in risk management. McGill & Cornell alum. Bitcoin advocate, viewing it as a critical IQ test in risk strategy. Believes all fiats are \"melting ice cubes.\" Passionate about freedom and family. #forthekids" +
        "\n",
    stats: "",
    active: true
  },
  {
    name: "Ben Justman",
    title: "",
    twitterHandle: "@benjustman",
    imageUrl: "/images/speakers/ben_justman.jpg",
    description: "Ben Justman, from Papillion, Nebraska, is an entrepreneur and vocal Bitcoin enthusiast. In 2019, he launched Peony Lane Wine, a boutique winery that quickly gained recognition, earning awards for its inaugural wine release. A fervent advocate for cryptocurrency, Justman actively promotes Bitcoin emphasizing its potential to revolutionize finance." +
        "\n" +
        "\n",
    stats: "",
    active: true
  },
  {
    name: "Rob Wallace",
    title: "",
    twitterHandle: "@BitcoinNewsCom",
    imageUrl: "/images/speakers/rob_wallace.jpg",
    description: "Rob Wallace is the Co-Founder of Bitcoin News, a media platform focused on delivering accurate and insightful updates about Bitcoin and the Lightning Network. He hosts interviews on Bitcoin News’ YouTube channel, engaging with prominent figures in the Bitcoin ecosystem to discuss its role in the evolving financial landscape.",
    stats: "",
    active: true
  },
  {
    name: "Seb Bunney",
    title: "",
    twitterHandle: "@sebbunney",
    imageUrl: "/images/speakers/seb_bunney.jpg",
    description: "Seb Bunney is a Bitcoin educator, author, and co-founder of Looking Glass Education, a platform focused on financial literacy. He's authored The Hidden Cost of Money, and co-authored B is for Bitcoin. As Chief Information Officer at Block Rewards, he integrates Bitcoin into payroll and benefits. A contributor to Bitcoin Magazine, he advocates for Bitcoin as a solution to fiat system flaws, emphasizing decentralization and sound money. His newsletter, The Qi of Self-Sovereignty, delves into aligning money with personal values.",
    stats: "",
    active: true
  },
  {
    name: "",
    title: "",
    twitterHandle: "",
    imageUrl: "",
    description: "",
    stats: "",
    active: false
  }
];

const speakers: Speaker[] = [
  {
    name: "Mark Moss",
    title: "",
    twitterHandle: "@1MarkMoss",
    imageUrl: "/images/speakers/mark_moss.jpg",
    description: "Mark Moss is your go-to guide in the wild world of finance, with a special twist of Bitcoin advocacy. From his home base in San Clemente, California, Mark has navigated the dot-com bubble, real estate, and now rides the Bitcoin wave, sharing his journey through \"The Mark Moss Show\" and Market Disruptors on YouTube. He's not just about understanding the crypto-verse; he's about changing how you think about money.",
    stats: "",
    active: true
  },
  {
    name: "Larry Lepard",
    title: "",
    twitterHandle: "@LawrenceLepard",
    imageUrl: "/images/speakers/larry_lepard.jpg",
    description: "With over 38 years in investment management, Larry has pivoted from traditional venture capital to become a stalwart advocate for gold and Bitcoin. His firm, Equity Management Associates, stands as a beacon for those seeking refuge from inflation through investments in precious metals and bitcoin related investments. Larry's experience spans from the early days of the internet boom to now, where he's a vocal proponent of Bitcoin's role in a sound money future.",
    stats: "",
    active: true
  },
  {
    name: "Luke Broyles",
    title: "",
    twitterHandle: "@luke_broyles",
    imageUrl: "/images/speakers/luke_broyels.jpg",
    description: "Luke has carved a niche in the Bitcoin community not just as an enthusiast but as a marketing maestro. His ability to articulate Bitcoin's value proposition in a way that resonates with both newcomers and seasoned investors showcases his marketing acumen. Luke uses his platform to demystify Bitcoin, making it not just a financial asset but a cultural phenomenon, driving adoption through compelling narratives and insights.",
    stats: "",
    active: true
  },
  {
    name: "Joe Consorti",
    title: "",
    twitterHandle: "@JoeConsorti",
    imageUrl: "/images/speakers/joe_consorti.jpg",
    description: "A young financial whiz, he graduated with a BSBA in Finance from UVM in 2022. Joe, known for his Bitcoin market analysis was the Institutional Lead at The Bitcoin Layer. Currently Joe serves as the Head of Growth at Theya Bitcoin. His insights are often featured in Bitcoin Magazine, where he simplifies the complex world of crypto with a touch of humor. As he is an Eagle Scout, Joe combines traditional values with cutting-edge financial acumen.",
    stats: "",
    active: true
  },
  {
    name: "Adam O'Brien",
    title: "",
    twitterHandle: "@adamobrien_",
    imageUrl: "/images/speakers/adam_obrien.jpg",
    description: "Adam is the visionary behind @TheBitcoinWell, where he's not just banking on Bitcoin but also on making it accessible to everyone, kind of like a digital Johnny Appleseed for a new generation and a new economy. He's been navigating the choppy waters of digital currency since 2013, turning his passion for tech and finance into a mission to re-bank the de-banked.",
    stats: "",
    active: true
  },
  {
    name: "BJ Dichter",
    title: "",
    twitterHandle: "@BJdichter",
    imageUrl: "/images/speakers/bj_dichter.jpg",
    description: "BJ Dichter, known for his leadership in the Canadian Truckers Convoy, brings a perspective on freedom and activism to the Bitcoin space. His involvement in one of the most significant protests against government overreach highlights his commitment to individual liberties. BJ sees Bitcoin not just as a financial tool but as a means for economic freedom, aligning with his activism for personal rights.",
    stats: "",
    active: true
  },
  {
    name: "Dave Foley",
    title: "",
    twitterHandle: "@DFoleyBOF",
    imageUrl: "/images/speakers/dave_foley.jpg",
    description: "An investment partner with Lawrence Lepard at Equity Management Associates, David Foley is deeply involved in strategies focusing on Bitcoin and precious metals. Alongside James Lavish, David co-manages the Bitcoin Opportunity Fund, navigating both public and private sectors of Bitcoin investment. His approach combines a keen understanding of market trends with a strategic investment mindset, pioneering the future of money through Bitcoin.",
    stats: "",
    active: true
  },
  {
    name: "Michelle Weekley",
    title: "",
    twitterHandle: "@michelleweekley",
    imageUrl: "/images/speakers/michelle_weekley.jpg",
    description: "Michelle has navigated a life trajectory that's as colorful as it is profound. With a background in computer science, Michelle spent over 15 years diving deep into the world of early-stage tech startups. Her adventures took her across the globe, from living in the UAE to working in China, where she dipped her toes in Foreign Direct Investment. It was there, amidst the global landscape, she encountered firsthand the corruption that eventually steered her towards the liberating world of Bitcoin in 2016.",
    stats: "",
    active: true
  },
  {
    name: "Texas Slim",
    title: "",
    twitterHandle: "@modernTman",
    imageUrl: "/images/speakers/texas_slim.jpg",
    description: "Here comes Texas Slim, a man who's as Texan as they come, with a name that sounds like he could've been a character in a spaghetti western, but instead, he's riding the wild plains of the modern food industry. Born and bred in the Lone Star State, Texas Slim has taken the cowboy ethos into the 21st century, lassoing the world of nutrition, agriculture, and Bitcoin with the finesse of a rodeo champion.",
    stats: "",
    active: true
  },
  {
    name: "DJ Valerie B LOVE",
    title: "",
    twitterHandle: "@djvalerieblove",
    imageUrl: "/images/speakers/dj_valerie.jpg",
    description: "DJ Valerie B LOVE is a multifaceted entrepreneur, executive coach, and DJ who founded the 11x LOVE Method to help exhausted executives find harmony across all life areas. She hosts the \"DJ Valerie B LOVE Show,\" a podcast dedicated to truth-seekers and freedom-lovers, focusing on Bitcoin, peace, and personal growth. With her background in music, Valerie has performed globally at events like Burning Man and the Olympics.",
    stats: "",
    active: true
  },
  {
    name: "Anders Jensen",
    title: "",
    twitterHandle: "@Anders_",
    imageUrl: "/images/speakers/anders_jensen.jpg",
    description: "Anders Jensen has made a name for himself through successfully organizing and hosting Bitcoin events. His events are not just gatherings but platforms for education, networking, and advocacy within the Bitcoin community. His ability to bring together diverse groups of Bitcoin enthusiasts and professionals has made him a pivotal figure in expanding Bitcoin's reach and understanding.",
    stats: "",
    active: true
  },
  {
    name: "Matthew Lysiak",
    title: "",
    twitterHandle: "@Matthewlysiak",
    imageUrl: "/images/speakers/matthew_lysiak.jpg",
    description: "Matthew's knack for uncovering the quirky side of life occasionally touches on Bitcoin's impact on culture, health, and those weird historical facts you share at parties. His book \"Fiat Food\" explores how the poor incentives of our financial system have made food both more expensive and less healthy, negitively effecting the way we eat. If there's an unconventional angle, Matthew's tweeting about it, probably with a bit of conspiracy for zest and a chuckle for good measure.",
    stats: "",
    active: true
  },
  {
    name: "Tim Kotzman",
    title: "",
    twitterHandle: "@timkotzman",
    imageUrl: "/images/speakers/tim_kotzman.jpg",
    description: "Tim Kotzman is the host of The Bitcoin Treasuries Podcast, where he explores Bitcoin's role in corporate treasury strategies. His podcast features in-depth conversations with industry leaders, including a notable episode with Lyn Alden, a respected macroeconomist and Bitcoin analyst. Kotzman also covers topics related to MicroStrategy, corporate Bitcoin adoption, and investment strategies, providing valuable insights for business and investors. The podcast is available on platforms like Spotify and YouTube. Through these discussions, Kotzman helps his audience navigate the evolving landscape of Bitcoin as a corporate treasury asset.",
    stats: "",
    active: true
  },
  {
    name: "Kane Mcgukin",
    title: "",
    twitterHandle: "@kanemcgukin",
    imageUrl: "/images/speakers/kane_mcgukin.jpg",
    description: "Kane McGukin is a Senior Data Strategist at Arkos Global Advisors, with over 13 years of experience in wealth management, previously working at Bear Stearns and UBS. He graduated from Auburn University in 2004 with a B.B.A. in Finance. Passionate about technology, financial markets, and digital assets like Bitcoin, he focuses on delivering digital financial tools to help individuals build wealth. Kane authors The Mesh Point blog on Substack and hosts the Navigating Bitcoin’s Noise podcast, exploring the intersection of traditional and crypto markets.",
    stats: "",
    active: true
  },
  {
    name: "Brandon Gentile",
    title: "",
    twitterHandle: "@brandon_gentile",
    imageUrl: "/images/speakers/brandon_gentile.jpg",
    description: "Brandon Gentile is a former professional hockey player, business owner, investor, and advocate for Bitcoin and financial literacy. As the head of marketing and PR at Bitcoin Trading Cards, He promotes sound money and freedom through collectibles that aim to educate the masses about Bitcoin. He hosts the Playable Characters Show, a podcast exploring Bitcoin, macroeconomics, liberty, and financial literacy, drawing on his diverse experiences to discuss Bitcoin's role in decentralized finance and its potential to disrupt traditional financial systems.",
    stats: "",
    active: true
  },
  {
    name: "",
    title: "",
    twitterHandle: "",
    imageUrl: "",
    description: "",
    stats: "",
    active: false
  }
];

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const renderSpeaker = (speaker: any, index: number) => {
    if (speaker.active) {
      return (
          <motion.div
              key={speaker.name}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="self-end">
            <SpeakerCard
                name={speaker.name}
                title={speaker.title}
                imageUrl={speaker.imageUrl}
                description={speaker.description}
                onLearnMore={() => setSelectedSpeaker(speaker)}/>
          </motion.div>
      );
    } else {
      return (
          <motion.div
              key={speaker.name}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="self-end">
            <SpeakerCard
                name={undefined}
                title={""}
                imageUrl={undefined}
                description={""}
                onLearnMore={() => {
                }}/>
          </motion.div>
      );
    }
  }

  return (
      <SectionWrapper id="speakers" title="Participants & Panelists">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {speakers.map((speaker, index) => {
            return renderSpeaker(speaker, index);
          })}
        </div>
        <h2 className="mt-24">Musicians</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {musicians.map((musician, index) => {
            return renderSpeaker(musician, index);
          })}
        </div>
        <h2 className="mt-24">Virtual Speakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {remoteSpeakers.map((speaker, index) => {
          return renderSpeaker(speaker, index);
        })}
        </div>
        <h4 className="mt-12">...stay tuned for the reveal of more names that will sweeten your journey down the rabbit hole!</h4>
        <AnimatePresence>
          {selectedSpeaker && (
              <Modal isOpen={!!selectedSpeaker} onClose={() => setSelectedSpeaker(null)}>
                <h2 className="text-3xl font-bold mb-4 text-warmer">{selectedSpeaker.name}</h2>
                <p className="text-2xl mb-4 text-gray-300">
                  <a href={`https://x.com/${selectedSpeaker.twitterHandle}`}
                     target="_blank">{selectedSpeaker.twitterHandle}</a>
                </p>
                <p className="text-neutrallight mb-4">{selectedSpeaker.description}</p>
              </Modal>
          )}
        </AnimatePresence>
        <div className="mt-8"><BuyNow /></div>
      </SectionWrapper>
  );
};

export default Speakers;