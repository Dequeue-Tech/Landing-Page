import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
    <section className="py-24 lg:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary font-medium mb-4 font-heading">The Problem</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6 text-balance">
            Retail Still Runs on{" "}
            <span className="gradient-text">Queues</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a world where money moves in seconds, customers still spend minutes waiting in checkout lines.
            Retail may be going digital — but checkout infrastructure hasn't caught up. <strong className="text-foreground">Until now.</strong>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <point.icon className="w-6 h-6 text-destructive" />
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
