"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SocialIcon } from "./SocialIcon";

const activities = [
  {
    id: 1,
    src: "/assets/activity1.png",
    alt: "CinderCrate Card Display Case - PSA Graded and Vintage Cards",
  },
  {
    id: 2,
    src: "/assets/activity2.png",
    alt: "CinderCrate Trade Night Convention Tables and Binders",
  },
  {
    id: 3,
    src: "/assets/activity3.png",
    alt: "CinderCrate Pokémon Card Showcase - Holos and Secret Rares",
  },
  {
    id: 4,
    src: "/assets/activity4.png",
    alt: "CinderCrate Buy Sell Trade Booth at Convention",
  },
];

export function AroundSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = React.useRef<number | null>(null);
  const totalSlides = activities.length;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-white pb-[64px] sm:pb-[96px] lg:pb-[140px] overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="block text-[12px] sm:text-[13px] font-bold text-[#E8621A] tracking-wider uppercase mb-2 sm:mb-3">
            CINDERCRATE IN ACTION
          </span>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#CC3F1F] tracking-tight mb-3 sm:mb-4">
            Follow Our Adventure!
          </h2>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#7A5A4A] max-w-[720px] mx-auto leading-relaxed">
            From setting up vendor booths at different events to exploring malls and meeting fellow
            collectors across various locations, these moments capture CinderCrate in action, bringing
            Pokémon cards, new discoveries, and our love for collecting to communities wherever we go.
          </p>
        </div>

        <div
          className="relative w-full h-[430px] xs:h-[480px] sm:h-[560px] md:h-[640px] flex items-center justify-center select-none overflow-hidden touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {activities.map((activity, idx) => {
            let offset = (idx - activeIndex + totalSlides) % totalSlides;
            if (offset > totalSlides / 2) {
              offset -= totalSlides;
            }

            const isCenter = offset === 0;
            const isLeft = offset === -1 || (totalSlides === 4 && offset === 3);
            const isRight = offset === 1;

            let transformStyle = "translate(-50%, -50%) scale(0.7) opacity-0 pointer-events-none";
            let zIndex = 0;
            let opacity = 0;

            if (isCenter) {
              transformStyle = "translate(-50%, -50%) scale(1)";
              zIndex = 30;
              opacity = 1;
            } else if (isRight) {
              transformStyle = "translate(calc(-50% + min(280px, 36vw)), -50%) scale(0.85)";
              zIndex = 20;
              opacity = 0.65;
            } else if (isLeft) {
              transformStyle = "translate(calc(-50% - min(280px, 36vw)), -50%) scale(0.85)";
              zIndex = 20;
              opacity = 0.65;
            }

            return (
              <div
                key={activity.id}
                onClick={() => {
                  if (isRight) nextSlide();
                  if (isLeft) prevSlide();
                }}
                style={{
                  transform: transformStyle,
                  zIndex,
                  opacity,
                  transition: "all 700ms cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className={`absolute top-1/2 left-1/2 w-[230px] xs:w-[260px] sm:w-[320px] md:w-[380px] h-[380px] xs:h-[430px] sm:h-[520px] md:h-[600px] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#FFF4EE] shadow-xl ${
                  !isCenter ? "cursor-pointer hover:opacity-85" : "shadow-2xl ring-1 ring-black/5"
                }`}
              >
                <Image
                  src={activity.src}
                  alt={activity.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 380px"
                  priority={isCenter}
                />
                <div className="absolute inset-0 rounded-[22px] sm:rounded-[28px] ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center text-center mt-8 sm:mt-10 md:mt-12 max-w-[680px] mx-auto px-4">
          <p className="text-[16px] md:text-[17px] text-[#7A5A4A] leading-relaxed mb-5">
            Follow us on social media for the latest event announcements, upcoming vendor appearances, and updates on where to find CinderCrate next!
          </p>
          <div className="flex items-center justify-center gap-4 select-none">
            <a
              href="https://www.instagram.com/cindercrate/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition-transform duration-200 drop-shadow-2xs"
              aria-label="Follow CinderCrate on Instagram"
            >
              <SocialIcon platform="instagram" size={36} />
            </a>
            <a
              href="https://chat.whatsapp.com/EV72TAQ4KL85Q6gQD1wKR4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition-transform duration-200 drop-shadow-2xs"
              aria-label="Chat with CinderCrate on WhatsApp"
            >
              <SocialIcon platform="whatsapp" size={36} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
