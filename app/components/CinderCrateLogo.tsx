import React from "react";
import Image from "next/image";

interface CinderCrateLogoProps {
  className?: string;
  iconSize?: number;
}

export function CinderCrateLogo({ className = "", iconSize = 42 }: CinderCrateLogoProps) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2.5 group cursor-pointer select-none transition-transform active:scale-95 ${className}`}
      aria-label="CinderCrate Home"
    >
      <div className="relative flex-shrink-0" style={{ width: iconSize, height: iconSize }}>
        <Image
          src="/assets/logo.png"
          alt="CinderCrate Logo"
          fill
          className="object-contain transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </div>

      <span className="text-[23px] font-bold text-[#CC3F1F] tracking-tight leading-none group-hover:text-[#B83416] transition-colors">
        Cindercrate
      </span>
    </a>
  );
}
