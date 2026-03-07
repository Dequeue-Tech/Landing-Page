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
      "Go is a software-only retail checkout system that turns any smartphone into a checkout terminal. Customers simply scan products, pay instantly, and walk out.",
    image: goImg,
    imageAlt: "Dequeue Go mobile checkout",
    features: ["Mobile and web checkout", "Instant digital payments", "No hardware required", "Retail analytics dashboard", "Promotions & targeted offers", "Seamless retail integration"],
    benefits: ["Eliminate checkout congestion", "Increase customer throughput", "Reduce infrastructure costs", "Improve shopping experience"],
  },
  {
    id: "bite",
    badge: "Bite",
    title: "Bite",
    tagline: "The Future of Dining",
    description:
      "Bite transforms restaurant menus into immersive digital experiences. Customers explore dishes in interactive 3D, order instantly, and pay without waiting for staff.",
    image: biteImg,
    imageAlt: "Dequeue Bite interactive restaurant menu",
    features: ["Interactive 3D menu experience", "Instant ordering and payment", "No app download required", "Custom restaurant branding", "Table-based ordering", "Analytics & insights"],
    benefits: ["Faster table turnover", "Reduced operational friction", "Increased average order value", "Better dining experiences"],
    reversed: true,
  },
  {
    id: "swift",
    badge: "Swift",
    title: "Swift",
    tagline: "The Smart Cart That Ends Checkout",
    description:
      "Swift is a modular smart cart system that synchronizes with a customer's smartphone for real-time checkout. Place products, track purchases, pay without visiting a counter.",
    image: swiftImg,
    imageAlt: "Dequeue Swift smart cart",
    features: ["Modular smart cart system", "Real-time cart sync", "Smartphone integration", "Plug-and-play installation", "Retail system compatibility"],
    benefits: ["Faster shopping journeys", "Reduced checkout infrastructure", "Higher store efficiency", "Seamless customer experience"],
  },
  {
    id: "hermit",
    badge: "Hermit",
    title: "Hermit",
    tagline: "Autonomous Retail Infrastructure",
    description:
      "A fully autonomous, AI-powered dark store platform that manages fulfillment — from demand forecasting to picking, packing, and dispatch — without human intervention.",
    image: hermitImg,
    imageAlt: "Dequeue Hermit autonomous dark store",
    features: ["AI-powered demand forecasting", "Automated inventory management", "Intelligent picking and packing", "24/7 autonomous operations", "Plug-and-play deployment"],
    benefits: ["Faster order fulfillment", "Lower operational costs", "Scalable infrastructure", "Zero human intervention"],
    reversed: true,
  },
];

const Products = () => (
  <section className="pb-16">
    <div className="section-container">
      <div className="divide-y divide-border/30">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;
