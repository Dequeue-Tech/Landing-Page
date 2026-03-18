import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-retail.jpg";

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ⚡ Performance: Use only transform animations (will-change hints added)
const floatingParticle: Variants = {
  animate: {
    y: [0, -80, 0],
    x: [0, 25, 0],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image - reduced scale animation for performance */}
    <motion.div
      className="absolute inset-[-10%]"
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ willChange: "transform" }}
    >
      <img
        src={heroImg}
        alt="Futuristic queue-free retail store"
        className="w-full h-full object-cover opacity-[0.07]"
        decoding="async"
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        style={{ contentVisibility: "auto" }}
      />
    </motion.div>

    {/* Main glow orb - simplified motion */}
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full glow-bg pointer-events-none"
      animate={{
        x: ["-50%", "-40%", "-50%"],
        y: ["-50%", "-55%", "-50%"],
        opacity: [0.25, 0.45, 0.25],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        top: "50%",
        left: "50%",
        willChange: "transform, opacity",
      }}
    />

    {/* Secondary glow orb */}
    <motion.div
      className="absolute w-[350px] h-[350px] rounded-full bg-primary/8 pointer-events-none blur-3xl"
      animate={{
        x: [0, 40, 0],
        y: [0, -30, 0],
        opacity: [0.12, 0.3, 0.12],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      style={{
        top: "30%",
        left: "20%",
        willChange: "transform, opacity",
      }}
    />

    {/* Tertiary glow orb */}
    <motion.div
      className="absolute w-[280px] h-[280px] rounded-full bg-primary/6 pointer-events-none blur-3xl"
      animate={{
        x: [0, -30, 0],
        y: [0, 30, 0],
        opacity: [0.08, 0.25, 0.08],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 4,
      }}
      style={{
        bottom: "20%",
        right: "15%",
        willChange: "transform, opacity",
      }}
    />

    {/* Floating particles - only 3 instead of 6 for performance */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30 pointer-events-none"
        style={{
          top: `${20 + i * 24}%`,
          left: `${10 + i * 30}%`,
          willChange: "transform, opacity",
        }}
        variants={floatingParticle}
        animate="animate"
        transition={{
          duration: 5 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.8,
        }}
      />
    ))}

    <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge - simplified animation */}
        <motion.div variants={scaleIn}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary mb-8">
            <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              New
            </span>
            <span className="text-sm text-muted-foreground">Queue-Free Retail Technology</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-[1.05] mb-6 text-balance"
        >
          Why Wait in Queues?<br />
          <span className="inline-block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Just #Dequeue.
          </span>
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
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", damping: 25, stiffness: 400 },
            }}
            whileTap={{
              scale: 0.98,
              transition: { type: "spring", damping: 25, stiffness: 400 },
            }}
            className="rounded-lg"
            style={{ willChange: "transform" }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in touch
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", damping: 25, stiffness: 400 },
            }}
            whileTap={{
              scale: 0.98,
              transition: { type: "spring", damping: 25, stiffness: 400 },
            }}
            style={{ willChange: "transform" }}
          >
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
        Skip the queue. <span className="text-primary font-heading font-semibold">#Dequeue</span> — Engineered for modern retail.
      </motion.p>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default Hero;
