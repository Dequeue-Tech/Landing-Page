import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Layers, ArrowRight } from "lucide-react";

const Solution = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 glow-bg opacity-30 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-medium mb-4 font-heading">The Dequeue Solution</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Commerce <span className="gradient-text">Without Waiting</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Dequeue is building the infrastructure layer for queue-free retail. Our technology suite enables retailers
            and restaurants to eliminate waiting lines, streamline payments, and create seamless customer journeys.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Software-Only Checkout",
              desc: "No new hardware needed. Turn any smartphone into a checkout terminal instantly.",
            },
            {
              icon: Layers,
              title: "Full-Stack Platform",
              desc: "From mobile POS to autonomous fulfillment — one integrated ecosystem for modern retail.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
