import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 section-bg-gradient-radial" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative glass-card p-12 lg:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 glow-bg opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-lg text-primary font-heading font-bold mb-4">Skip the queue. #Dequeue</p>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
              Ready to Eliminate Queues?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4">
              Join the retailers and restaurants transforming their business with Dequeue's queue-free, fully customizable technology suite — built to fit your needs.
            </p>
            <p className="text-sm text-muted-foreground italic mb-8">
              4 products today. An ever-growing ecosystem tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get in touch <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/products">Explore products</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
