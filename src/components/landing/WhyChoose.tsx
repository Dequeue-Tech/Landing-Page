import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, BarChart3, Headphones, Globe, Cog } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Zero Downtime", desc: "99.99% uptime guarantee. Your checkout never stops." },
  { icon: Shield, title: "PCI Compliant", desc: "Bank-grade security for every transaction." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Live dashboards with actionable insights." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support team for Enterprise clients." },
  { icon: Globe, title: "Multi-Location", desc: "Deploy across hundreds of stores from one dashboard." },
  { icon: Cog, title: "API-First", desc: "Seamless integration with your existing tech stack." },
];

const WhyChoose = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 page-section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Why Dequeue
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Built for Modern Retail
          </h2>
          <p className="text-lg text-muted-foreground">
            Retailers choose Dequeue because we remove friction from the shopping experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="liquid-glass-card p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
