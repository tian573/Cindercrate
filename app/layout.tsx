import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#CC3F1F",
};

export const metadata: Metadata = {
  title: "CinderCrate",
  description:
    "CinderCrate is a Pokémon card store driven by passion for collecting, trading, and community. Discover vintage & modern cards, join trade nights, and share the hobby.",
  icons: {
    icon: [
      { url: "/assets/logo.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#7a5a4a]">{children}</body>
    </html>
  );
}
