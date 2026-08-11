import CTASection from "@/components/sections/CTAsection";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import ModulesSection from "@/components/sections/ModuleSection";
import Navbar from "@/components/sections/Navbar";
import PricingSection from "@/components/sections/PricingSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";

export default function RootLayoutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}