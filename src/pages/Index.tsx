import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Products from "@/components/landing/Products";
import TechStack from "@/components/landing/TechStack";
import WhyDequeue from "@/components/landing/WhyDequeue";
import Vision from "@/components/landing/Vision";
import Testimonials from "@/components/landing/Testimonials";
import Blog from "@/components/landing/Blog";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Products />
      <TechStack />
      <WhyDequeue />
      <Testimonials />
      <Vision />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
