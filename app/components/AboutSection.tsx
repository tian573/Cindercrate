import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-full bg-white pt-[48px] sm:pt-[60px] md:pt-[68px] pb-[64px] sm:pb-[96px] lg:pb-[140px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12 xl:gap-16">
          <div className="w-full lg:flex-1 lg:max-w-[624px]">
            <span className="block text-[12px] sm:text-[13px] font-bold text-[#E8621A] tracking-wider uppercase mb-2 sm:mb-3">
              ABOUT THE STORE
            </span>

            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#CC3F1F] tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Meet Cindercrate!
            </h2>

            <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#7A5A4A] leading-[28px] sm:leading-[31px]">
              Founded in 2024, CinderCrate is a Pokémon card vendor built on a genuine love and
              passion for Pokémon cards and the community surrounding them. Our store offers collectors
              a place to discover and purchase great cards, find special additions to their collections,
              and explore the excitement of collecting and trading. We believe Pokémon cards are more than
              just collectibles, they hold memories, spark excitement, and bring people together through a
              shared passion. Whether you&apos;re a longtime collector, an active trader, or just starting
              your Pokémon journey, CinderCrate is a place where everyone is welcome to explore, collect,
              and share their passion.
            </p>
          </div>

          <div className="w-full lg:w-[460px] xl:w-[540px] flex-shrink-0">
            <div className="w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[414px] bg-[#FFF4EE] rounded-[24px] flex items-center justify-center p-6 sm:p-8 relative overflow-hidden group">
              <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/logo.png"
                  alt="CinderCrate Official Mascot"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                  sizes="(max-width: 768px) 240px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
