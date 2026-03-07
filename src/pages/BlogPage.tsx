import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Blog from "@/components/landing/Blog";
import CTASection from "@/components/landing/CTASection";
import { motion } from "framer-motion";

const BlogPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-8 text-center">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Blog
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">Latest Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughts on queue-free retail, AI automation, and the future of commerce.
          </p>
        </motion.div>
      </div>
    </section>

    <Blog />
    <CTASection />
    <Footer />
  </div>
);

export default BlogPage;
