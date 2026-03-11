import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import BulkBookings from "@/components/landing/BulkBookings";
import ComingSoon from "@/components/landing/ComingSoon";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Smartphone, RefreshCw, Plug, Settings, ArrowRight, Check, Zap, TrendingUp, Clock, Shield } from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import swiftImg from "@/assets/product-swift.jpg";

const features = [
  { icon: ShoppingCart, title: "Modular Smart Cart", desc: "Lightweight, modular hardware that attaches to existing carts. Retrofits to any standard retail cart." },
  { icon: RefreshCw, title: "Real-Time Cart Sync", desc: "Products are tracked instantly as they're placed in or removed from the cart. Always accurate." },
  { icon: Smartphone, title: "Smartphone Integration", desc: "Syncs with the customer's phone for a complete digital checkout experience." },
  { icon: Plug, title: "Plug-and-Play", desc: "Install in hours, not weeks. No major store renovations or infrastructure changes required." },
  { icon: Settings, title: "Retail Compatibility", desc: "Works with existing POS, ERP, and inventory management systems seamlessly." },
  { icon: Shield, title: "Anti-Theft Protection", desc: "Built-in weight sensors and RFID verification prevent shrinkage and loss." },
];

const stats = [
  { icon: Clock, metric: "50%", label: "Faster shopping journeys" },
  { icon: Zap, metric: "Zero", label: "Checkout infrastructure needed" },
  { icon: TrendingUp, metric: "35%", label: "Higher store efficiency" },
  { icon: Shield, metric: "99.8%", label: "Accuracy rate" },
];

const swiftPricing = [
  { name: "Swift Basic", price: 1499, yearlyPrice: 14999, features: ["Up to 20 smart carts", "Basic cart sync", "Standard analytics", "Email support", "Single store"] },
  { name: "Swift Pro", price: 3499, yearlyPrice: 34999, popular: true, features: ["Up to 100 smart carts", "Real-time sync + AI", "Advanced analytics", "Priority support", "Up to 5 stores", "Anti-theft system"] },
  { name: "Swift Enterprise", price: 7999, yearlyPrice: 79999, features: ["Unlimited smart carts", "Full AI integration", "Custom development", "Dedicated manager", "Unlimited stores", "SLA guarantee"] },
];

const SwiftPage = () => {
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="w-full h-full" density={50} size={1.2} speed={0.3} color="hsl(217 91% 60%)" opacity={0.15} />
        </div>
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full glow-bg pointer-events-none opacity-30" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-semibold mb-6">Dequeue Swift</span>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 leading-[1.05]">
                The Smart Cart That <span className="gradient-text">Ends Checkout.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                Swift is a modular smart cart system that synchronizes with a customer's smartphone for real-time checkout. Place products, track purchases, pay without visiting a counter. Fully customizable.
              </p>
              <p className="text-sm text-primary font-heading font-semibold mb-8">Queue less. Live more. #Dequeue</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild><Link to="/contact">Request Demo <ArrowRight className="ml-1 w-4 h-4" /></Link></Button>
                <Button variant="heroOutline" size="lg" asChild><Link to="/pricing">View Pricing</Link></Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ y }}>
              <div className="relative rounded-3xl overflow-hidden liquid-glass-card">
                <img src={swiftImg} alt="Dequeue Swift smart cart" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="liquid-glass-card p-4 rounded-2xl">
                    <p className="text-sm font-heading font-semibold">Real-time cart sync. Smartphone-powered checkout.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 page-section">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">How Swift Works</h2>
            <p className="text-lg text-muted-foreground">A seamless bridge between physical shopping and digital checkout.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: "01", title: "Attach & Connect", desc: "Clip the Swift module onto any cart and pair via your smartphone." },
              { num: "02", title: "Shop Freely", desc: "Add items to your cart — Swift tracks everything in real-time." },
              { num: "03", title: "Pay & Walk Out", desc: "Review your cart on your phone, pay digitally, and leave." },
            ].map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="liquid-glass-card p-8 text-center">
                <span className="text-3xl font-bold font-heading gradient-text">{step.num}</span>
                <h3 className="font-heading font-bold text-xl mt-4 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 page-section" ref={featuresRef}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">Features</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Smart Cart Technology</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="liquid-glass-card p-6 group hover:border-primary/30 transition-all duration-500">
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

      <section className="py-24 page-section relative overflow-hidden" ref={statsRef}>
        <div className="absolute inset-0 glow-bg opacity-20 pointer-events-none" />
        <div className="section-container relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} animate={statsInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }} className="liquid-glass-card p-8 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-4xl font-bold font-heading gradient-text mb-2">{s.metric}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <ProductPricing productName="Swift" plans={swiftPricing} /> */}
      <ComingSoon 
   productName="Swift" 
        description="Our revolutionary smart cart system is almost ready. Experience the future of retail - where shopping carts think, sync, and simplify your journey. Be the first to transform your store."
      />
      {/* <BulkBookings type="retail" /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default SwiftPage;
