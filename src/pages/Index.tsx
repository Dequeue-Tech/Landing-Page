import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import ProductsOverview from "@/components/landing/ProductsOverview";
import Stats from "@/components/landing/Stats";
import Partners from "@/components/landing/Partners";
import WhyChoose from "@/components/landing/WhyChoose";
import Testimonials from "@/components/landing/Testimonials";
import PricingGeneralized from "@/components/ui/pricing-generalized";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Stats />
    <Problem />
    <Solution />
    <HowItWorks />
    <ProductsOverview />
    <Partners />
    <WhyChoose />
    <Testimonials />
    <PricingGeneralized />
    <FAQ />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
