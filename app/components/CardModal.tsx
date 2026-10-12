"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

export interface CardItem {
  id: number;
  src: string;
  name: string;
}

interface CardModalProps {
  card: CardItem | null;
  onClose: () => void;
}

export function CardModal({ card, onClose }: CardModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const maxTilt = 22;
    const rX = (0.5 - y) * (maxTilt * 2);
    const rY = (x - 0.5) * (maxTilt * 2);

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: x * 100,
      y: y * 100,
      opacity: 0.6,
    });
  }, []);

  const handlePointerLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    setIsPressed(false);
  };

  if (!card) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 border border-white/20 text-white flex items-center justify-center text-base sm:text-lg transition-all cursor-pointer z-50 backdrop-blur-xs"
        aria-label="Close card modal"
      >
        ✕
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none text-white/75 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide bg-black/50 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/15 backdrop-blur-xs z-50 text-center max-w-[90vw]">
        Move or press around card to tilt • Tap background to close
      </div>

      <div
        className="relative perspective-[1200px] flex items-center justify-center max-w-[90vw] max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerDown={() => setIsPressed(true)}
          onPointerUp={() => setIsPressed(false)}
          onPointerLeave={handlePointerLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
              isPressed ? 0.96 : 1.05
            }, ${isPressed ? 0.96 : 1.05}, 1)`,
            transition: isPressed
              ? "transform 0.1s ease-out"
              : rotateX === 0 && rotateY === 0
              ? "transform 0.5s ease-out"
              : "transform 0.08s ease-out",
            transformStyle: "preserve-3d",
          }}
          className="relative w-[min(86vw,300px)] sm:w-[360px] md:w-[420px] aspect-[1/1] rounded-2xl cursor-grab active:cursor-grabbing overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] touch-none"
        >
          <Image
            src={card.src}
            alt={card.name}
            fill
            className="object-contain p-2 drop-shadow-2xl pointer-events-none"
            priority
            sizes="(max-width: 640px) 280px, 420px"
          />

          <div
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%)`,
              opacity: glarePos.opacity,
              transition: "opacity 0.3s ease-out",
            }}
            className="absolute inset-0 pointer-events-none rounded-2xl mix-blend-overlay"
          />

          <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
