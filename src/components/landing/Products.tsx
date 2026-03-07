import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import goImg from "@/assets/product-go.jpg";
import biteImg from "@/assets/product-bite.jpg";
import swiftImg from "@/assets/product-swift.jpg";
import hermitImg from "@/assets/product-hermit.jpg";

const products = [
  {
    id: "go",
    badge: "Go",
    title: "Go",
    tagline: "Mobile Checkout. No Lines.",
    description:
      "Go is a software-only retail checkout system that turns any smartphone into a checkout terminal. Customers simply scan products, pay instantly, and walk out. No checkout counters. No kiosks. No waiting.",
    image: goImg,
    imageAlt: "Dequeue Go mobile checkout app scanning products",
    features: [
      "Mobile and web checkout",
      "Instant digital payments",
      "No hardware required",
      "Retail analytics dashboard",
      "Promotions & targeted offers",
      "Seamless retail integration",
    ],
    benefits: [
      "Eliminate checkout congestion",
      "Increase customer throughput",
      "Reduce infrastructure costs",
      "Improve shopping experience",
    ],
  },
  {
    id: "bite",
    badge: "Bite",
    title: "Bite",
    tagline: "The Future of Dining",
    description:
      "Bite transforms restaurant menus into immersive digital experiences. Customers explore dishes in interactive 3D, order instantly, and pay without waiting for staff.",
    image: biteImg,
    imageAlt: "Dequeue Bite interactive 3D restaurant menu",
    features: [
      "Interactive 3D menu experience",
      "Instant ordering and payment",
      "No app download required",
      "Custom restaurant branding",
      "Table-based ordering system",
      "Analytics & performance insights",
    ],
    benefits: [
      "Faster table turnover",
      "Reduced operational friction",
      "Increased average order value",
      "Better dining experiences",
    ],
    reversed: true,
  },
  {
    id: "swift",
    badge: "Swift",
    title: "Swift",
    tagline: "The Smart Cart That Ends Checkout",
    description:
      "Swift is a modular smart cart system that synchronizes with a customer's smartphone to enable real-time checkout. Customers place products in the cart, track their purchases instantly, and complete payment without visiting a checkout counter.",
    image: swiftImg,
    imageAlt: "Dequeue Swift smart cart with digital display in store",
    features: [
      "Modular smart cart system",
      "Real-time cart synchronization",
      "Smartphone integration",
      "Plug-and-play installation",
      "Retail system compatibility",
    ],
    benefits: [
      "Faster shopping journeys",
      "Reduced checkout infrastructure",
      "Higher store efficiency",
      "Seamless customer experience",
    ],
  },
  {
    id: "hermit",
    badge: "Hermit",
    title: "Hermit",
    tagline: "Autonomous Retail Infrastructure",
    description:
      "Hermit is Dequeue's vision for the future of commerce. A fully autonomous, AI-powered dark store platform that manages the entire fulfillment process — from forecasting demand to picking, packing, and dispatch — without human intervention.",
    image: hermitImg,
    imageAlt: "Dequeue Hermit autonomous dark store with robotic arms",
    features: [
      "AI-powered demand forecasting",
      "Automated inventory management",
      "Intelligent picking and packing",
      "24/7 autonomous operations",
      "Plug-and-play deployment",
    ],
    benefits: [
      "Faster order fulfillment",
      "Lower operational costs",
      "Scalable infrastructure",
      "Zero human intervention",
    ],
    reversed: true,
  },
];

const Products = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <p className="text-primary font-medium mb-4 font-heading">Product Suite</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            One Platform. <span className="gradient-text">Four Powerful Products.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            An integrated ecosystem of retail technologies designed to remove friction from every step of the shopping experience.
          </p>
        </motion.div>

        {/* Product mini-nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { id: "go", label: "Go — Mobile Checkout" },
            { id: "bite", label: "Bite — Restaurant Ordering" },
            { id: "swift", label: "Swift — Smart Cart" },
            { id: "hermit", label: "Hermit — Dark Store" },
          ].map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="px-4 py-2 rounded-full text-sm border border-border hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
            >
              {p.label}
            </a>
          ))}
        </motion.div>

        <div className="divide-y divide-border/50">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
