"use client";

import React from "react";
import Image from "next/image";
import { CinderCrateLogo } from "./CinderCrateLogo";
import { SocialIcon, SocialPlatform } from "./SocialIcon";

export function ContactFooterSection() {
  const socials: { name: string; platform: SocialPlatform; href: string }[] = [
    {
      name: "Facebook",
      platform: "facebook",
      href: "https://www.facebook.com/zamlizz.zamlizz/",
    },
    {
      name: "Email",
      platform: "email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=michaeljstruslim@gmail.com",
    },
    {
      name: "WhatsApp",
      platform: "whatsapp",
      href: "https://chat.whatsapp.com/EV72TAQ4KL85Q6gQD1wKR4",
    },
    {
      name: "Instagram",
      platform: "instagram",
      href: "https://www.instagram.com/cindercrate/",
    },
    {
      name: "TikTok",
      platform: "tiktok",
      href: "https://www.tiktok.com/@cindercrate?_r=1&_t=ZS-9AUg3kx6y6n",
    },
  ];

  return (
    <footer id="contact" className="w-full bg-[#FFF9F6] pt-[56px] sm:pt-[72px] md:pt-[80px] pb-[36px] sm:pb-[44px] transition-colors">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-8">
          <div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#CC3F1F] tracking-tight mb-3 sm:mb-4">
              Contact me
            </h2>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#7A5A4A] leading-[26px] sm:leading-[31px]">
              A question, a trade, or just a hello.
              <br />
              There&apos;s always room for another collector.
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-4 sm:gap-6 pt-1 select-none">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform duration-200 drop-shadow-2xs"
                aria-label={`Visit CinderCrate on ${social.name}`}
              >
                <SocialIcon platform={social.platform} size={32} />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-[#F5E6D6] mt-[40px] sm:mt-[56px] mb-[28px] sm:mb-[32px]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="flex-shrink-0">
            <CinderCrateLogo />
          </div>

          <p className="text-[13px] sm:text-[14px] text-[#7A5A4A] text-center font-normal px-2">
            Just collecting for fun, every card tells a story.
          </p>

          <div className="flex items-center gap-1.5 flex-shrink-0 select-none">
            <span className="w-[14px] h-[4px] rounded-full bg-[#CC3F1F]" />
            <span className="w-[14px] h-[4px] rounded-full bg-[#E8621A]" />
            <span className="w-[14px] h-[4px] rounded-full bg-[#F5C842]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
