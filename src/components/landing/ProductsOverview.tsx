import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, UtensilsCrossed, ShoppingCart, Bot } from "lucide-react";
import goImg from "@/assets/product-go.jpg";
import biteImg from "@/assets/product-bite.jpg";
import swiftImg from "@/assets/product-swift.jpg";
import hermitImg from "@/assets/product-hermit.jpg";

const products = [
  {
    id: "go",
    icon: Smartphone,
    title: "Go",
    tagline: "Mobile Checkout. No Lines.",
    desc: "Turn any smartphone into a checkout terminal. Scan, pay, and walk out.",
    image: goImg,
  },
  {
    id: "bite",
    icon: UtensilsCrossed,
    title: "Bite",
    tagline: "The Future of Dining",
    desc: "Interactive 3D menus with instant ordering and payment.",
    image: biteImg,
  },
  {
    id: "swift",
    icon: ShoppingCart,
    title: "Swift",
    tagline: "Smart Cart Checkout",
    desc: "Modular smart carts that sync with your phone for real-time checkout.",
    image: swiftImg,
  },
  {
    id: "hermit",
    icon: Bot,
    title: "Hermit",
    tagline: "Autonomous Dark Stores",
    desc: "AI-powered fulfillment with zero human intervention.",
    image: hermitImg,
  },
];

const ProductsOverview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 page-section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            AI Solutions That Transform Retail
          </h2>
          <p className="text-lg text-muted-foreground">
            Four powerful products designed to remove friction from every step of the shopping experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/products/${p.id}`}
                className="liquid-glass-card overflow-hidden group block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.tagline}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <p.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{p.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
