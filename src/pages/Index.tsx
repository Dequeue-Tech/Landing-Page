import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import ProductsOverview from "@/components/landing/ProductsOverview";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Problem />
    <Solution />
    <HowItWorks />
    <ProductsOverview />
    <Testimonials />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
