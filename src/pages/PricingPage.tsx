import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PricingSection from "@/components/ui/pricing-section";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";
import { motion } from "framer-motion";

const PricingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-8 text-center">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Pricing
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>

    <PricingSection />
    <FAQ />
    <CTASection />
    <Footer />
  </div>
);

export default PricingPage;
