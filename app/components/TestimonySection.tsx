"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonies = [
  {
    id: 1,
    src: "/assets/testimony1.png",
    alt: "Testimony from kris - Kualitas kartu sangat baik meskipun belum grading, packingnya jg rapi, sangat rekomen seller ini.",
  },
  {
    id: 2,
    src: "/assets/testimony2.png",
    alt: "Testimony from ZilianAlvaro - mantep banget, penjual ramah dan pesanan cepat, kartu juga nyampe dengan kondisi yang aman",
  },
  {
    id: 3,
    src: "/assets/testimony3.png",
    alt: "Testimony from Kurniawan - Sperti biasa, barang nya ok bgt, dpt bonus kartu jg. Penjual ramah, mau diajak diskusi. Trima kasih gan, sukses selalu",
  },
];

export function TestimonySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = React.useRef<number | null>(null);
  const totalSlides = testimonies.length;

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
    <section
      id="testimony"
      className="w-full bg-[#FFF9F6] py-[56px] sm:py-[72px] md:py-[96px] transition-colors"
      aria-label="Collector Testimonies"
    >
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center mb-8 sm:mb-10">
          <span className="block text-[12px] sm:text-[13px] font-bold text-[#E8621A] tracking-wider uppercase mb-2 sm:mb-3">
            TESTIMONY
          </span>
          <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-[#CC3F1F] tracking-tight">
            Every collection has a story.
          </h2>
        </div>

        <div
          className="max-w-[824px] mx-auto w-full h-[150px] xs:h-[175px] sm:h-[210px] md:h-[248px] bg-[#FFF4EE] rounded-[20px] sm:rounded-[24px] p-2.5 xs:p-3 sm:p-5 md:p-6 shadow-xs relative overflow-hidden select-none touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex w-full h-full"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {testimonies.map((testimony, idx) => (
              <div
                key={testimony.id}
                className="min-w-full h-full flex-shrink-0 flex items-center justify-center px-1 sm:px-2"
              >
                <div className="relative w-full h-full bg-white rounded-lg sm:rounded-xl shadow-xs overflow-hidden flex items-center justify-center p-2 sm:p-4">
                  <Image
                    src={testimony.src}
                    alt={testimony.alt}
                    fill
                    className="object-contain p-1.5 sm:p-2"
                    priority={idx === 0}
                    sizes="(max-width: 640px) 90vw, 800px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 sm:gap-6 mt-8 sm:mt-10 md:mt-11">
          <button
            type="button"
            onClick={prevSlide}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5D7D7] bg-white/60 flex items-center justify-center text-[#7A5A4A] hover:border-[#CC3F1F] hover:text-[#CC3F1F] hover:bg-white active:scale-95 transition-all cursor-pointer focus:outline-hidden"
            aria-label="Previous testimony"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-500 rounded-full focus:outline-hidden cursor-pointer ${
                  activeIndex === idx
                    ? "w-[20px] sm:w-[22px] h-[5px] sm:h-[6px] bg-[#E8621A]"
                    : "w-[5px] sm:w-[6px] h-[5px] sm:h-[6px] bg-[#F5C842] hover:bg-[#E8621A]"
                }`}
                aria-label={`Go to testimony ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5D7D7] bg-white/60 flex items-center justify-center text-[#7A5A4A] hover:border-[#CC3F1F] hover:text-[#CC3F1F] hover:bg-white active:scale-95 transition-all cursor-pointer focus:outline-hidden"
            aria-label="Next testimony"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
