import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import ProductPricing from "@/components/landing/ProductPricing";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Smartphone, QrCode, CreditCard, BarChart3, Zap, Shield, ArrowRight, Check, ShoppingBag, Scan, LogOut,
} from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import goImg from "@/assets/product-go.jpg";

const features = [
  { icon: Smartphone, title: "Mobile & Web Checkout", desc: "Works on any smartphone — no app download required. Customers use their own device as the checkout terminal." },
  { icon: QrCode, title: "Scan & Go", desc: "Customers scan product barcodes with their phone camera, building a real-time virtual cart as they shop." },
  { icon: CreditCard, title: "Instant Digital Payments", desc: "Pay via UPI, credit/debit cards, or digital wallets. Transactions complete in under 2 seconds." },
  { icon: BarChart3, title: "Retail Analytics Dashboard", desc: "Real-time insights into customer behavior, checkout times, popular products, and store performance." },
  { icon: Zap, title: "Promotions & Offers", desc: "Targeted promotions based on shopping patterns. Push personalized deals directly to the customer's screen." },
  { icon: Shield, title: "Seamless Integration", desc: "Plugs into existing POS and inventory management systems. Zero disruption to current operations." },
];

const benefits = [
  { metric: "80%", label: "Reduction in checkout time" },
  { metric: "3x", label: "Customer throughput increase" },
  { metric: "0", label: "Hardware investment needed" },
  { metric: "40%", label: "Lower operational costs" },
];

const steps = [
  { icon: Scan, num: "01", title: "Scan", desc: "Point your phone camera at product barcodes as you shop" },
  { icon: ShoppingBag, num: "02", title: "Cart", desc: "Items appear in a real-time virtual cart on your screen" },
  { icon: CreditCard, num: "03", title: "Pay", desc: "Complete payment digitally — UPI, cards, or wallets" },
  { icon: LogOut, num: "04", title: "Walk Out", desc: "Receipt generated instantly. No lines. No waiting." },
];

const useCases = ["Supermarkets & Hypermarkets", "Convenience Stores", "Department Stores", "Electronics Retail", "Fashion & Apparel", "Pharmacy Chains"];

const goPricing = [
  { name: "Go Basic", price: 299, yearlyPrice: 2999, features: ["Up to 200 transactions/month", "Basic analytics", "Email support", "Single store", "UPI & card payments"] },
  { name: "Go Pro", price: 799, yearlyPrice: 7999, popular: true, features: ["Unlimited transactions", "Advanced analytics & AI", "Priority support", "Up to 5 stores", "Custom branding", "Promotions engine"] },
  { name: "Go Enterprise", price: 1999, yearlyPrice: 19999, features: ["Unlimited everything", "Dedicated account manager", "Custom integrations", "Unlimited stores", "SLA guarantee", "On-premise option"] },
];

const GoPage = () => {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const stepsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="w-full h-full" density={60} size={1.4} speed={0.4} color="hsl(217 91% 60%)" opacity={0.2} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full glow-bg pointer-events-none opacity-40" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-semibold mb-6">Dequeue Go</span>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 leading-[1.05]">
                Mobile Checkout. <span className="gradient-text">No Lines.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                Go is a software-only retail checkout system that turns any smartphone into a checkout terminal. Customers simply scan products, pay instantly, and walk out. Fully customizable to your brand.
              </p>
              <p className="text-sm text-primary font-heading font-semibold mb-8">Skip the queue. #Dequeue</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild><Link to="/contact">Request Demo <ArrowRight className="ml-1 w-4 h-4" /></Link></Button>
                <Button variant="heroOutline" size="lg" asChild><Link to="/pricing">View Pricing</Link></Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ y }}>
              <div className="relative rounded-3xl overflow-hidden liquid-glass-card">
                <img src={goImg} alt="Dequeue Go mobile checkout" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="liquid-glass-card p-4 rounded-2xl">
                    <p className="text-sm font-heading font-semibold">No checkout counters. No kiosks. No waiting.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 page-section" ref={stepsRef}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">How It Works</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Four Simple Steps</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={stepsInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.15 }} className="text-center relative">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 relative z-10 liquid-glass-icon">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-heading font-bold text-primary/50 uppercase tracking-widest">{s.num}</span>
                <h3 className="font-heading font-bold text-xl mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 page-section" ref={featuresRef}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">Features</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Everything You Need</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30, rotateX: -10 }} animate={featuresInView ? { opacity: 1, y: 0, rotateX: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="liquid-glass-card p-6 group hover:border-primary/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 page-section relative overflow-hidden" ref={benefitsRef}>
        <div className="absolute inset-0 glow-bg opacity-20 pointer-events-none" />
        <div className="section-container relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={benefitsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">Impact</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Why Retailers Love Go</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.label} initial={{ opacity: 0, scale: 0.8 }} animate={benefitsInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }} className="liquid-glass-card p-8 text-center">
                <p className="text-4xl lg:text-5xl font-bold font-heading gradient-text mb-3">{b.metric}</p>
                <p className="text-sm text-muted-foreground">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 page-section">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">Perfect For</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div key={uc} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-center gap-3 liquid-glass-card p-4">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{uc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductPricing productName="Go" plans={goPricing} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default GoPage;
