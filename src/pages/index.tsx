import { Footer, Navbar } from "../landingcomponents";
import {
  About,
  Hero
} from "../sections";
import FeaturesSection from "@/sections/FeatureSection";
import HowItWorksSection from "@/sections/HowItWorks";
import TokenomicsSection from "@/sections/Tokenomics";
import SecuritySection from "@/sections/SecurityTrust";
import FAQSection from "@/sections/FAQ";
import CTASection from "@/sections/CTASection";
import ToTop from "@/sections/ToTal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#161616] text-white overflow-hidden">
      <Navbar />
      <div className="bg-transparent overflow-hidden max-w-[85rem] mx-auto w-full flex flex-col justify-center items-center">
        <Hero />
        <section className="relative">
          <About />
          <FeaturesSection />
          <HowItWorksSection />
          <TokenomicsSection />
          <SecuritySection />
          <FAQSection />
        </section>
        <ToTop />
      </div>
      <Footer />
    </div>
  );
}
