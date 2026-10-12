"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CardModal, CardItem } from "./CardModal";

const cards: CardItem[] = [
  { id: 1, src: "/assets/card1.png", name: "Rayquaza C Lv.X" },
  { id: 2, src: "/assets/card2.png", name: "Pikachu Movie Promo" },
  { id: 3, src: "/assets/card3.png", name: "Vintage Holo Card 3" },
  { id: 4, src: "/assets/card4.png", name: "Rare Secret Card 4" },
  { id: 5, src: "/assets/card5.png", name: "Collector Holo Card 5" },
  { id: 6, src: "/assets/card6.png", name: "Alternate Art Card 6" },
  { id: 7, src: "/assets/card7.png", name: "Classic Holo Card 7" },
  { id: 8, src: "/assets/card8.png", name: "Vintage Rare Card 8" },
  { id: 9, src: "/assets/card9.png", name: "Special Illustration Card 9" },
];

const slotPositions = [
  { left: "11.44%", top: "6.39%", width: "24.91%", height: "26.73%" },
  { left: "38.55%", top: "6.39%", width: "24.91%", height: "26.73%" },
  { left: "65.66%", top: "6.39%", width: "24.91%", height: "26.73%" },
  { left: "11.44%", top: "35.20%", width: "24.91%", height: "26.73%" },
  { left: "38.55%", top: "35.20%", width: "24.91%", height: "26.73%" },
  { left: "65.66%", top: "35.20%", width: "24.91%", height: "26.73%" },
  { left: "11.44%", top: "64.02%", width: "24.91%", height: "26.73%" },
  { left: "38.55%", top: "64.02%", width: "24.91%", height: "26.73%" },
  { left: "65.66%", top: "64.02%", width: "24.91%", height: "26.73%" },
];

export function CollectionSection() {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);

  return (
    <section id="collection" className="w-full bg-white pt-[56px] sm:pt-[72px] md:pt-[88px] pb-[64px] sm:pb-[96px] md:pb-[128px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <span className="block text-[12px] sm:text-[13px] font-bold text-[#E8621A] tracking-wider uppercase mb-2 sm:mb-3">
            THE COLLECTION
          </span>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#CC3F1F] tracking-tight leading-tight">
            Little cards. Endless possibilities.
          </h2>
        </div>

        <div className="relative w-full max-w-[820px] mx-auto aspect-[1232/1298] select-none">
          <div className="relative w-full h-full drop-shadow-2xl">
            <Image
              src="/assets/Collector album book.png"
              alt="CinderCrate Pokémon Collector Album Book"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 820px"
            />

            {cards.map((card, index) => {
              const slot = slotPositions[index];
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCard(card)}
                  style={{
                    left: slot.left,
                    top: slot.top,
                    width: slot.width,
                    height: slot.height,
                  }}
                  className="absolute p-0.5 xs:p-1 sm:p-2 md:p-3 cursor-pointer group rounded-lg overflow-hidden transition-all duration-300"
                  title={`Click to focus on ${card.name}`}
                >
                  <div className="relative w-full h-full rounded-md overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-lg">
                    <Image
                      src={card.src}
                      alt={card.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 30vw, 25vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="absolute inset-0 rounded-md border border-white/0 group-hover:border-white/40 transition-colors pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </section>
  );
}
