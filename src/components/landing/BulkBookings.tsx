import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Utensils, Handshake, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BulkOption {
  icon: any;
  title: string;
  description: string;
  benefits: string[];
  products: string[];
}

interface BulkBookingsProps {
  type?: 'retail' | 'restaurant' | 'both';
}

const getBulkOptions = (type: 'retail' | 'restaurant' | 'both' = 'both'): BulkOption[] => {
 const retailOption: BulkOption = {
    icon: Building2,
    title: "Retail Chains",
    description: "Multi-store retail operations",
    benefits: [
      "Centralized management dashboard",
      "Bulk deployment & updates",
      "Cross-store analytics",
      "Volume-based discounts",
      "Dedicated support team",
      "Custom integrations",
    ],
    products: ["Swift", "Go"],
  };
  
 const restaurantOption: BulkOption = {
    icon: Utensils,
    title: "Restaurant Chains",
    description: "Multi-location dining establishments",
    benefits: ["Centralized dashboard", "Multi-location analytics", "Unified menu management", "Cross-branch reporting", "Dedicated account manager", "Custom integrations", "24/7 premium support"],
    products: ["Bite"],
  };

  if (type === 'retail') return [retailOption];
  if (type === 'restaurant') return [restaurantOption];
 return [retailOption, restaurantOption];
};

const BulkBookings = ({ type = 'both' }: BulkBookingsProps) => {
 const ref = useRef(null);
 const inView = useInView(ref, { once: true, margin: "-100px" });
 const bulkOptions = getBulkOptions(type);

 return (
    <section className="py-24 page-section relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full glow-bg opacity-10 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Enterprise Solutions
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4">
            {type === 'retail' ? 'Bulk Bookings for Retail Chains' : 
             type === 'restaurant' ? 'Bulk Bookings for Restaurant Chains' :
             'Bulk Bookings for Chains'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Special pricing and dedicated support for multi-location businesses. 
            Get volume discounts and enterprise-grade features.
          </p>
        </motion.div>

        <div className={`grid gap-8 mx-auto mb-12 w-full ${bulkOptions.length === 1 ? 'grid-cols-1 max-w-xl' : 'lg:grid-cols-2 max-w-5xl'}`}>
          {bulkOptions.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="liquid-glass-card p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <option.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl mb-1">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  {option.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                    >
                      {product}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  {option.benefits.map((benefit, bi) => (
                    <div key={bi} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Request Custom Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="liquid-glass-card p-8 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Handshake className="w-8 h-8 text-primary" />
                <h3 className="font-heading font-bold text-2xl">Enterprise Partnership</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Need custom solutions for your large-scale operations? Let's build something together.
                Get personalized demos, custom pricing, and dedicated support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BulkBookings;
