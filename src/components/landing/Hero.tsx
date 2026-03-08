import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-retail.jpg";

const floatingOrb = {
  animate: {
    y: [0, -30, 0],
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image with slow zoom */}
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <img
        src={heroImg}
        alt="Futuristic queue-free retail store"
        className="w-full h-full object-cover opacity-[0.07]"
      />
    </motion.div>

    {/* Animated glow orbs */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-bg pointer-events-none"
      {...floatingOrb}
    />
    <motion.div
      className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 pointer-events-none blur-3xl"
      animate={{ y: [0, 20, 0], x: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-primary/5 pointer-events-none blur-3xl"
      animate={{ y: [0, -25, 0], x: [0, 10, 0], opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={scaleIn}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary mb-8">
            <motion.span
              className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              New
            </motion.span>
            <span className="text-sm text-muted-foreground">Queue-Free Retail Technology</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-[1.05] mb-6 text-balance"
        >
          Why Wait in Queues?<br />
          <motion.span
            className="gradient-text inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            Just #Dequeue.
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Dequeue builds the infrastructure that eliminates checkout lines forever. Four customizable products. One mission. Scan. Pay. Go.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in touch <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/products">View products</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom trust line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-20 text-sm text-muted-foreground"
      >
        Skip the queue. <span className="text-primary font-heading font-semibold">#Dequeue</span> — Trusted by retailers and restaurants across India
      </motion.p>
    </div>

    {/* Bottom gradient fade */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    />
  </section>
);

export default Hero;
