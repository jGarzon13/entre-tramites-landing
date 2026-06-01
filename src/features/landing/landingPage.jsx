import { Navbar } from "../../components/layouts/Navbar";
import { Footer } from "../../components/layouts/Footer";
import { Hero } from "./components/Hero";
import { WhatIsSection } from "./components/WhatIsSection";
import { RequirementsSection } from "./components/RequirementsSection";
import { ProcessSection } from "./components/ProcessSection";
import { BenefitsSection } from "./components/BenefitSection";
import { PlansSection } from "./components/PlansSection";
import { TestimonialsSection } from "./components/TestimonialSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
export function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhatIsSection />
        <RequirementsSection />
        <ProcessSection />
        <BenefitsSection />
        <PlansSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}