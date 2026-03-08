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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image with continuous slow pan */}
    <motion.div
      className="absolute inset-[-10%]"
      animate={{
        scale: [1, 1.08, 1.03, 1.06, 1],
        x: [0, 15, -10, 5, 0],
        y: [0, -10, 5, -5, 0],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
    >
      <img
        src={heroImg}
        alt="Futuristic queue-free retail store"
        className="w-full h-full object-cover opacity-[0.07]"
      />
    </motion.div>

    {/* Continuously orbiting glow orbs */}
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full glow-bg pointer-events-none"
      animate={{
        x: ["-50%", "-30%", "-50%", "-70%", "-50%"],
        y: ["-50%", "-60%", "-40%", "-55%", "-50%"],
        scale: [1, 1.2, 0.9, 1.1, 1],
        opacity: [0.3, 0.5, 0.25, 0.45, 0.3],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }}
      style={{ top: "50%", left: "50%" }}
    />
    <motion.div
      className="absolute w-[350px] h-[350px] rounded-full bg-primary/8 pointer-events-none blur-3xl"
      animate={{
        x: [0, 80, 40, -60, 0],
        y: [0, -50, 30, -20, 0],
        opacity: [0.15, 0.35, 0.2, 0.4, 0.15],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" as const }}
      style={{ top: "30%", left: "20%" }}
    />
    <motion.div
      className="absolute w-[280px] h-[280px] rounded-full bg-primary/6 pointer-events-none blur-3xl"
      animate={{
        x: [0, -40, 60, -30, 0],
        y: [0, 40, -30, 50, 0],
        opacity: [0.1, 0.3, 0.15, 0.35, 0.1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const, delay: 3 }}
      style={{ bottom: "20%", right: "15%" }}
    />

    {/* Floating particles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30 pointer-events-none"
        style={{
          top: `${20 + i * 12}%`,
          left: `${10 + i * 15}%`,
        }}
        animate={{
          y: [0, -60 - i * 10, 0],
          x: [0, (i % 2 === 0 ? 20 : -20), 0],
          opacity: [0, 0.6, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 4 + i * 0.8,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: i * 0.7,
        }}
      />
    ))}

    <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge with continuous shimmer */}
        <motion.div variants={scaleIn}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary mb-8 relative overflow-hidden"
            animate={{ borderColor: ["hsl(220 15% 14%)", "hsl(217 91% 60% / 0.4)", "hsl(220 15% 14%)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          >
            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, hsl(217 91% 60% / 0.08), transparent)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const, repeatDelay: 3 }}
            />
            <motion.span
              className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
            >
              New
            </motion.span>
            <span className="text-sm text-muted-foreground">Queue-Free Retail Technology</span>
          </motion.div>
        </motion.div>

        {/* Heading with continuous gradient shift on #Dequeue */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-[1.05] mb-6 text-balance"
        >
          Why Wait in Queues?<br />
          <motion.span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, hsl(217 91% 60%), hsl(199 89% 48%), hsl(280 80% 60%), hsl(217 91% 60%))",
              backgroundSize: "300% 100%",
            }}
            animate={{ backgroundPosition: ["0% center", "100% center"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
          >
            Just #Dequeue.
          </motion.span>
        </motion.h1>

        {/* Subtext with gentle breathing */}
        <motion.p
          variants={fadeUp}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >
          Dequeue builds the infrastructure that eliminates checkout lines forever. Four customizable products. One mission. Scan. Pay. Go.
        </motion.p>

        {/* Buttons with continuous glow pulse */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: ["0 0 0px hsl(217 91% 60% / 0)", "0 0 25px hsl(217 91% 60% / 0.3)", "0 0 0px hsl(217 91% 60% / 0)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
            className="rounded-lg"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in touch
                <motion.span
                  className="inline-block ml-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
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

      {/* Bottom trust line with pulsing highlight */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-20 text-sm text-muted-foreground"
      >
        Skip the queue.{" "}
        <motion.span
          className="text-primary font-heading font-semibold inline-block"
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
        >
          #Dequeue
        </motion.span>{" "}
        — Trusted by retailers and restaurants across India
      </motion.p>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default Hero;
