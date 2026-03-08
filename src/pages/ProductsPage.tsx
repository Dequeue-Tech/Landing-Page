import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Products from "@/components/landing/Products";
import HowItWorks from "@/components/landing/HowItWorks";
import CTASection from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductsPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-8 text-center">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
              Products
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">
              One Platform. Four Powerful Products.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              An integrated ecosystem of retail technologies designed to remove friction from every step of the shopping experience. Every product is fully customizable.
            </p>
            <p className="text-sm text-primary font-heading font-semibold">No queues. Just #Dequeue.</p>
          </motion.div>
        </div>
      </section>

      <Products />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
};

export default ProductsPage;
