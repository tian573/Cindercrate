import React from "react";

export type SocialPlatform =
  | "facebook"
  | "email"
  | "whatsapp"
  | "linkedin"
  | "instagram"
  | "tiktok";

interface SocialIconProps {
  platform: SocialPlatform;
  size?: number;
  className?: string;
}

export function SocialIcon({ platform, size = 32, className = "" }: SocialIconProps) {
  const bgStyles: Record<SocialPlatform, string> = {
    facebook: "bg-[#1877F2]",
    email: "bg-[#C84825]",
    whatsapp: "bg-[#25D366]",
    linkedin: "bg-[#0A66C2]",
    instagram: "bg-[#D62976]",
    tiktok: "bg-[#000000]",
  };

  const rounded = "rounded-[8px] sm:rounded-[9px]";

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center ${rounded} ${bgStyles[platform]} shadow-xs select-none ${className}`}
    >
      {platform === "facebook" && (
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px]"
          fill="white"
          aria-hidden="true"
        >
          <path d="M15.12 7.72h1.83V4.6A24.6 24.6 0 0 0 14.28 4.4c-2.64 0-4.45 1.61-4.45 4.57v2.55H6.96v3.52h2.87V24h3.64v-8.96h2.85l.45-3.52h-3.3V9.26c0-1.02.28-1.54 1.65-1.54z" />
        </svg>
      )}

      {platform === "email" && (
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px]"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m3 7 9 6.5L21 7" />
        </svg>
      )}

      {platform === "whatsapp" && (
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px]"
          fill="white"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.47 0-2.92-.4-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.25-4.39c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.23.85 5.77 2.39 1.54 1.54 2.39 3.59 2.39 5.77 0 4.5-3.66 8.16-8.16 8.16zm4.47-6.11c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
        </svg>
      )}

      {platform === "linkedin" && (
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px]"
          fill="white"
          aria-hidden="true"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      )}

      {platform === "instagram" && (
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px]"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.2" cy="6.8" r="0.8" fill="white" stroke="none" />
        </svg>
      )}

      {platform === "tiktok" && (
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px]"
          fill="white"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.88-4.47V8.58a8.27 8.27 0 0 0 4.84 1.56V6.69z" />
        </svg>
      )}
    </div>
  );
}
