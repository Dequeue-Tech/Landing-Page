"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Go",
    description: "Perfect for small retailers looking to eliminate queues with mobile checkout.",
    price: 499,
    yearlyPrice: 4999,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Includes:",
      "Dequeue Go mobile checkout",
      "Up to 500 transactions/month",
      "Basic analytics dashboard",
      "Email support",
      "Single store deployment",
      "Digital payment integration",
      "Customer insights reports",
    ],
  },
  {
    name: "Bite",
    description: "Best for growing restaurants and cafes needing full digitalization with advanced features and multi-product access.",
    price: 399,
    yearlyPrice: 3999,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Includes:",
      "QR code menu scanning",
      "Complete POS system",
      "Table management",
      "Order tracking",
      "Payment integration",
      "Kitchen Display",
      "Analytics and reporting",
    ],
  },
  {
    name: "Enterprise",
    description: "Full platform access and dedicated infrastructure for large retailers.",
    isCustom: true, // <-- Added custom flag here
    price: 0, 
    yearlyPrice: 0,
    buttonText: "Contact sales",
    buttonVariant: "outline" as const,
    includes: [
      "Includes:",
      "Full product suite access",
      "Unlimited stores",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment option",
      "24/7 phone support",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center mb-12">
      <div className="relative flex items-center gap-1 rounded-full border border-border bg-secondary/50 p-1 backdrop-blur-sm">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors text-sm",
            selected === "0" ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          {selected === "0" && (
            <motion.div
              layoutId="pricing-switch"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">Monthly</span>
        </button>
        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors text-sm",
            selected === "1" ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          {selected === "1" && (
            <motion.div
              layoutId="pricing-switch"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">Yearly</span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden section-bg-dots" ref={pricingRef}>
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="w-full h-full" density={100} size={1.2} speed={0.5} color="hsl(217 91% 60%)" opacity={0.3} />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <TimelineContent animationNum={0} timelineRef={pricingRef}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
              Pricing
            </span>
          </TimelineContent>

          <TimelineContent animationNum={1} timelineRef={pricingRef}>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6 flex flex-wrap justify-center leading-relaxed py-2">
              <VerticalCutReveal splitBy="characters" staggerDuration={0.03}>
                Plans that work best for you
              </VerticalCutReveal>
            </h2>
          </TimelineContent>

          <TimelineContent animationNum={2} timelineRef={pricingRef}>
            <p className="text-lg text-muted-foreground mb-4">
              Trusted by retailers across India. Choose the plan that fits your business needs.
            </p>
          </TimelineContent>

          <TimelineContent animationNum={3} timelineRef={pricingRef}>
            <PricingSwitch onSwitch={togglePricingPeriod} />
          </TimelineContent>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <TimelineContent key={plan.name} animationNum={index + 4} timelineRef={pricingRef}>
              <Card
                className={cn(
                  "relative overflow-hidden liquid-glass-card h-full",
                  plan.popular && "border-primary/50 shadow-[0_0_40px_hsl(217_91%_60%/0.15)]"
                )}
              >
                <CardHeader className="pb-4">
                  {plan.popular && (
                    <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-bl-lg">
                      Popular
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-heading font-bold">{plan.name}</h3>
                  </div>

                  {/* Conditional "starting from" to preserve vertical alignment */}
                  <div className="text-muted-foreground text-sm">
                    {plan.isCustom ? "\u00A0" : "starting from"}
                  </div>

                  <div className="flex items-baseline gap-1 mt-4">
                    {/* Conditional Price Rendering */}
                    {plan.isCustom ? (
                      <span className="text-2xl font-bold font-heading">Contact Sales for Custom Pricing</span>
                    ) : (
                      <>
                        <span className="text-muted-foreground text-lg">₹</span>
                        <NumberFlow
                          value={isYearly ? plan.yearlyPrice : plan.price}
                          className="text-4xl font-bold font-heading"
                          transformTiming={{ duration: 500, easing: "ease-out" }}
                        />
                        <span className="text-muted-foreground text-sm">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <Button
                    variant={plan.popular ? "hero" : "heroOutline"}
                    className="w-full mb-6"
                    onClick={handleGetStarted}
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">{plan.includes[0]}</p>
                    <div className="space-y-2">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          ))}
        </div>
      </div>
    </section>
  );
}