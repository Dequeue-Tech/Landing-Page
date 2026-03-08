import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-retail.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image very subtle */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Futuristic queue-free retail store" className="w-full h-full object-cover opacity-[0.07]" />
    </div>

    {/* Purple glow orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-bg pointer-events-none animate-pulse-glow" />

    <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary mb-8">
          <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">New</span>
          <span className="text-sm text-muted-foreground">Queue-Free Retail Technology</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-[1.05] mb-6 text-balance">
          Why Wait in Queues?<br />
          <span className="gradient-text">Just #Dequeue.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Dequeue builds the infrastructure that eliminates checkout lines forever. Four customizable products. One mission. Scan. Pay. Go.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get in touch <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/products">View products</Link>
          </Button>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-20 text-sm text-muted-foreground"
      >
        Trusted by retailers and restaurants across India
      </motion.p>
    </div>
  </section>
);

export default Hero;
