import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Heart, BarChart3, Scaling } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Eliminate Queues", desc: "Remove checkout bottlenecks from every store and restaurant." },
  { icon: TrendingUp, title: "Increase Conversions", desc: "Faster checkout means more completed purchases." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Deliver the seamless experience modern shoppers expect." },
  { icon: BarChart3, title: "Retail Analytics", desc: "Unlock real-time insights into shopping behavior." },
  { icon: Scaling, title: "Scale Effortlessly", desc: "Infrastructure that grows with your business." },
];

const WhyDequeue = () => {
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
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            Built for Modern Retail
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-2">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDequeue;
