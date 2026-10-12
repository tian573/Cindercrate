import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full aspect-[2048/1153] overflow-hidden bg-[#FFF9F6]"
      aria-label="CinderCrate Showcase Banner"
    >
      <Image
        src="/assets/newbanner3.jpg"
        alt="CinderCrate Store Showcase Banner"
        fill
        className="object-cover object-center w-full h-full"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
    </section>
  );
}
