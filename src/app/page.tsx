import { Header } from "@/widgets/header";
import { HeroSection } from "@/widgets/hero-section";
import { FeaturesSection } from "@/widgets/features-section";
import { StatsSection } from "@/widgets/stats-section";
import { HowItWorksSection } from "@/widgets/how-it-works-section";
import { ComparisonSection } from "@/widgets/comparison-section";
import { GallerySection } from "@/widgets/gallery-section";
import { SocialProofSection } from "@/widgets/social-proof-section";
import { TeamSection } from "@/widgets/team-section";
import { PricingSection } from "@/widgets/pricing-section";
import { FaqSection } from "@/widgets/faq-section";
import { CtaSection } from "@/widgets/cta-section";
import { Footer } from "@/widgets/footer";

/**
 * Главная страница - композиция всех секций лендинга
 * Универсальный шаблон для любого продукта/бизнеса
 */
export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <HowItWorksSection />
        <ComparisonSection />
        <GallerySection />
        <SocialProofSection />
        <TeamSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
