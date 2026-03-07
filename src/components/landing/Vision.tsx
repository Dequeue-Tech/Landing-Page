import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Vision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 glow-bg pointer-events-none" />
      <div className="section-container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-primary font-medium mb-4 font-heading">Our Vision</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-heading mb-8 leading-tight">
            Reimagining{" "}
            <span className="gradient-text">Retail Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            We are building a new infrastructure layer for global commerce — one where transactions are instant,
            operations are intelligent, and customers never have to wait.
          </p>
          <p className="text-lg text-foreground font-medium font-heading">
            The future of retail is seamless. And it starts with{" "}
            <span className="gradient-text">Dequeue</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
