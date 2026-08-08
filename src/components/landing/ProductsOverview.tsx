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
    tagline: "Mobile Checkout. Zero Lines.",
    desc: "Turn any customer smartphone into a instant mobile checkout terminal.",
    image: goImg,
  },
  {
    id: "bite",
    icon: UtensilsCrossed,
    title: "Bite",
    tagline: "Interactive Dining OS",
    desc: "Touchless order & pay with interactive digital menus and fast tab settlement.",
    image: biteImg,
  },
  {
    id: "swift",
    icon: ShoppingCart,
    title: "Swift",
    tagline: "Smart Cart Infrastructure",
    desc: "Intelligent shopping carts that calculate subtotals and process scan-and-go.",
    image: swiftImg,
  },
  {
    id: "hermit",
    icon: Bot,
    title: "Hermit",
    tagline: "Autonomous Dark Stores",
    desc: "AI-powered robotic fulfillment for 24/7 queue-free micro-hubs.",
    image: hermitImg,
  },
];

const ProductsOverview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section className="py-20 lg:py-28 page-section section-bg-gradient-down relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Product Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Four Modular Solutions. Infinite Scale.
          </h2>
          <p className="text-base text-muted-foreground mb-3 text-balance">
            Tailor-made for supermarkets, restaurants, boutique stores, and automated micro-fulfillment centers.
          </p>
          <p className="text-sm text-primary font-heading font-semibold tracking-wide">
            Queue less. Live more. #Dequeue
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/products/${p.id}`}
                className="liquid-glass-card overflow-hidden group block hover:border-primary/40 transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.tagline}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <p.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-xl">{p.title}</h3>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-2">{p.tagline}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                  </div>
                  <span className="inline-flex items-center text-sm text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    Explore {p.title} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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

