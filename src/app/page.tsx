import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import WhyTarjimSection from "@/components/home/why-tarjim-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-sction";
import TestimonialsSection from "@/components/home/testimonials-section";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-tarjim-background text-tarjim-text">
      <Header />
      <main>
        <HeroSection />
        <WhyTarjimSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
