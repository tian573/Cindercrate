import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { AroundSection } from "./components/AroundSection";
import { TestimonySection } from "./components/TestimonySection";
import { CollectionSection } from "./components/CollectionSection";
import { ContactFooterSection } from "./components/ContactFooterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#FFF4EE] selection:text-[#CC3F1F]">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <AroundSection />
        <TestimonySection />
        <CollectionSection />
      </main>
      <ContactFooterSection />
    </div>
  );
}
