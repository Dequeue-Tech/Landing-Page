import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Store, Building2, Hotel, Coffee, ShoppingBag, Utensils } from "lucide-react";

const industries = [
  { icon: Store, name: "Supermarkets" },
  { icon: Building2, name: "Department Stores" },
  { icon: Hotel, name: "Hotels" },
  { icon: Coffee, name: "Cafés & QSR" },
  { icon: ShoppingBag, name: "Fashion Retail" },
  { icon: Utensils, name: "Restaurants" },
];

const Partners = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 page-section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-heading font-semibold mb-2">
            Industries We Serve
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">
            Built for Every Retail Vertical
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="liquid-glass-card p-6 flex flex-col items-center gap-3 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <ind.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
