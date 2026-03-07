import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Why Queue-Free Retail is the Next $50B Opportunity",
    excerpt: "The checkout line is the biggest friction point in retail. Here's why eliminating it creates massive value for retailers and consumers alike.",
    date: "Feb 28, 2026",
    category: "Industry",
    readTime: "5 min read",
  },
  {
    title: "How AI is Powering the Future of Autonomous Stores",
    excerpt: "From demand forecasting to robotic picking, artificial intelligence is making fully autonomous retail a reality. A deep dive into the tech behind Hermit.",
    date: "Feb 15, 2026",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    title: "The Rise of Mobile POS: Why Retailers Are Ditching Checkout Counters",
    excerpt: "Smartphones are replacing traditional POS terminals. We explore how mobile checkout is reshaping the in-store experience globally.",
    date: "Jan 30, 2026",
    category: "Trends",
    readTime: "4 min read",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-primary font-medium mb-4 font-heading">Blog</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Latest <span className="gradient-text">Insights</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  {post.date} · {post.readTime}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
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
