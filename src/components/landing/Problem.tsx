import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ShoppingCart, Frown, TrendingDown } from "lucide-react";

const painPoints = [
  { icon: TrendingDown, label: "Lost Sales", desc: "Customers abandon purchases when lines are long" },
  { icon: ShoppingCart, label: "Abandoned Carts", desc: "70% of shoppers leave due to long checkout times" },
  { icon: Frown, label: "Frustrated Customers", desc: "Poor experience drives customers to competitors" },
  { icon: Clock, label: "Low Throughput", desc: "Stores limited by physical checkout bottlenecks" },
];

const Problem = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 page-section section-bg-dots" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            The Problem
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Retail Still Runs on Queues
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a world where money moves in seconds, customers still spend minutes waiting in checkout lines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{point.label}</h3>
              <p className="text-sm text-muted-foreground">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
