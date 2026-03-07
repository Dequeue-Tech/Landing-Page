import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Why Queue-Free Retail is the Next $50B Opportunity",
    excerpt: "The checkout line is the biggest friction point in retail. Here's why eliminating it creates massive value.",
    date: "Feb 28, 2026",
    category: "Industry",
    readTime: "5 min read",
  },
  {
    title: "How AI is Powering the Future of Autonomous Stores",
    excerpt: "From demand forecasting to robotic picking, AI is making fully autonomous retail a reality.",
    date: "Feb 15, 2026",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    title: "The Rise of Mobile POS: Why Retailers Are Ditching Checkout Counters",
    excerpt: "Smartphones are replacing traditional POS terminals. How mobile checkout reshapes the in-store experience.",
    date: "Jan 30, 2026",
    category: "Trends",
    readTime: "4 min read",
  },
  {
    title: "Smart Carts: The Bridge Between Physical and Digital Retail",
    excerpt: "How smart cart technology creates a hybrid shopping experience that customers love.",
    date: "Jan 15, 2026",
    category: "Products",
    readTime: "6 min read",
  },
  {
    title: "3D Menus and the Future of Restaurant Technology",
    excerpt: "Interactive dining experiences are driving higher order values and faster table turnover.",
    date: "Jan 5, 2026",
    category: "Innovation",
    readTime: "5 min read",
  },
  {
    title: "Building for Scale: Dequeue's Infrastructure Philosophy",
    excerpt: "How we design systems that work for a single store and scale to thousands.",
    date: "Dec 20, 2025",
    category: "Engineering",
    readTime: "8 min read",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 via-secondary to-background flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/40">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  {post.date} · {post.readTime}
                </div>
                <h3 className="font-heading font-semibold text-base mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="inline-flex items-center text-sm text-primary font-medium">
                  Read more <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
