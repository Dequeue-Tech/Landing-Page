import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Layers, ArrowRight } from "lucide-react";

const Solution = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 page-section section-bg-mesh" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Our Solution
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Commerce Without Waiting
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-3">
            Our ever-growing technology suite enables retailers and restaurants to eliminate waiting lines, streamline payments, and create seamless customer journeys — fully customizable to your business.
          </p>
          <p className="text-sm text-primary font-heading font-semibold">
            Why wait in queues? Just #Dequeue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
