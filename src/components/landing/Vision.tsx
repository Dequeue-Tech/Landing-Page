import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Vision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 page-section relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 glow-bg opacity-30 pointer-events-none" />
      <div className="section-container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Our Vision
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-8">
            Reimagining Retail Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We are building a new infrastructure layer for global commerce — one where transactions are instant,
            operations are intelligent, and customers never have to wait.
          </p>
          <p className="text-lg text-foreground font-medium font-heading mb-3">
            The future of retail is seamless. And it starts with{" "}
            <span className="gradient-text">Dequeue</span>.
          </p>
          <p className="text-sm text-primary font-heading font-semibold">
            Why wait in queues? Just #Dequeue.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
