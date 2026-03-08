import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Brain,
  Package,
  BarChart3,
  Clock,
  Plug,
  ArrowRight,
  Zap,
  TrendingDown,
  Scaling,
  Shield,
  Cpu,
  Boxes,
  Truck,
} from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import hermitImg from "@/assets/product-hermit.jpg";

const capabilities = [
  { icon: Brain, title: "AI Demand Forecasting", desc: "Predict demand patterns using machine learning. Reduce waste and ensure optimal stock levels at all times." },
  { icon: Boxes, title: "Automated Inventory", desc: "Real-time inventory tracking with automatic reordering. Never run out of stock, never over-order." },
  { icon: Package, title: "Intelligent Picking", desc: "Robotic picking and packing systems optimized for speed and accuracy. Orders fulfilled in minutes." },
  { icon: Clock, title: "24/7 Operations", desc: "Fully autonomous operations around the clock. No shifts, no breaks, no human intervention needed." },
  { icon: Plug, title: "Plug-and-Play", desc: "Modular deployment that adapts to any warehouse or dark store space." },
  { icon: Truck, title: "Smart Dispatch", desc: "AI-optimized delivery routing and scheduling for fastest possible fulfillment." },
];

const impact = [
  { icon: Zap, metric: "10x", label: "Faster order fulfillment" },
  { icon: TrendingDown, metric: "60%", label: "Lower operational costs" },
  { icon: Scaling, metric: "∞", label: "Scalable infrastructure" },
  { icon: Shield, metric: "0", label: "Human intervention" },
];

const techPillars = [
  { title: "Computer Vision", desc: "Advanced object recognition for autonomous picking and quality control." },
  { title: "Reinforcement Learning", desc: "Self-optimizing systems that improve efficiency over time." },
  { title: "IoT Sensor Network", desc: "Real-time environmental monitoring and equipment health tracking." },
  { title: "Edge Computing", desc: "Low-latency processing for instant decision-making in the warehouse." },
];

const HermitPage = () => {
  const capRef = useRef(null);
  const impactRef = useRef(null);
  const capInView = useInView(capRef, { once: true, margin: "-100px" });
  const impactInView = useInView(impactRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="w-full h-full" density={80} size={1.5} speed={0.3} color="hsl(262 83% 58%)" opacity={0.2} />
        </div>
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] rounded-full glow-bg pointer-events-none opacity-30" />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-semibold mb-6">
                Dequeue Hermit
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 leading-[1.05]">
                Autonomous{" "}
                <span className="gradient-text">Retail Infrastructure.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                A fully autonomous, AI-powered dark store platform that manages the entire fulfillment process —
                from demand forecasting to picking, packing, and dispatch — without human intervention.
              </p>
              <p className="text-base text-foreground/80 font-medium font-heading mb-8">
                Hermit doesn't just automate retail. It redefines it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Request Demo <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ y }}
            >
              <div className="relative rounded-3xl overflow-hidden liquid-glass-card">
                <img src={hermitImg} alt="Dequeue Hermit autonomous dark store" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="liquid-glass-card p-4 rounded-2xl">
                    <p className="text-sm font-heading font-semibold">AI-powered. Fully autonomous. Zero human intervention.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Hermit Works */}
      <section className="py-24 page-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">The Hermit Pipeline</h2>
            <p className="text-lg text-muted-foreground">End-to-end autonomous fulfillment.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Forecast", desc: "AI predicts demand and optimizes inventory levels automatically." },
              { num: "02", title: "Pick", desc: "Robotic systems pick products with precision and speed." },
              { num: "03", title: "Pack", desc: "Intelligent packing optimizes for space, weight, and fragility." },
              { num: "04", title: "Dispatch", desc: "Smart routing ensures fastest delivery to the customer." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="liquid-glass-card p-8 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <span className="text-3xl font-bold font-heading gradient-text">{step.num}</span>
                <h3 className="font-heading font-bold text-xl mt-4 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 page-section" ref={capRef}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
              Capabilities
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Full-Stack Autonomy
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={capInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="liquid-glass-card p-6 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Pillars */}
      <section className="py-24 page-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
              Built on Advanced AI
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {techPillars.map((tp, i) => (
              <motion.div
                key={tp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass-card p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">{tp.title}</h3>
                  <p className="text-sm text-muted-foreground">{tp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 page-section relative overflow-hidden" ref={impactRef}>
        <div className="absolute inset-0 glow-bg opacity-20 pointer-events-none" />
        <div className="section-container relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impact.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={impactInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                className="liquid-glass-card p-8 text-center"
              >
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default HermitPage;
