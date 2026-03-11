import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Layers, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "@/components/ui/sparkles";

const tiers = [
  {
    name: "Starter",
    description: "Perfect for small retailers and restaurants getting started with digital transformation.",
    icon: Zap,
    features: [
      "Mobile checkout system",
      "Digital menu solutions",
      "Basic analytics",
      "Email support",
      "Single location",
    ],
    cta: "Explore Starter",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Business",
    description: "Best for growing businesses needing advanced features and multi-location support.",
    icon: Layers,
    popular: true,
    features: [
      "Complete product suite",
      "Advanced POS integration",
      "Multi-location management",
      "Priority support",
      "Custom branding",
      "AI-powered insights",
    ],
    cta: "Explore Business",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Enterprise",
    description: "Full platform access with dedicated infrastructure for large-scale operations.",
    icon: TrendingUp,
    features: [
      "All products included",
      "Unlimited locations",
      "Dedicated account manager",
      "24/7 premium support",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const PricingGeneralized = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 page-section relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="w-full h-full" density={80} size={1.2} speed={0.4} color="hsl(217 91% 60%)" opacity={0.2} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full glow-bg opacity-10 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Flexible Plans
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Solutions for Every Business Size
          </h2>
          <p className="text-lg text-muted-foreground">
            From single stores to multi-location chains, we have the perfect solution.
            Visit individual product pages for detailed pricing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`liquid-glass-card p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 ${
                tier.popular ? 'border-primary/50 shadow-[0_0_40px_hsl(217_91%_60%/0.15)]' : ''
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {tier.popular && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-bl-lg z-10">
                  Most Popular
                </div>
              )}

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <tier.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-bold text-2xl mb-3">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={tier.popular ? "hero" : "heroOutline"} 
                  className="w-full group/btn"
                  asChild
                >
                  <Link to="/products">
                    {tier.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="liquid-glass-card p-8 rounded-3xl max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
            <div className="relative">
              <h3 className="font-heading font-bold text-2xl mb-3">
                Need Custom Solutions?
              </h3>
              <p className="text-muted-foreground mb-6">
                We offer tailored packages for unique business requirements. 
                Get in touch for a personalized demo and custom pricing.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingGeneralized;
