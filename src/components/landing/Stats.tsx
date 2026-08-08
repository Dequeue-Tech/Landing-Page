import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "< 0.2s", label: "Scan & Pay Speed" },
  { value: "0", label: "POS Terminals Needed" },
  { value: "99.9%", label: "Platform Uptime SLA" },
  { value: "100%", label: "Contactless Hardware" },
  { value: "24/7", label: "Instant Developer API" },
  { value: "Real-Time", label: "Store Analytics" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section className="py-20 lg:py-28 page-section relative overflow-hidden section-bg-gradient-radial" ref={ref}>
      <div className="absolute inset-0 glow-bg opacity-15 pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Performance Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
            Engineered for High-Scale Retail.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="liquid-glass-card p-5 text-center group hover:border-primary/40 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform">
                {s.value}
              </p>
              <p className="text-xs font-medium text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

