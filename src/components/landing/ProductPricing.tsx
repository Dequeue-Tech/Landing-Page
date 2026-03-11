import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Gift, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Link } from "react-router-dom";

interface ProductPlan {
  name: string;
  price: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
}

interface ProductPricingProps {
  productName: string;
  plans: ProductPlan[];
}

const ProductPricing = ({ productName, plans }: ProductPricingProps) => {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 page-section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            {productName} Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4">
            Choose Your {productName} Plan
          </h2>
          <p className="text-muted-foreground">No hidden fees. Cancel anytime.</p>

          {/* Free Trial Advertisement */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 inline-block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-primary">🎉 Free 1-Month Trial - No Questions Asked!</p>
                <p className="text-xs text-muted-foreground">Try any plan risk-free. Full access, zero commitment.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8">
            <div className="relative flex items-center gap-1 rounded-full border border-border bg-secondary/50 p-1 backdrop-blur-sm">
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  "relative z-10 h-9 rounded-full px-5 text-sm font-medium transition-colors",
                  !isYearly ? "text-primary-foreground" : "text-muted-foreground"
                )}
              >
                {!isYearly && (
                  <motion.div layoutId={`ps-${productName}`} className="absolute inset-0 rounded-full bg-primary" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <span className="relative z-10">Monthly</span>
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "relative z-10 h-9 rounded-full px-5 text-sm font-medium transition-colors",
                  isYearly ? "text-primary-foreground" : "text-muted-foreground"
                )}
              >
                {isYearly && (
                  <motion.div layoutId={`ps-${productName}`} className="absolute inset-0 rounded-full bg-primary" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  Yearly
                  <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-600 text-[10px] font-bold">
                    <Percent className="w-3 h-3" />
                    Save 17%
                  </div>
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* The Dynamic Grid Layout Fix */}
        <div className={cn(
          "grid gap-6 mx-auto w-full",
          plans.length === 1 ? "md:grid-cols-1 max-w-md" : 
          plans.length === 2 ? "md:grid-cols-2 max-w-4xl" : 
          "md:grid-cols-3"
        )}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "liquid-glass-card p-6 h-full flex flex-col",
                plan.popular && "border-primary/50 shadow-[0_0_40px_hsl(217_91%_60%/0.15)]"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              <h3 className="font-heading font-bold text-lg">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mt-4 mb-4">
                <span className="text-muted-foreground">₹</span>
                <NumberFlow
                  value={isYearly ? plan.yearlyPrice : plan.price}
                  className="text-3xl font-bold font-heading"
                  transformTiming={{ duration: 500, easing: "ease-out" }}
                />
                <span className="text-muted-foreground text-sm">/{isYearly ? "year" : "month"}</span>
              </div>

              <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full mb-6" asChild>
                <Link to="/contact">Get started</Link>
              </Button>

              <div className="space-y-2 flex-1">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPricing;