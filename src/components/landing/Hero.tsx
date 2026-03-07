import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Scan } from "lucide-react";
import heroImg from "@/assets/hero-retail.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient-bg">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Futuristic queue-free retail store" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Glow effect */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-bg pointer-events-none" />

    <div className="section-container relative z-10 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Scan className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Scan. Pay. Go.</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-heading leading-[0.95] mb-6 text-balance">
          The End of{" "}
          <span className="gradient-text">Queues.</span>
        </h1>

        <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
          Retail should move at the speed of digital payments.
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mb-10">
          Dequeue builds the infrastructure that eliminates checkout lines forever. From mobile checkout to smart carts and autonomous dark stores.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Request Demo <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#products">Explore Products</a>
          </Button>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border/50"
      >
        {[
          { value: "4", label: "Products" },
          { value: "0", label: "Queues" },
          { value: "<3s", label: "Avg Checkout" },
          { value: "100%", label: "Digital" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl lg:text-4xl font-bold font-heading gradient-text">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
