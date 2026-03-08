import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Retail Locations" },
  { value: "2M+", label: "Transactions Processed" },
  { value: "80%", label: "Faster Checkouts" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "₹50Cr+", label: "Revenue Processed" },
  { value: "15+", label: "Cities in India" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 page-section relative overflow-hidden section-bg-gradient-radial" ref={ref}>
      <div className="absolute inset-0 glow-bg opacity-20 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            By the Numbers
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            Trusted Across India
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
              className="liquid-glass-card p-6 text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold font-heading gradient-text mb-2">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
