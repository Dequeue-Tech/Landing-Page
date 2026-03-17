import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(217_91%_60%_/_0.14),transparent_42%),linear-gradient(180deg,hsl(220_15%_10%),hsl(220_15%_7%))] pointer-events-none" />
    <div className="absolute top-[12%] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl pointer-events-none" />
    <div className="absolute left-[12%] top-[28%] h-[18rem] w-[18rem] rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />
    <div className="absolute bottom-[12%] right-[10%] h-[16rem] w-[16rem] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

    <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary mb-8">
        <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">New</span>
        <span className="text-sm text-muted-foreground">Queue-Free Retail Technology</span>
      </div>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-[1.05] mb-6 text-balance">
        Why Wait in Queues?
        <br />
        <span
          className="inline-block bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, hsl(217 91% 60%), hsl(199 89% 48%), hsl(280 80% 60%), hsl(217 91% 60%))",
            backgroundSize: "300% 100%",
          }}
        >
          Just #Dequeue.
        </span>
      </h1>

      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
        Dequeue builds the infrastructure that eliminates checkout lines forever. Four customizable products. One
        mission. Scan. Pay. Go.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            Get in touch
            <span className="inline-flex ml-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <Link to="/products">View products</Link>
        </Button>
      </div>

      <p className="mt-20 text-sm text-muted-foreground">
        Skip the queue. <span className="text-primary font-heading font-semibold inline-block">#Dequeue</span> -
        Engineered for modern retail.
      </p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default Hero;
