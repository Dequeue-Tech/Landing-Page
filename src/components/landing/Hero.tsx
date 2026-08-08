import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-retail.jpg";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
    {/* Optimized Background Image Layer */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img
        src={heroImg}
        alt="Futuristic queue-free retail environment"
        className="w-full h-full object-cover opacity-10 filter contrast-125 select-none"
        decoding="async"
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
    </div>

    {/* GPU Accelerated Ambient Light Orbs */}
    <div
      className="absolute w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none -top-20 -left-20 animate-pulse-glow"
      style={{ willChange: "opacity, transform" }}
    />
    <div
      className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none -bottom-20 -right-20 animate-pulse"
      style={{ animationDuration: "8s", willChange: "opacity" }}
    />

    <div className="section-container relative z-10 text-center max-w-4xl mx-auto px-4">
      {/* Interactive Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8 hover:border-primary/60 transition-all cursor-pointer group">
        <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Frictionless Retail OS
        </span>
        <span className="text-xs text-muted-foreground hidden sm:inline">|</span>
        <span className="text-xs text-foreground/90 font-medium hidden sm:inline-flex items-center gap-1 group-hover:text-primary transition-colors">
          Scan. Pay. Go.
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading leading-[1.08] tracking-tight mb-6 text-balance">
        Why Wait in Queues?
        <br />
        <span className="bg-gradient-to-r from-primary via-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
          Just #Dequeue.
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
        Dequeue builds the zero-line infrastructure powering mobile checkouts, smart carts, touchless restaurant ordering, and autonomous dark stores.
      </p>

      {/* Primary Actions */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
        <Button
          variant="hero"
          size="lg"
          className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          asChild
        >
          <Link to="/contact" className="flex items-center gap-2">
            Get Started Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          variant="heroOutline"
          size="lg"
          className="h-12 px-8 text-base backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
          asChild
        >
          <Link to="/products">Explore Solutions</Link>
        </Button>
      </div>

      {/* Feature Micro-Badges */}
      <div className="pt-8 border-t border-border/40 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
        <div className="flex items-start gap-3 p-3 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Instant Checkout</div>
            <div className="text-[11px] text-muted-foreground">&lt; 0.2s item scan processing</div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Zero Terminal Cost</div>
            <div className="text-[11px] text-muted-foreground">Works on any mobile device</div>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 flex items-start gap-3 p-3 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Seamless POS Sync</div>
            <div className="text-[11px] text-muted-foreground">Plug &amp; play integration</div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Gradient Overlay */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default Hero;
