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
    filter: "blur(12px)",
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoother motion
      filter: { duration: 0.6 },
      scale: { duration: 0.7 }
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      duration: 0.6
    },
  },
};

const floatingParticle: Variants = {
  animate: {
    y: [0, -80, 0],
    x: [0, 25, 0],
    opacity: [0.3, 0.8, 0.3],
    scale: [0.8, 1.3, 0.8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0,
    },
  },
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image with continuous slow pan */}
    <motion.div
      className="absolute inset-[-10%]"
      animate={{
        scale: [1, 1.05, 1.02, 1.04, 1],
        x: [0, 12, -8, 4, 0],
        y: [0, -8, 4, -4, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{ willChange: "transform" }}
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
        x: ["-50%", "-35%", "-50%", "-65%", "-50%"],
        y: ["-50%", "-55%", "-45%", "-60%", "-50%"],
        scale: [1, 1.15, 0.95, 1.08, 1],
        opacity: [0.25, 0.45, 0.2, 0.4, 0.25],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
      style={{
        top: "50%",
        left: "50%",
        willChange: "transform, opacity"
      }}
    />
    <motion.div
      className="absolute w-[350px] h-[350px] rounded-full bg-primary/8 pointer-events-none blur-3xl"
      animate={{
        x: [0, 60, 30, -45, 0],
        y: [0, -40, 25, -15, 0],
        opacity: [0.12, 0.3, 0.18, 0.35, 0.12],
        scale: [0.9, 1.1, 0.95, 1.05, 0.9],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 2
      }}
      style={{
        top: "30%",
        left: "20%",
        willChange: "transform, opacity"
      }}
    />
    <motion.div
      className="absolute w-[280px] h-[280px] rounded-full bg-primary/6 pointer-events-none blur-3xl"
      animate={{
        x: [0, -35, 50, -25, 0],
        y: [0, 35, -25, 40, 0],
        opacity: [0.08, 0.25, 0.12, 0.3, 0.08],
        scale: [0.85, 1.15, 0.9, 1.08, 0.85],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 4
      }}
      style={{
        bottom: "20%",
        right: "15%",
        willChange: "transform, opacity"
      }}
    />

    {/* Floating particles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30 pointer-events-none"
        style={{
          top: `${20 + i * 12}%`,
          left: `${10 + i * 15}%`,
          willChange: "transform, opacity"
        }}
        variants={floatingParticle}
        animate="animate"
        transition={{
          duration: 5 + i * 0.5,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
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
        {/* Badge with continuous shimmer */}
        <motion.div variants={scaleIn}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary mb-8 relative overflow-hidden"
            animate={{
              borderColor: ["hsl(220 15% 14%)", "hsl(217 91% 60% / 0.3)", "hsl(220 15% 14%)"],
              boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.1)", "0 0 0px rgba(59, 130, 246, 0)"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ willChange: "border-color, box-shadow" }}
          >
            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(217 91% 60% / 0.06), transparent)",
                willChange: "transform"
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 4
              }}
            />
            <motion.span
              className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{ willChange: "transform" }}
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
              willChange: "background-position"
            }}
            animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Just #Dequeue.
          </motion.span>
        </motion.h1>

        {/* Subtext with gentle breathing */}
        <motion.p
          variants={fadeUp}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          animate={{
            opacity: [0.9, 1, 0.9],
            y: [0, -2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 1
          }}
          style={{ willChange: "opacity, transform" }}
        >
          Dequeue builds the infrastructure that eliminates checkout lines forever. Four customizable products. One mission. Scan. Pay. Go.
        </motion.p>

        {/* Buttons with continuous glow pulse */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", damping: 25, stiffness: 400 }
            }}
            whileTap={{
              scale: 0.98,
              transition: { type: "spring", damping: 25, stiffness: 400 }
            }}
            animate={{
              boxShadow: [
                "0 0 0px hsl(217 91% 60% / 0)",
                "0 0 30px hsl(217 91% 60% / 0.2)",
                "0 0 0px hsl(217 91% 60% / 0)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="rounded-lg"
            style={{ willChange: "transform, box-shadow" }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in touch
                <motion.span
                  className="inline-block ml-1"
                  animate={{
                    x: [0, 6, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{ willChange: "transform" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", damping: 25, stiffness: 400 }
            }}
            whileTap={{
              scale: 0.98,
              transition: { type: "spring", damping: 25, stiffness: 400 }
            }}
            style={{ willChange: "transform" }}
          >
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
        — Engineered for modern retail.
      </motion.p>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default Hero;
