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
  instagramHandle?: string;
  twitterHandle?: string;
  imageUrl: string;
  description: string;
  stats: string;
  active: boolean;
}

const rhythmMovement: Speaker[] = [
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
  },
  {
    name: "Vince Brown",
    title: "",
    instagramHandle: "vince_amp117",
    imageUrl: "/images/speakers/vince_brown.jpg",
    description: "Vincent is a seasoned parkour coach and the head coach and co-owner of Adaptive Movement Parkour in Hartford, Connecticut. Vincent has gone through the full student-to-teacher parkour journey with AM Parkour and is excited to join the ARDV Coaching team to share his passion and experience. He began in a graduate program in Denver. After falling into the Bitcoin rabbit hole, he left academia behind to focus on sound money and the practice of movement, via Parkour. Today, those two pursuits, financial sovereignty and physical freedom, have been his main focus.",
    stats: "",
    active: true
  },
  {
    name: "Kate Lemay",
    title: "",
    twitterHandle: "",
    imageUrl: "/images/speakers/kate_lemay.jpg",
    description: "Kate Lemay&pos;is a 500-hour certified yoga teacher through the Abyhassna Yoga Institute, known for her nature-inspired vinyasa flow classes. Based in New Hampshire, she teaches at Sandy Island Family Camp and leads retreats across the Northeast. At Camp Nakamoto, Kate will offer grounding movement and breathwork to help attendees reconnect with themselves and the present moment.",
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
    name: "Parker Lewis",
    title: "",
    twitterHandle: "@parkeralewis",
    imageUrl: "/images/speakers/parker_lewis.jpg",
    description: "Parker is the Head of Business Development at Zaprite, a company focused on Bitcoin and Lightning Network solutions. He is a prominent Bitcoin advocate, known for his insights on the cryptocurrency’s technical and economic aspects, particularly its difficulty adjustment, energy consumption, and issuance schedule. Lewis frequently discusses Bitcoin’s role in financial systems and encourages building value within the ecosystem. He is active on X, where he shares his perspectives on Bitcoin and engages with the community.",
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
    name: "DJ Valerie B LOVE",
    title: "",
    twitterHandle: "@djvalerieblove",
    imageUrl: "/images/speakers/dj_valerie.jpg",
    description: "DJ Valerie B LOVE is a multifaceted entrepreneur, executive coach, and DJ who founded the 11x LOVE Method to help exhausted executives find harmony across all life areas. She hosts the \"DJ Valerie B LOVE Show,\" a podcast dedicated to truth-seekers and freedom-lovers, focusing on Bitcoin, peace, and personal growth. With her background in music, Valerie has performed globally at events like Burning Man and the Olympics.",
    stats: "",
    active: true
  },
  {
    name: "Jackson Mikalic",
    title: "",
    twitterHandle: "@macrojack21",
    imageUrl: "/images/speakers/jackson_mikalic.jpg",
    description: "Jackson (MacroJack) is a Bitcoin advocate and rationalist focused on the future of Bitcoin financial services. He currently works at Onramp Bitcoin, hosts The Last Trade Podcast, and authors the Sound Money, Sound Life newsletter. With over 12,000 followers on X, he shares insights on sound money and cryptocurrency." +
        "\n",
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
    name: "Surfer Jim",
    title: "",
    twitterHandle: "@surferjimw",
    imageUrl: "/images/speakers/surfer_jim.jpg",
    description: "Surfer Jim - a lifelong surfer and entrepreneur, is a Bitcoin maximalist who champions BTC as humanity's escape from fiat control, serving as a lead advisor at The Bitcoin Adviser with expertise in secure, multi-sig custody solutions. Since at least 2021, he’s been vocal on X about Bitcoin’s transformative power, crediting it for personal wins like funding his dream wedding in 2025. He rejects altcoins and blockchain hype, urging adoption with a blunt, stoked vibe: “#Bitcoin IS humanity's only hope.” DM him at surferjim@thebitcoinadviser.com for custody guidance.",
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
    name: "Kevin Mckernan",
    title: "",
    twitterHandle: "@Kevin_McKernan",
    imageUrl: "/images/speakers/kevin_mckernan.jpg",
    description: "Kevin McKernan is a pioneering genomics scientist and founder of Medicinal Genomics. Kevin is known for his work on the Cannabis Genome Project and advancing next-generation sequencing technologies, including contributions to the Human Genome Project at MIT. In the Bitcoin space, he advocates for the cryptocurrency's role in fostering censorship-resistant science and decentralized systems. At BTC Prague 2025 He delivered a keynote titled \"Decentralized Money with Centralized Health,\" exploring how Bitcoin can realign incentives for truth and sovereignty in science.",
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
    name: "Matt Schiffman",
    title: "",
    twitterHandle: "@matt_schiffman",
    imageUrl: "/images/speakers/matt_schiffman.jpg",
    description: "Matt Schiffman, with a vibrant background in theater design and production in New York City, blends technical expertise with artistic vision at his new venture, Waveform Engineering. Based in NYC, he is passionate about Bitcoin’s potential to inspire innovative creative expression and incentives. In addition to his theater experience, Matt is a seasoned front-end web developer, UX/UI designer, and producer with over 25 years of experience crafting digital interfaces, from AS3 Flash to modern frameworks like NextJS, and brings 10 years of expertise in fintech to his work.",
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

  const socialLink = (speaker:Speaker) => {
    if (speaker.instagramHandle) {
      return `https://www.instagram.com/${speaker.instagramHandle}`
    }
    if (speaker.twitterHandle) {
      return `https://x.com/${speaker.twitterHandle}`
    }
  }

  return (
      <SectionWrapper id="speakers" title="Participants & Panelists">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {speakers.map((speaker, index) => {
            return renderSpeaker(speaker, index);
          })}
        </div>
        <h2 className="mt-24">Virtual Speakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {remoteSpeakers.map((speaker, index) => {
          return renderSpeaker(speaker, index);
        })}
        </div>
        <h2 className="mt-24">Rhythm & Movement</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {rhythmMovement.map((musician:Speaker, index:number) => {
            return renderSpeaker(musician, index);
          })}
        </div>
        <h4 className="mt-12">...stay tuned for the reveal of more names that will sweeten your journey down the rabbit hole!</h4>
        <AnimatePresence>
          {selectedSpeaker && (
              <Modal isOpen={!!selectedSpeaker} onClose={() => setSelectedSpeaker(null)}>
                <h2 className="text-3xl font-bold mb-4 text-warmer">{selectedSpeaker.name}</h2>
                <p className="text-2xl mb-4 text-gray-300">
                  <a href={socialLink(selectedSpeaker)} target="_blank">
                    {selectedSpeaker.twitterHandle || selectedSpeaker.instagramHandle}
                  </a>
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