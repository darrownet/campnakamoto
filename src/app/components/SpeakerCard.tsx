"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface SpeakerCardProps {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  onLearnMore: () => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, imageUrl, onLearnMore }) => {
  return (
      <CardContainer className="inter-var w-full aspect-[4/5] speaker-card-container">
        <h3>{name}</h3>
        <CardBody className="speaker-card-body">
          <CardItem translateZ={100} className="w-full h-full absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: "cover"}}
                  className="transition-all duration-300 ease-out group-hover/card:scale-110"
              />
            </div>
          </CardItem>
          <div className="relative z-20 flex flex-col h-full justify-between">
            <div className="relative z-20 flex flex-col h-full justify-between my-2">
              <CardItem as="p" translateZ={60} className="text-orange-500 text-sm">
                {title}
              </CardItem>
            </div>
            <div className="m-4 justify-center">
              <CardItem translateZ={20} as="button" onClick={onLearnMore} className="speaker-more-info-button">
                <span>Learn More</span>
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
  );
};

export default SpeakerCard;
