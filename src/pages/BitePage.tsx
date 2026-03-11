import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import ProductPricing from "@/components/landing/ProductPricing";
import BulkBookings from "@/components/landing/BulkBookings";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  UtensilsCrossed, Box, CreditCard, BarChart3, Palette, Globe,
  ArrowRight, Check, Users, TrendingUp, Clock, Heart, Info,
  Building2, Coffee, Zap, Hotel, ShoppingBag
} from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import biteImg from "@/assets/product-bite.jpg";

const features = [
  { icon: Box, title: "Interactive 3D Menus", desc: "Customers explore dishes in stunning 3D before ordering. Every angle, every detail — visually immersive." },
  { icon: CreditCard, title: "Instant Ordering & Payment", desc: "Order and pay directly from the table. No waiting for staff. No bill-splitting headaches." },
  { icon: Globe, title: "No App Required", desc: "Works directly in the browser via QR code. Zero downloads, zero friction." },
  { icon: Palette, title: "Custom Branding", desc: "Match your restaurant's identity with fully customizable themes, colors, and layouts." },
  { icon: UtensilsCrossed, title: "Table-Based Ordering", desc: "Smart table management with automatic order routing to the kitchen." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Track popular dishes, peak hours, average order values, and customer preferences." },
];

const benefits = [
  { icon: Clock, metric: "22%", label: "Faster table turnover" },
  { icon: TrendingUp, metric: "15%", label: "Higher average order value" },
  { icon: Users, metric: "60%", label: "Reduced wait time" },
  { icon: Heart, metric: "95%", label: "Customer satisfaction" },
];

// const dataPoints = [
//   { metric: "500+", label: "Restaurants using Bite" },
//   { metric: "1M+", label: "Orders processed monthly" },
//   { metric: "₹50Cr+", label: "Transaction volume annually" },
//   { metric: "4.8/5", label: "Average restaurant rating" },
// ];

const perfectFor = [
  { 
    name: "Fine Dining Restaurants", 
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop"
  },
  { 
    name: "Casual Dining Chains", 
    icon: Building2,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop"
  },
  { 
    name: "Cafés & Bistros", 
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
  },
  { 
    name: "Quick Service", 
    icon: Zap,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop"
  },
  { 
    name: "Hotel Dining", 
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
  },
  { 
    name: "Food Courts", 
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop"
  },
];

const bitePricing = [
  { name: "Digital Menu", price: 399, yearlyPrice: 3999, features: ["QR code menu access", "Basic dish listings", "Image gallery", "Standard branding", "Email support", "Up to 50 menu items"] },
  { name: "Bite POS", price: 599, yearlyPrice: 5999, popular: true, features: ["Everything in Digital Menu", "Complete POS system", "Table management", "Order tracking", "Payment integration", "Kitchen display", "Analytics dashboard", "Priority support"] },
  // { name: "Chain Restaurants", price: 10000, yearlyPrice: 102000, features: ["Everything in Bite POS", "Up to 10 branches", "Centralized dashboard", "Multi-location analytics", "Unified menu management", "Cross-branch reporting", "Dedicated account manager", "Custom integrations", "24/7 premium support"] },
];

const BitePage = () => {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="w-full h-full" density={50} size={1.2} speed={0.3} color="hsl(217 91% 60%)" opacity={0.15} />
        </div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full glow-bg pointer-events-none opacity-30" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <a
                href="https://info.bite.dequeue.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-base text-primary font-semibold mb-6 transition-all cursor-pointer group"
              >
                <Info className="w-5 h-5 mr-2" />
                Dequeue Bite
                <span className="text-muted-foreground ml-2 font-normal group-hover:text-primary transition-colors">
                  — See how it works
                </span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 leading-[1.05]">
                The Future of <span className="gradient-text">Dining.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                Bite transforms restaurant menus into immersive digital experiences. Customers explore dishes in interactive 3D, order instantly, and pay without waiting for staff. Fully customizable to your brand.
              </p>
              <p className="text-sm text-primary font-heading font-semibold mb-8">No queues. Just #Dequeue.</p>

              {/* CLEANED UP CTA GROUP */}
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Request Demo <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>

            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ y }}>
              <div className="relative rounded-3xl overflow-hidden liquid-glass-card">
                <img src={biteImg} alt="Dequeue Bite restaurant ordering" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="liquid-glass-card p-4 rounded-2xl">
                    <p className="text-sm font-heading font-semibold">Interactive 3D menus. Instant ordering. No app needed.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 page-section" ref={featuresRef}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">Features</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Revolutionize Your Menu</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30, rotateY: -5 }} animate={featuresInView ? { opacity: 1, y: 0, rotateY: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="liquid-glass-card p-6 group hover:border-primary/30 transition-all duration-500">
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
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Real Results</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.label} initial={{ opacity: 0, scale: 0.8 }} animate={benefitsInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }} className="liquid-glass-card p-8 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-4xl font-bold font-heading gradient-text mb-2">{b.metric}</p>
                <p className="text-sm text-muted-foreground">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sell Points Section */}
      {/* <section className="py-16 page-section border-t border-border/50">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {dataPoints.map((d, i) => (
              <motion.div 
                key={d.label} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: i * 0.1 }} 
                className="text-center"
              >
                <p className="text-3xl lg:text-4xl font-bold font-heading gradient-text mb-2">{d.metric}</p>
                <p className="text-sm text-muted-foreground">{d.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-24 page-section">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading">Perfect For</h2>
          </motion.div>
          
          {/* Increased max-w to 5xl to give the images room to breathe */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {perfectFor.map((item, i) => (
              <motion.div 
                key={item.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: i * 0.1 }} 
                // Changed to flex-col and added 'group' for hover effects
                className="flex flex-col liquid-glass-card p-2 rounded-2xl group overflow-hidden"
              >
                {/* Top Section: Icon and Title */}
                <div className="flex items-center gap-3 p-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold">{item.name}</span>
                </div>
                
                {/* Bottom Section: Image with hover zoom */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden mt-1">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductPricing productName="Bite" plans={bitePricing} />
      <BulkBookings type="restaurant" />
      <CTASection />
      <Footer />
    </div>
  );
};

export default BitePage;