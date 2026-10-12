"use client";

import React, { useState, useEffect } from "react";
import { CinderCrateLogo } from "./CinderCrateLogo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Testimony", href: "#testimony" },
    { name: "Cards", href: "#collection" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#F5E6D6] transition-all duration-300 ${
        scrolled ? "shadow-xs" : ""
      }`}
    >
      <div className="max-w-[1248px] mx-auto h-[68px] sm:h-[80px] md:h-[96px] px-4 sm:px-6 lg:px-8 xl:px-0 flex items-center justify-between">
        <CinderCrateLogo />

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#3D2B1F] text-[15px] lg:text-[16px] font-medium hover:text-[#CC3F1F] transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-2 lg:py-2.5 rounded-lg border border-[#F2D7C8] text-[#CC3F1F] text-[15px] lg:text-[16px] font-medium hover:bg-[#FFF4EE] hover:border-[#CC3F1F] transition-all duration-200"
          >
            <span>Contact</span>
            <span className="text-[17px] leading-none select-none">↗</span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#3D2B1F] hover:text-[#CC3F1F] hover:bg-[#FFF4EE] active:scale-95 transition-all focus:outline-hidden cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-[#F5E6D6] px-5 sm:px-6 py-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#3D2B1F] text-[17px] font-medium py-2 px-2 rounded-md hover:bg-[#FFF4EE] hover:text-[#CC3F1F] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 mt-2 px-6 py-2.5 rounded-lg bg-[#CC3F1F] text-white text-[16px] font-medium hover:bg-[#B83416] active:scale-98 transition-all shadow-xs"
          >
            <span>Contact Us</span>
            <span className="text-[17px] leading-none">↗</span>
          </a>
        </div>
      )}
    </header>
  );
}
