"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import Modal from "./Modal";

interface Speaker {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  stats: string;
}

const speakers: Speaker[] = [
  {
    name: "Coming Soon",
    title: "Coming Soon",
    imageUrl: "https://i.nostr.build/AdWdB2uy3E3FVFGS.png",
    description: "Coming Soon",
    stats: "Coming Soon"
  },
  {
    name: "Coming Soon",
    title: "Coming Soon",
    imageUrl: "https://i.nostr.build/AdWdB2uy3E3FVFGS.png",
    description: "Coming Soon",
    stats: "Coming Soon"
  },
  {
    name: "Coming Soon",
    title: "Coming Soon",
    imageUrl: "https://i.nostr.build/AdWdB2uy3E3FVFGS.png",
    description: "Coming Soon",
    stats: "Coming Soon"
  },
];

const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-bitcoin text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Speakers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpeakerCard
                name={speaker.name}
                title={speaker.title}
                imageUrl={speaker.imageUrl}
                description={speaker.description}
                onLearnMore={() => setSelectedSpeaker(speaker)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedSpeaker && (
          <Modal isOpen={!!selectedSpeaker} onClose={() => setSelectedSpeaker(null)}>
            <h2 className="text-3xl font-bold mb-4 text-bitcoin">{selectedSpeaker.name}</h2>
            <p className="text-2xl mb-4 text-gray-300">{selectedSpeaker.title}</p>
            <p className="text-gray-400 mb-4">{selectedSpeaker.stats}</p>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpeakersSection;